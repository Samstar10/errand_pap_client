import { NavLink } from 'react-router-dom'
import VectorImage from '../assets/images/Vector.png'

export default function HomeNav() {
    return (
        <div>
            <div>
                <img src={VectorImage} alt="" />
            </div>

            <div>
                <NavLink>About us</NavLink>
            </div>

            <div></div>
        </div>
    )
}