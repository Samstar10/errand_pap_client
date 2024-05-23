import HomeNav from "../components/HomeNav"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Benefits from "../components/Benefits"
import Team from "../components/Team"

export default function Home() {
    return (
        <div className="px-6">
            <HomeNav />
            <Hero />
            <HowItWorks />
            <Benefits />
            <Team />
        </div>
    )
}