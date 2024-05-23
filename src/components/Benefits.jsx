import { NavLink } from "react-router-dom"
import Line from "../assets/images/Line 4.png"

export default function Benefits() {
    return (
        <div className="px-6 mb-20">
            <div className="flex items-center gap-10 mb-20 mt-10">
                <div className="bg-[#b9ff66] px-2 rounded-lg text-center">
                    <h2 className="text-[2.5rem] font-medium">Benefits</h2>
                </div>
                <p className="w-3/5 text-lg">Experience the ultimate convenience and a range of advantages with ErrandsPap. Here’s why our service is the perfect solution for your everyday needs:</p>
            </div>
            <div className="bg-[#191a23] rounded-[45px] px-14 py-10 flex justify-between gap-16">
                <div className="flex flex-col justify-between gap-4">
                    <h4 className="font-medium text-2xl text-white">Convenience</h4>
                    <div className="flex flex-col justify-between gap-4">
                        <p className="text-white text-lg">Avoid the hassle of running errands. With ErrandsPap, you can order anything you need from the comfort of your home and have it delivered straight to your door.</p>
                        <NavLink className="flex items-center gap-2">
                            <span className="text-[#b9ff66] text-xl">Learn more</span>
                            <span className="material-symbols-outlined text-[#b9ff66] font-semibold">
                                north_east
                            </span>
                        </NavLink>
                    </div>
                </div>

                <img src={Line} alt="" />

                <div className="flex flex-col justify-between gap-4">
                    <h4 className="font-medium text-2xl text-white">Time-saving</h4>
                    <div className="flex flex-col justify-between gap-4">
                        <p className="text-white text-lg">Free up your schedule for more important tasks or leisure activities. Our efficient delivery service ensures you spend less time shopping and more time enjoying life.</p>
                        <NavLink className="flex items-center gap-2">
                            <span className="text-[#b9ff66] text-xl">Learn more</span>
                            <span className="material-symbols-outlined text-[#b9ff66] font-semibold">
                                north_east
                            </span>
                        </NavLink>
                    </div>
                </div>

                <img src={Line} alt="" />

                <div className="flex flex-col justify-between gap-4">
                    <h4 className="font-medium text-2xl text-white">Real-Time Tracking</h4>
                    <div className="flex flex-col justify-between gap-4">
                        <p className="text-white text-lg">Stay informed about your order status with our real-time tracking feature. Know exactly when your items will arrive without any guesswork.</p>
                        <NavLink className="flex items-center gap-2">
                            <span className="text-[#b9ff66] text-xl">Learn more</span>
                            <span className="material-symbols-outlined text-[#b9ff66] font-semibold">
                                north_east
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}