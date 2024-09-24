import './App.css'
import { useState } from 'react'

type Input = {
  name: string
  age: string
  email: string
}

function App() {
  const [nameInput, setNameInput] = useState<string>('')
  const [ageInput, setAgeInput] = useState<string>('')
  const [emailInput, setEmailInput] = useState<string>('')
  const [inputListe, setInputListe] = useState<Input[]>([])

  function handleOnChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setNameInput(event.target.value)
  }

  function handleOnChangeAge(event: React.ChangeEvent<HTMLInputElement>) {
    setAgeInput(event.target.value)
  }

  function handleOnChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailInput(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      nameInput.length != 0 &&
      ageInput.length != 0 &&
      emailInput.length != 0
    ) {
      const myInputObject = {
        name: nameInput,
        age: ageInput,
        email: emailInput,
      }

      const updatedInputListe = [...inputListe, myInputObject]
      setInputListe(updatedInputListe)
      resetInputs()
    }
  }

  function resetInputs() {
    setNameInput('')
    setAgeInput('')
    setEmailInput('')
  }

  return (
    <>
      <h1>My form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={'name'}>Name:</label>
          <input
            id={'name'}
            type={'text'}
            name={'name'}
            value={nameInput}
            onChange={handleOnChangeName}
          />
        </div>
        <div>
          <label htmlFor={'age'}>Age:</label>
          <input
            value={ageInput}
            id={'age'}
            type={'number'}
            name={'age'}
            onChange={handleOnChangeAge}
          />
        </div>
        <div>
          <label htmlFor={'email'}>Email:</label>
          <input
            value={emailInput}
            id={'email'}
            type={'email'}
            name={'email'}
            onChange={handleOnChangeEmail}
          />
        </div>
        <button>Submit</button>
      </form>
      <ul>
        {inputListe.map((input) => (
          <li key={input.email}>
            <h2>Name: {input.name}</h2>
            <h3>Alter: {input.age}</h3>
            <h4>Email: {input.email}</h4>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
