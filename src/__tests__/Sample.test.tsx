import { render,screen } from '@testing-library/react'
import {describe,expect,it} from 'vitest'
import App from '../App'
describe('first', () => {
  it('it',() => {
    render(<App/>)
    expect(screen.getByText('App')).toBeTruthy()
    expect(10).toEqual(10)
  })
 })