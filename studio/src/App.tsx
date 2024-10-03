import About from "./components/About"
import CanvasPage from "./components/CanvasPage"
import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {


  return (
    <>

    <Header />

    <Hero />
    <About />
  
    <div className="canvas_container">
        <CanvasPage />
    </div>


      
    </>
  )
}

export default App
