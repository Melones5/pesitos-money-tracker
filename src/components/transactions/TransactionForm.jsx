import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState' 

function TransactionForm() {

  const { addTransaction } = useGlobalState()

  const [description, setDeescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) =>{
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    })    
    console.log(description, amount)
    setAmount(0)
    setDeescription("")
  }

  return (
    <div>
      <form 
        onSubmit={onSubmit} 
      >
        <input 
          type="text" 
          placeholder='Ingresa una descripción' 
          onChange={(e) => setDeescription(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          value={description}
        />
        <input 
          type="number" 
          placeholder='Ingresa un monto' 
          step={0.01}
          onChange={(e) => setAmount(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          value={amount}
        />
        <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>Añade una transacción</button>
      </form>
    </div>
  )
}

export default TransactionForm