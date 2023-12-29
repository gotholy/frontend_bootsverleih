import { Link } from "react-router-dom"
import BoatList from "../components/boat/BoatList"
import Header from "../components/header/header"


export default function Boats(){
    return(
    <main className="h-screen w-full bg-red-200 text-center flex flex-row">
       <Header />
       <section className="">
        <BoatList/>
       </section>
    </main>
    )
}