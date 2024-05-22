import { useEffect } from "react"

export default function Orders() {

    useEffect(() => {
        console.log("Orders")
    }, [])

    return (
        <div>
            <h1>Orders</h1>
        </div>
    )
}