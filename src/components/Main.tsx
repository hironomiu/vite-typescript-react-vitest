import { useState } from 'react'

const Main = () => {
  const [count, setCount] = useState<number>(0)

  const handleDecrement = () => {
    setCount((_prev) => --_prev)
  }
  const handleIncrement = () => {
    setCount((_prev) => ++_prev)
  }

  return (
    <main className="flex flex-col items-center">
      <div className="mt-10 text-xl">
        <button onClick={handleDecrement} data-testid="decrement-button">
          -
        </button>
        <span data-testid="count">{count}</span>
        <button onClick={handleIncrement} data-testid="increment-button">
          +
        </button>
      </div>
    </main>
  )
}

export default Main
