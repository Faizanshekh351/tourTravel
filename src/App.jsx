import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offers from './components/Offers'
import Packages from './components/Packages'
import Stats from './components/Stats'
import './index.css'


function App() {

console.log("app is running")

  return (
    <div>
      <Navbar />
        <Hero />
      <Offers />
        <Packages />
      <Stats />
    </div>
  )
}

export default App