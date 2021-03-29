---
title: Vue Outside Click Directive
subtitle: Building a custom directive to detect clicks outside an element in Vue
readTime: 4 Mins
featured: true
references:
  - link: "https://vuejs.org/v2/guide/custom-directive.html"
    title: "Custom Directives - Vue.js"
    description: "VueJS documentation for writing custom directives"
    logo: "/vue.svg"
---

You might have used `v-model`, `v-if`, `v-for` or `v-show` shipped with Vue Core. These utilities are called directives, these are tiny commands that you can attach to DOM elements.

## Vue Directives

When building apps, the primary form of code reuse and abstraction that Vue has to offer is components - however there may be cases where you may need some low-level DOM access on plain elements, and this is where custom directives should be used. It’s important to note that directives are meant to encapsulate DOM manipulations only, while components are self-contained units that have their own view and data logic.

<!--more-->

One good example of such a use case is tooltips, [v-tooltip](https://github.com/Akryum/v-tooltip) is a popular library, it's a wrapper for [popperjs](https://github.com/popperjs/popper-core). This library can be registered as a directive and used as follows

```js
<button v-tooltip="'You have ' + count + ' new messages.'">
```

A couple of days ago, I was working on the component system at [deepsource.io](https://deepsource.io), building a dropdown menu component. I wanted the dropdown menu to close whenever we clicked outside the element. This is an ideal scenario where we could use a custom directive.

Building this as a directive will allow us to reuse this functionality wherever we want, for example modal component.

## Writing Custom Directives

Vue provides us with a comprehensive suite of hooks that are triggered at specific stages of rendering the element. The hooks are as follows:

- `bind` – This occurs once the directive is attached to the element. Think of this like an `init` function
- `inserted` – This hook occurs once the element is inserted into the parent DOM.
- `update` – This hook is called when the element updates, but children haven’t been updated yet.
- `componentUpdated` – This hook is called once the component _and_ the children have been updated.
- `unbind` – This hook is called once the directive is removed.

Vue documentation has a good example a `v-focus` directive with `autofocus` like behaviour for input components. You can check it out [here](https://vuejs.org/v2/guide/custom-directive.html#Intro).

Let’s move to the directive we will build.

### Outside Click Directive

Let’s start with a toy dropdown component

<code-block title="ToyDropdown.vue">

```vue
<template>
  <button v-on:click="toggle" class="dropdown-button">Menu</button>
  <div v-if="isOpen" v-outside-click="close" class="dropdown-body">
    <ul>
      <li>Account Settings</li>
      <li>Notifications</li>
      <li>Log Out</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ToyDropdown'
  data: {
	return {isOpen: false}
  },
  methods: {
	toggle() {
	  this.isOpen = !this.isOpen
	},
	close() {
	  this.isOpen = false
	}
  }
}
</script>
```

</code-block>

Here we want a function close to be triggered when clicked outside the element we’ve created the binding with Let’s start with a function that does exactly that.

```js
function onDocumentClick(e, el, fn) {
  let target = e.target;
  if (el !== target && !el.contains(target)) {
    fn(e);
  }
}
```

Let’s create the directive. In this case, we only need the `bind` and `unbind` hooks.

```js
export default {
  bind(el, binding) {
    const fn = binding.value;
    const click = function (e) {
      onDocumentClick(e, el, fn);
    };

    document.addEventListener("click", click);
  },
  unbind(el) {
    // Remove event handler
  },
};
```

The bind, like other hooks receive a few arguments. You can see all of them [here](https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments). The one we are interested is `binding` an object that contains the name of the directive, the value that is passed to it and more.

In our case, the value will be a function that will trigger on outside click.

This alone would work fine, however we need to remove the event listener on `unbind` this means we need to store the added event listener in the memory for reference later. This is simple to solve, all we need is an array, that we will store all the event listeners in. We will also attach an index to the data attributes of the element to recognise the index of the event listener.

Our directive function now looks like this

```js
const instance = [];

export default {
  bind(el, binding) {
    // add the index to element data attributes
    el.dataset.outsideClickIndex = instances.length;

    const fn = binding.value;
    const click = function (e) {
      onDocumentClick(e, el, fn);
    };

    document.addEventListener("click", click);
    instances.push(click);
  },
  unbind(el) {
    // Remove event handler
  },
};
```

Now we can use the `outsideClickIndex` and `instances` array to remove the event listener on unbind

```js
unbind(el) {
	const index = el.dataset.outsideClickIndex;
	const handler = instances[index];
	document.removeEventListener('click', handler);
	instances.splice(index, 1);
}
```

Another enhancement we can do is to also add events for `touchstart`

With this our directive looks something like this

<code-block title="outside-click.js">

```js
let instances = [];

function onDocumentClick(e, el, fn) {
  let target = e.target;
  if (el !== target && !el.contains(target)) {
    fn(e);
  }
}

export default {
  bind(el, binding) {
    el.dataset.outsideClickIndex = instances.length;

    const fn = binding.value;
    const click = function (e) {
      onDocumentClick(e, el, fn);
    };

    document.addEventListener("click", click);
    document.addEventListener("touchstart", click);
    instances.push(click);
  },
  unbind(el) {
    const index = el.dataset.outsideClickIndex;
    const handler = instances[index];
    document.removeEventListener("click", handler);
    document.removeEventListener("touchstart", click);
    instances.splice(index, 1);
  },
};
```

</code-block>


And here it is. In your main.js file you can register the directive as follows

```js
import outsideClickDirective from "../../directives/outside-click";
Vue.directive("outside-click", outsideClickDirective);
```

That’s all folks. Here is a gist with the typescript version of the directive that I actually ended up using. I shall be sharing more examples, tips and best practices on this blog, subscribe to my newsletter if it seems interesting to you. Don’t worry, I have taken the eternal oath of no spamming ever.

## References

<reference-card :references="references"></reference-card>