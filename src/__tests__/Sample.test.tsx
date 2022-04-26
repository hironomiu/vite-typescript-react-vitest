import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('sample', () => {
  it('equal', () => {
    expect(10).toEqual(10)
  })
  it('render', () => {
    render(<App />)
    expect(screen.getByText('Layout')).toBeTruthy()
    expect(10).toEqual(10)
  })
})
