import './App.css'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skill from './components/Skill/Skill'

function App() {


  return (
    <div className="App">

      <Navbar/>
      <Banner/>   
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    
    
  )
}

export default App
