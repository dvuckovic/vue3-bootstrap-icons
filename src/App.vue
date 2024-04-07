<script setup lang="ts">
import { computed, ref } from 'vue'
import { escapeRegExp } from 'lodash-es'
import icons from 'virtual:bootstrap-icons/icons'
import { sizes, variants } from './types.ts'

const filter = ref('')

const filteredIcons = computed(() => {
  const filterRegex = new RegExp(escapeRegExp(filter.value.trim()), 'i')

  return icons.filter((icon: string) => filterRegex.exec(icon))
})
</script>

<template>
  <header
    class="bg-dark py-3 d-flex align-items-stretch border-bottom border-dark"
  >
    <div class="container-fluid d-flex align-items-center">
      <h1 class="d-flex align-items-center fs-4 text-white mb-0">
        vue3-bootstrap-icons
      </h1>
    </div>
  </header>
  <main class="container">
    <h2 class="my-4">
      <a name="props" />
      Props
    </h2>
    <ul class="list">
      <li>
        <a href="#icon">
          <code>icon</code>
        </a>
      </li>
      <li>
        <a href="#variant">
          <code>variant</code>
        </a>
      </li>
      <li>
        <a href="#size">
          <code>size</code>
        </a>
      </li>
      <li>
        <a href="#flip">
          <code>flip-#</code>
        </a>
      </li>
      <li>
        <a href="#rotate">
          <code>rotate</code>
        </a>
      </li>
      <li>
        <a href="#animation">
          <code>animation</code>
        </a>
      </li>
    </ul>
    <h3 class="my-4">
      <a name="icon" />
      <code>icon</code>
    </h3>
    <input
      v-model="filter"
      class="mb-3 form-control"
      placeholder="Start typing to filter..."
    />
    <ul
      class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list"
    >
      <li v-for="icon in filteredIcons" :key="icon" class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon :icon="icon" size="2x" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          {{ icon }}
        </div>
      </li>
    </ul>
    <h3 class="my-4">
      <a name="variant" />
      <code>variant</code>
    </h3>
    <ul
      class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list"
    >
      <li v-for="variant in variants" :key="variant" class="col mb-4">
        <div
          class="p-3 py-4 mb-2 text-center rounded"
          :class="{
            'bg-light': variant !== 'light',
            'bg-secondary': variant === 'light',
          }"
        >
          <BootstrapIcon
            :variant="variant"
            size="2x"
            icon="exclamation-circle-fill"
          />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          {{ variant }}
        </div>
      </li>
    </ul>
    <h3 class="my-4">
      <a name="size" />
      <code>size</code>
    </h3>
    <ul
      class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list"
    >
      <li v-for="size in sizes.slice().reverse()" :key="size" class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon :size="size" icon="exclamation-circle-fill" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          {{ size }}
        </div>
      </li>
    </ul>
    <h3 class="my-4">
      <a name="flip" />
      <code>flip-#</code>
    </h3>
    <ul
      class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list"
    >
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="bar-chart-fill" size="2x" flip-h />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          flip-h
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="bar-chart-fill" size="2x" flip-v />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          flip-v
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="bar-chart-fill" size="2x" flip-h flip-v />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          flip-h + flip-v
        </div>
      </li>
    </ul>
    <h3 class="my-4">
      <a name="rotate" />
      <code>rotate</code>
    </h3>
    <ul
      class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list"
    >
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="camera" size="2x" rotate="90" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          90
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="camera" size="2x" rotate="-90" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          -90
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="camera" size="2x" rotate="180" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          180
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="camera" size="2x" rotate="270" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          270
        </div>
      </li>
    </ul>
    <h3 class="my-4">
      <a name="animation" />
      <code>animation</code>
    </h3>
    <ul
      class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list"
    >
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="three-dots" size="4x" animation="cylon" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          cylon
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon
            icon="three-dots-vertical"
            size="4x"
            animation="cylon-vertical"
          />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          cylon-vertical
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="star-fill" size="4x" animation="fade" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          fade
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="arrow-clockwise" size="4x" animation="spin" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          spin
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon
            icon="arrow-counterclockwise"
            size="4x"
            animation="spin-reverse"
          />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          spin-reverse
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon
            icon="arrow-clockwise"
            size="4x"
            animation="spin-pulse"
          />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          spin-pulse
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon
            icon="arrow-counterclockwise"
            size="4x"
            animation="spin-reverse-pulse"
          />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          spin-reverse-pulse
        </div>
      </li>
      <li class="col mb-4">
        <div class="p-3 py-4 mb-2 bg-light text-center rounded">
          <BootstrapIcon icon="circle-fill" size="4x" animation="throb" />
        </div>
        <div class="name text-muted text-decoration-none text-center pt-1">
          throb
        </div>
      </li>
    </ul>
  </main>
</template>
