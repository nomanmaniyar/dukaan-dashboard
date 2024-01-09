import { useState } from 'react'
import SideBar from './component/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar />
    </>
  )
}

export default App
