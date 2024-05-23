import { NavLink } from 'react-router-dom'
import VectorImage from '../assets/images/Vector.png'
import ButtonSuccess from './common/layout/specific/ButtonSuccess'

export default function HomeNav() {
    return (
        <div className="p-6 flex justify-between items-center">
            <div>
                <img src={VectorImage} alt="" />
            </div>

            <div className="flex gap-10">
                <NavLink className='text-xl'>About us</NavLink>
                <NavLink className='text-xl'>How it works</NavLink>
                <NavLink className='text-xl'>Benefits</NavLink>
                <NavLink className='text-xl'>Team</NavLink>
                <NavLink className='text-xl'>Contact Us</NavLink>
            </div>

            <div className='flex gap-6'>
                <ButtonSuccess>Login</ButtonSuccess>
                <button className='border-[1px] border-[#191a23] py-5 px-9 rounded-2xl text-xl'>Sign Up</button>
            </div>
        </div>
    )
}