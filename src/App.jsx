import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import PdfViewer2 from './Components/Gliptozapdf'
import PdfViewer3 from './Components/new'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PdfViewer2 />
      {/* <PdfViewer3 /> */}
    </>
  )
}

export default App
