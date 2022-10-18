---
title: Shifty
logo: /shifty.svg
featured: true
subtitle: Shifty is a tiny zero-dependency secrets generator, built for the web using TypeScript.
github: https://github.com/deepsourcelabs/shifty
license: MIT
hero: shifty-banner.png
references:
  - link: "https://deepsource.io/blog/dont-use-math-random/"
    title: "Don't use Math.random()"
    description: "Shifty is a tiny zero-dependency secrets generator, built for the web using TypeScript."
    logo: "/deepsource.svg"
---

Shifty is a tiny zero-dependency secrets generator built for the web using TypeScript. Shifty is made for the browser and won't work with Node. You can use the built-in [crypto](https://nodejs.org/api/crypto.html#crypto) module instead.

It provides a straightforward API to generate a secret of any length. To start using shifty, just install it using the package manager of your choice.

```sh
yarn add @deepsource/shifty
```
Using Shifty is quite straightforward. Just initialize the Shifty class with the defaults and use the generate method to generate secrets of any length. Shifty falls back to using Math.random if the crypto object is not present on window. It shows a warning on the developer console when using the fallback method.

```js
import Shifty from '@deepsource/shifty'

const shifty = new Shifty((harden = true), (defaultLength = 16))
shifty.generate((length = 12)) // G8qZt7PEha^s
```

Shifty is just a single TypeScript file. You can peek into the source code [here](https://github.com/deepsourcelabs/shifty/blob/master/src/shifty.ts). Give it a star if you like it!

<reference-card :references="references"></reference-card>
