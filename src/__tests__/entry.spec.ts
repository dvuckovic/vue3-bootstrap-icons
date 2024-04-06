import { describe, expect, it } from 'vitest'
import { BootstrapIcon } from '../index.ts'
import { injectBootstrapIcons } from '../utils.ts'

describe('index entrypoint', () => {
  it('exports vue component', () => {
    expect(BootstrapIcon).toBeTypeOf('object')
  })
})

describe('utils entrypoint', () => {
  it('exports utility function', () => {
    expect(injectBootstrapIcons).toBeTypeOf('function')
  })
})
