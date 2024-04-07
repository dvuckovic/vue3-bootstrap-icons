# vue3-bootstrap-icons

A Vue.js component for rendering [Bootstrap Icons](https://icons.getbootstrap.com/) via the SVG sprite method.

[Demo]

## Install

```sh
yarn add @dvuckovic/vue3-bootstrap-icons bootstrap-icons
```

## Usage

Global component registration and injecting sprites:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapIcon } from '@dvuckovic/vue3-bootstrap-icons'
import { injectBootstrapIcons } from '@dvuckovic/vue3-bootstrap-icons/utils'
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg?raw'
import '@dvuckovic/vue3-bootstrap-icons/dist/style.css'

injectBootstrapIcons(BootstrapIcons)

const app = createApp(App)

app.component('BootstrapIcon', BootstrapIcon)

app.mount('#app')
```

Usage in template:

```html
<BootstrapIcon
  icon="exclamation-circle-fill"
  size="2x"
  flip-v />
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

### Run Tests

```sh
yarn test
```

### Dev Server (Demo)

```sh
yarn dev
```

### Build

```sh
yarn build
```

[Demo]: https://dvuckovic.com/2021/03/12/vue-bootstrap-icons/
