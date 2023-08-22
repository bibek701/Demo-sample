import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import NotFound from "./pages/Notfound"
import Rootlayout from "./component/Rootlayout"
import About from "./pages/web_info/About"
import Contact from "./pages/web_info/Contact"


const App = () => {




  return (

    <Routes>

      <Route path="/" element={<Rootlayout />} >


        <Route index element={<Homepage />} />

        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />



      </Route>

      <Route path="NotFound" element={<NotFound />} />



    </Routes >


  )
}
export default App