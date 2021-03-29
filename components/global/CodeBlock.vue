<template>
  <div>
    <div class="codeblock rounded-t-md flex w-full overflow-hidden">
      <div class="space-x-2 px-4 py-2 file-name">
        <span class="text-sm">{{ title }}</span>
      </div>
      <div class="flex-grow flex-row-reverse">
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CodeBlock",
  props: ["title"],
};
</script>
<style scoped>
.codeblock {
  background-color: #171717;
  color: #f4f4f4;
}

.file-name {
  background-color: #1f1f1f;
  border-bottom: #b392f0 2px solid;
}

pre {
  margin-top: 0 !important;
  border-top-right-radius: 0px !important;
  border-top-left-radius: 0px !important;
}
</style>
