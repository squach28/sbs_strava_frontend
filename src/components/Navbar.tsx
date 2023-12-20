import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <ul className="w-full flex px-8 py-4 justify-between items-center font-bold">
        <li className="text-xl"><Link to="/">SBS Strava</Link></li>
        <li className="text-lg"><Link to="/leaderboard">Leaderboard</Link></li>
    </ul>
  )
}

export default Navbar