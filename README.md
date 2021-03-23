# vue3-bootstrap-icons

[![Build Status](https://img.shields.io/github/workflow/status/dvuckovic/vue3-bootstrap-icons/Test)](https://github.com/dvuckovic/vue3-bootstrap-icons/actions/workflows/checks.yml)
[![Vue.js](https://img.shields.io/github/package-json/dependency-version/dvuckovic/vue3-bootstrap-icons/dev/vue)](https://vuejs.org/)
[![Bootstrap Icons](https://img.shields.io/github/package-json/dependency-version/dvuckovic/vue3-bootstrap-icons/bootstrap-icons)](https://icons.getbootstrap.com/)
[![License](https://img.shields.io/github/package-json/license/dvuckovic/vue3-bootstrap-icons?color=white)](http://www.wtfpl.net/)

A Vue.js component for rendering [Bootstrap Icons](https://icons.getbootstrap.com/) via the SVG sprite method.

For Vue 2 version of this component, check out [@dvuckovic/vue-bootstrap-icons](https://www.npmjs.com/package/@dvuckovic/vue-bootstrap-icons).

[Demo] [Changelog]

## Install

```sh
npm install --save @dvuckovic/vue3-bootstrap-icons
```

## Usage

Global component registration:

```js
import Vue from 'vue';
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';

const app = Vue.createApp({});

app.component('BootstrapIcon', BootstrapIcon);

app.mount('#app);
```

Local component registration:

```js
import { defineComponent } from 'vue';
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';

export default defineComponent({
    components: {
        BootstrapIcon,
    },
});
```

Usage in template:

```html
<BootstrapIcon
    icon="exclamation-circle-fill"
    size="2x"
    flip-v />
```

### SSR

For SSR environment, make sure to import from the following path:

```js
import BootstrapIconSsr from '@dvuckovic/vue3-bootstrap-icons/dist/bootstrap-icon.ssr';
```

### IIFE

An IIFE-flavor build for including the component in existing pages is also provided, but you must make sure that the path to [the Bootstrap Icons SVG sprite](https://icons.getbootstrap.com/#sprite) is declared first via the expected `BootstrapIcons` global variable:

 ```html
<script>var BootstrapIcons = '/path/to/bootstrap-icons.svg';</script>
<script src="//unpkg.com/@dvuckovic/vue3-bootstrap-icons/dist/bootstrap-icon.min.js"></script>
```

> Note that the SVG sprite asset must be available via the same server where the page is hosted, in order for the inlining to work in all browsers (a security limitation).

## Props

### `icon`

The name of the icon, for a full list of supported icons please see [the official documentation](https://icons.getbootstrap.com/#icons).

### `variant`

The color of the icon, supports standard [Bootstrap variants](https://getbootstrap.com/docs/5.0/customize/color/#theme-colors):

* `success`
* `warning`
* `danger`
* `info`
* `primary`
* `secondary`
* `dark`
* `light`

In addition to this, the component can inherit the current CSS color style, simply set it for the root element:

```css
.bi {
    color: fuchsia;
}
```

### `size`

The size of the icon, supports following values:

* `sm`
* `md`
* `lg`
* `2x`
* `3x`
* `4x`
* `5x`

In addition to this, the component can inherit the current CSS font size style, simply set it for the root element:

```css
.bi {
    font-size: 2.5rem;
}
```

### `flip-h` & `flip-v`

Flip the component on the horizontal or vertical axis. The two props can be combined, i.e.:

```html
<BootstrapIcon
    icon="bar-chart-fill"
    flip-h
    flip-v />
```

### `rotate`

The rotation of the icon, a number between `-360` and `360`.

### `animation`

The animation style of the icon, supports following values:

* `cylon`
* `cylon-vertical`
* `fade`
* `spin`
* `spin-reverse`
* `spin-pulse`
* `spin-reverse-pulse`
* `throb`

All animations are infinite (_loops_).

## Development

The component was packaged for [NPM](https://www.npmjs.com) based on the [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup) template.

Feel free to submit [issues](https://github.com/dvuckovic/vue3-bootstrap-icons/issues) and [pull requests](https://github.com/dvuckovic/vue3-bootstrap-icons/pulls) on [Github](https://github.com/dvuckovic/vue3-bootstrap-icons).

### Run Tests

```sh
npm test
```

### Dev Server

```sh
npm run serve
```

### Build

```sh
npm run build
```

[Demo]: https://dvuckovic.com/2021/03/12/vue-bootstrap-icons/
[Changelog]: ./CHANGELOG.md
