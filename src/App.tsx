import useInput from "./hooks/useInput"

const App = () => {
  const [name, nameHandler] = useInput('Guest')
  return (
    <div>
      <input type="text" value={name} onChange={nameHandler} />
      <button onClick={() => console.log(name)} >Print</button>
    </div>
  )
}

export default App