import { Routes, Route } from "react-router-dom"

import Contact from "./Components/Contact/Contact"
import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import NotificationBanner from "./Components/Header/Head"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import ChefConnection from "./Components/ChefConnection/ChefConnection"
import CookForAMonth from "./Components/CookForAMonth/CookForAMonth"
import CookForParty from "./Components/CookForParty/CookForParty"


const App = () => {
  return (
    <div>
      <NotificationBanner/>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="join-with-chef" element={ <ChefConnection/> } />
        <Route path="cook-for-a-month" element={ <CookForAMonth/> } />
        <Route path="chef-for-party" element={ <CookForParty/> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App