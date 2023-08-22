import React from "react"

import { Outlet } from "react-router"
import Header from "./Header"

const Rootlayout = () => {
  return (
    <>





      <Header />
      <Outlet />
    </>
  )
}
export default Rootlayout