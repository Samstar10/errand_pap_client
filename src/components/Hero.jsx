import ButtonSuccess from "./common/layout/specific/ButtonSuccess"
import OrderDelivered from "../assets/images/Order Delivered 3.png"

export default function Hero() {
    return (
        <div className="px-6 py-8 grid grid-cols-2 gap-[6.8125rem]">
            <div className="flex flex-col justify-center gap-9">
                <h1 className="font-medium text-6xl">Get Anything Delivered Straight to Your Door.</h1>
                <p className="text-xl">Save time and energy by ordering groceries, essentials, and more from your favorite stores. Enjoy the convenience of having everything you need delivered directly to your apartment without ever stepping out.</p>
                <div className="w-1/3">
                    <ButtonSuccess>Shop Now</ButtonSuccess>
                </div>
            </div>
            <div>
                <img src={OrderDelivered} alt="Order delivered" className="w-full" />
            </div>
        </div>
    )
}