import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MyRoutes } from "./routers/routes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/layout/index"



function App() {

  return (
    <BrowserRouter>
      <>
        <Header />
        <MyRoutes />
      </>
    </BrowserRouter>
  )
}

export default App
