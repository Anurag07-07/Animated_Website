import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agence from "./pages/Agence"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <div className=" text-6xl text-white">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/agence" element={<Agence></Agence>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  )
}

export default App