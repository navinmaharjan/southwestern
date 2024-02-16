import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer"
import Introduction from "./Pages/AboutUs/Introduction"
import OurMission from "./Pages/AboutUs/OurMission"
import OurFacilities from "./Pages/AboutUs/OurFacilities"
import OurStrength from "./Pages/AboutUs/OurStrength"
import OurTeam from "./Pages/AboutUs/OurTeam"
import AdmissionForm from "./Pages/AdmissionForm/AdmissionForm"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/our-facilities" element={<OurFacilities />} />
            <Route path="/our-strength" element={<OurStrength />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/admission-form" element={<AdmissionForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App