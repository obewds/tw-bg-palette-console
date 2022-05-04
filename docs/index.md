---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


::: danger
This is an example GitHub Pages site and is NOT intended for actual use in real projects/products!
:::


# @obewds/tw-bg-palette-console

Welcome to the docs page for OBE:WDS's `TwBgPaletteConsole.vue` component for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/tw-bg-palette-console --save-dev
```




## Import Component




### Template syntax

```html{2}
<template>
    <TwBgPaletteConsole/>
</template>
```




### Script setup syntax

```html{2}
<script setup lang="ts">
    import { TwBgPaletteConsole } from '@obewds/tw-bg-palette-console'
</script>
```




### Composition API syntax

```html{3,6}
<script lang="ts">
    import { defineComponent } from 'vue'
    import { TwBgPaletteConsole } from '@obewds/tw-bg-palette-console'

    export default defineComponent({
        components: { TwBgPaletteConsole }
    })
</script>
```




## Props




### text

:white_check_mark: - Type `String`  
:x: - Not Required  
:x: - Doesn't Validate


```html{2}
<template>
    <TwBgPaletteConsole text="My text prop string"/>
</template>
```

Outputs:

```html
<div>My text prop string</div>
```

::: warning
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




## Slots




### default

```html{2-4}
<template>
    <TwBgPaletteConsole>
        My slot content
    </TwBgPaletteConsole>
</template>
```

Outputs:

```html
<div>My slot content</div>
```

::: danger
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




## Uninstall

```bash
npm uninstall @obewds/tw-bg-palette-console
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
