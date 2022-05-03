import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/dom'
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
    expect(screen.getByTestId('button')).toBeTruthy()
    // TODO: TypeError: target.ownerDocument.createRange is not a function
    userEvent.click(screen.getByTestId('button'))
  })
})
