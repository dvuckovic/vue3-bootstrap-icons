import { describe, expect, it } from 'vitest'
import { BootstrapIcon } from '../entry/index.ts'
import { injectBootstrapIcons } from '../entry/utils.ts'

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
