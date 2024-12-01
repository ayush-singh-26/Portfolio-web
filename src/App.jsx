import './App.css'
import Banner from './components/Banner/BAnner'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects/Projects'
import Skill from './components/Skill/Skill'

function App() {


  return (
    <div className="App">

      <Navbar/>
      <Banner/>   
      {/* <Skill/>
      <Projects/>
      <Contact/> */}
    </div>
    
    
  )
}

export default App
