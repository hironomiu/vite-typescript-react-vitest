import { render,screen } from '@testing-library/react'
import {describe,expect,it} from 'vitest'
import App from '../App'
describe('first', () => {
  it('it',() => {
    render(<App/>)
    screen.debug()
    expect(10).toEqual(10)
  })
 })