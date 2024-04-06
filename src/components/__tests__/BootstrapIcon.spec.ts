import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/vue'
import BootstrapIcon from '../BootstrapIcon.vue'

describe('BootstrapIcon', () => {
  it('renders SVG sprite', () => {
    const view = render(BootstrapIcon, {
      props: {
        icon: 'exclamation-circle-fill',
      },
    })

    const svg = view.getByRole('graphics-document')

    expect(svg.classList.contains('bi')).toBe(true)

    const group = svg.children[0]

    expect(group.attributes.getNamedItem('transform-origin')?.value).toEqual('center')

    const use = group.children[0]

    expect(use.attributes.getNamedItem('xlink:href')?.value).toEqual('#exclamation-circle-fill')
  })

  it('logs warning if icon prop is omitted', () => {
    console.warn = vi.fn()

    render(BootstrapIcon)

    expect(console.warn).toHaveBeenCalledOnce()
  })

  it('supports variants', () => {
    const view = render(BootstrapIcon, {
      props: {
        icon: 'exclamation-circle-fill',
        variant: 'danger',
      },
    })

    const svg = view.getByRole('graphics-document')

    expect(svg.classList.contains('bi--variant-danger')).toBe(true)
  })

  it('supports sizes', () => {
    const view = render(BootstrapIcon, {
      props: {
        icon: 'exclamation-circle-fill',
        size: 'md',
      },
    })

    const svg = view.getByRole('graphics-document')

    expect(svg.classList.contains('bi--size-md')).toBe(true)
  })

  it('supports flipping', async () => {
    const view = render(BootstrapIcon, {
      props: {
        icon: 'exclamation-circle-fill',
        flipH: true,
      },
    })

    let svg = view.getByRole('graphics-document')
    let group = svg.children[0]

    expect(group.attributes.getNamedItem('transform')?.value).toEqual('scale(-1 1)')

    await view.rerender({
      flipV: true,
    })

    expect(group.attributes.getNamedItem('transform')?.value).toEqual('scale(-1 -1)')

    await view.rerender({
      flipH: false,
      flipV: true,
    })

    expect(group.attributes.getNamedItem('transform')?.value).toEqual('scale(1 -1)')
  })

  it('supports rotation', () => {
    const view = render(BootstrapIcon, {
      props: {
        icon: 'exclamation-circle-fill',
        rotate: 90,
      },
    })

    const svg = view.getByRole('graphics-document')
    const group = svg.children[0]

    expect(group.attributes.getNamedItem('transform')?.value).toEqual('rotate(90)')
  })

  it('supports animation', () => {
    const view = render(BootstrapIcon, {
      props: {
        icon: 'exclamation-circle-fill',
        animation: 'spin',
      },
    })

    const svg = view.getByRole('graphics-document')

    expect(svg.classList.contains('bi--animation-spin')).toBe(true)
  })
})
