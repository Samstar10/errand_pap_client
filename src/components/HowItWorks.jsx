// import NegativeImage from "../assets/images/-.png"
import PositiveImage from "../assets/images/Plus icon.png"

export default function HowItWorks() {
    return (
        <div className="px-6">
            <div className="flex items-center gap-10 mb-20 mt-10">
                <div className="bg-[#b9ff66] px-2 rounded-lg text-center">
                    <h2 className="text-[2.5rem] font-medium">How it works</h2>
                </div>
                <p className="w-3/5 text-lg">Discover the simplicity of having your essentials delivered right to your door. Follow these easy steps to enjoy a seamless shopping experience:</p>
            </div>

            <div className="border-[1px] border-b-8 border-[#191a23] rounded-[45px] px-14 py-10 bg-[#f3f3f3] hover:bg-[#b9ff66] mb-7">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <h4 className="text-6xl font-medium">01</h4>
                        <h4 className="font-medium text-3xl">Login or Sign Up</h4>
                    </div>
                    <div className="">
                        <img src={PositiveImage} alt="" />
                    </div>
                </div>

                <div></div>
            </div>

            <div className="border-[1px] border-b-8 border-[#191a23] rounded-[45px] px-14 py-10 bg-[#f3f3f3] hover:bg-[#b9ff66] mb-7">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <h4 className="text-6xl font-medium">02</h4>
                        <h4 className="font-medium text-3xl">Select Location and Building</h4>
                    </div>
                    <div className="">
                        <img src={PositiveImage} alt="" />
                    </div>
                </div>

                <div></div>
            </div>

            <div className="border-[1px] border-b-8 border-[#191a23] rounded-[45px] px-14 py-10 bg-[#f3f3f3] hover:bg-[#b9ff66] mb-7">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <h4 className="text-6xl font-medium">03</h4>
                        <h4 className="font-medium text-3xl">Select products to be delivered</h4>
                    </div>
                    <div className="">
                        <img src={PositiveImage} alt="" />
                    </div>
                </div>

                <div></div>
            </div>

            <div className="border-[1px] border-b-8 border-[#191a23] rounded-[45px] px-14 py-10 bg-[#f3f3f3] hover:bg-[#b9ff66] mb-7">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <h4 className="text-6xl font-medium">04</h4>
                        <h4 className="font-medium text-3xl">Track your ordered products</h4>
                    </div>
                    <div className="">
                        <img src={PositiveImage} alt="" />
                    </div>
                </div>

                <div></div>
            </div>

            <div className="border-[1px] border-b-8 border-[#191a23] rounded-[45px] px-14 py-10 bg-[#f3f3f3] hover:bg-[#b9ff66] mb-7">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <h4 className="text-6xl font-medium">05</h4>
                        <h4 className="font-medium text-3xl">Receive your products</h4>
                    </div>
                    <div className="">
                        <img src={PositiveImage} alt="" />
                    </div>
                </div>

                <div></div>
            </div>

            <div className="border-[1px] border-b-8 border-[#191a23] rounded-[45px] px-14 py-10 bg-[#f3f3f3] hover:bg-[#b9ff66] mb-20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <h4 className="text-6xl font-medium">06</h4>
                        <h4 className="font-medium text-3xl">Pay</h4>
                    </div>
                    <div className="">
                        <img src={PositiveImage} alt="" />
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    )
}