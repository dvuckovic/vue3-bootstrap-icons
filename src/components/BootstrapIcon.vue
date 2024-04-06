<script setup lang="ts">
import { computed } from 'vue'
import type { BootstrapIconAnimation, BootstrapIconSize, BootstrapIconVariant } from '../types.ts'

const props = defineProps<{
  icon: string;
  variant?: BootstrapIconVariant
  size?: BootstrapIconSize
  flipH?: boolean
  flipV?: boolean
  rotate?: String | Number
  animation?: BootstrapIconAnimation
}>()

const cssClasses = computed(() => {
  const classes = []

  if (props.variant) classes.push(`bi--variant-${props.variant}`)
  if (props.size) classes.push(`bi--size-${props.size}`)
  if (props.animation) classes.push(`bi--animation-${props.animation}`)

  return classes
})

const svgTransform = computed(() => {
  if (!props.flipH && !props.flipV && !props.rotate) return ''

  let scale
  let rotate

  if (props.flipV && props.flipH) {
    scale = '-1 -1'
  } else if (props.flipH) {
    scale = '-1 1'
  } else if (props.flipV) {
    scale = '1 -1'
  }

  if (props.rotate) {
    rotate = props.rotate
  }

  return (scale ? `scale(${scale})` : '')
    + (rotate ? `rotate(${rotate})` : '')
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="bi"
    :class="cssClasses"
    role="graphics-document">
    <g
      :transform="svgTransform"
      transform-origin="center"
    >
      <use :xlink:href="`#${icon}`" />
    </g>
  </svg>
</template>

<style lang="postcss" scoped>
.bi {
  fill: currentColor;
  width: 1em;
  height: 1em;
  font-size: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;

  &--variant {
    &-success {
      color: var(--bs-success);
    }

    &-warning {
      color: var(--bs-warning);
    }

    &-danger {
      color: var(--bs-danger);
    }

    &-info {
      color: var(--bs-info);
    }

    &-primary {
      color: var(--bs-primary);
    }

    &-secondary {
      color: var(--bs-secondary);
    }

    &-dark {
      color: var(--bs-dark);
    }

    &-light {
      color: var(--bs-light);
    }
  }

  &--size {
    &-sm {
      font-size: 0.75em;
    }

    &-md {
      font-size: 1.25rem;
    }

    &-lg {
      font-size: 1.33333333rem;
    }

    &-2x {
      font-size: 2rem;
    }

    &-3x {
      font-size: 3rem;
    }

    &-4x {
      font-size: 4rem;
    }

    &-5x {
      font-size: 5rem;
    }
  }

  &--animation {
    &-cylon {
      animation: bi-animation-cylon .75s ease-in-out infinite alternate;
    }

    &-cylon-vertical {
      animation: bi-animation-cylon-vertical .75s ease-in-out infinite alternate;
    }

    &-fade {
      animation: bi-animation-fade .75s ease-in-out infinite alternate;
    }

    &-spin {
      animation: bi-animation-spin 2s linear infinite normal;
    }

    &-spin-reverse {
      animation: bi-animation-spin 2s linear infinite reverse;
    }

    &-spin-pulse {
      animation: bi-animation-spin 1s steps(8) infinite normal;
    }

    &-spin-reverse-pulse {
      animation: bi-animation-spin 1s steps(8) infinite reverse;
    }

    &-throb {
      animation: bi-animation-throb .75s ease-in-out infinite alternate;
    }
  }
}

@keyframes bi-animation-cylon {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}

@keyframes bi-animation-cylon-vertical {
  0% {
    transform: translateY(25%);
  }
  100% {
    transform: translateY(-25%);
  }
}

@keyframes bi-animation-fade {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bi-animation-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

@keyframes bi-animation-throb {
  0% {
    opacity: 0.5;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
