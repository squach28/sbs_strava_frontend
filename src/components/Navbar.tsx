import { Link } from "react-router-dom"
import MoonIcon  from '../assets/icons/moon-solid.svg'
import SunIcon  from '../assets/icons/sun-solid.svg'
import { useState } from "react"
const Navbar = () => {
  const [darkMode, setDarkMode] = useState<string>(localStorage.theme)

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      if(prev === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        return 'light'
      } else {
        document.documentElement.classList.add('dark')  
        localStorage.theme = 'dark'
        return 'dark'
      }
    })
  }

  return (
    <ul className="w-full flex px-8 py-4 justify-between items-center font-bold bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark">
        <li className="text-xl"><Link to="/">SBS Strava</Link></li>
        <li className="hover:cursor-pointer" onClick={toggleDarkMode}>{darkMode === 'dark' ? <img className="" src={SunIcon} /> : <img className="" src={MoonIcon}/>}</li>
        <li className="text-lg"><Link to="/leaderboard">Leaderboard</Link></li>
    </ul>
  )
}

export default Navbar