import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from '../components/Main'

describe('Main', () => {
  it('test', async () => {
    render(<Main />)
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
    expect(screen.getByTestId('count').textContent).toBe('0')
    userEvent.click(screen.getByRole('button', { name: '+' }))

    screen.debug()
  })
})
