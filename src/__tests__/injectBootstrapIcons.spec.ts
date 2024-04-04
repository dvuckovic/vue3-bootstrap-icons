import { afterEach, describe, expect, it } from 'vitest'
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg?raw'
import injectBootstrapIcons from '../injectBootstrapIcons.ts'

describe('injectBootstrapIcons', () => {
  afterEach(() => {
    document.getElementById('BootstrapIcons')?.remove()
  })

  it('injects passed SVG content', () => {
    injectBootstrapIcons(BootstrapIcons)

    const svg = document.getElementById('BootstrapIcons')

    expect(svg?.tagName).toBe('svg')
    expect(svg?.style.display).toBe('none')

    const symbol = svg?.children[0]

    expect(symbol?.tagName).toBe('symbol')
    expect(symbol?.classList.contains('bi')).toBe(true)
  })

  it('does not inject empty HTML', () => {
    injectBootstrapIcons('')

    expect(document.getElementById('BootstrapIcons')).toBeNull()
  })

  it('does not double inject', () => {
    const testSvgElement = document.createElement('svg')
    testSvgElement.id = 'BootstrapIcons'
    document.body.append(testSvgElement)

    expect(document.getElementsByTagName('svg')).toHaveLength(1)

    injectBootstrapIcons(BootstrapIcons)

    expect(document.getElementsByTagName('svg')).toHaveLength(1)
  })
})
