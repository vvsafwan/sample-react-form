import React, { useState } from 'react'
import './App.css'
  
const App = () => {

  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [fullname, setFullname] = useState("")
  const [lastnameNew, setLastnameNew] = useState("")

  const onSubmits = (e) => {
    e.preventDefault()
    setFullname(name)
    setLastnameNew(lastname)
  }

  const InputEvent1 = (e) => {
    setName(e.target.value)
  }

  const InputEvent2 = (e) => {
    setLastname(e.target.value)
  }

  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullname} {lastnameNew}
            </h1>
            <input 
              type='text'
              placeholder='Enter your name'
              onChange={InputEvent1}
              value={name}
            />
            <input 
              type='text'
              placeholder='Enter your last name'
              onChange={InputEvent2}
              value={lastname}
            />
            <br />
            <button type='submit'> Submit Me 👍</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App