import HomeNav from "../components/HomeNav"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"

export default function Home() {
    return (
        <div className="px-6">
            <HomeNav />
            <Hero />
            <HowItWorks />
        </div>
    )
}