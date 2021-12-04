import {useState} from "react" //hook --> gancho

export function Counter() {
  const [counter, setCounter] = useState(0) // utilizando [] para desestruturar um array. useState retorna um array, do outro lado estamos desestruturando o array em 2 estados.

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
