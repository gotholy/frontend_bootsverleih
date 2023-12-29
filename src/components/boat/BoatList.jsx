import { myContext } from "../../context/FetchProvider"
import BoatItem from "./BoatItem"
import { Link } from "react-router-dom";

export default function BoatList() {
    
        const {boats} = myContext();
        console.log("boats in BoatList:", boats);
      
        

  return (
    <section className="bg-red-200 h-screen px-28 mx-16 ">
      <h3>Boote</h3>
      <div
        className="grid grid-cols-3 gap-4 my-10justify-arround"
        >
        {boats.map((boat) => (
          <BoatItem boat={boat} key={boat._id}/>
          ))}
      </div>
      <div className="my-10 ">

          <Link className=" bg-blue-400 rounded-md py-3 px-3 " to={"/addBoat"}>Boot hinzufügen</Link>
      </div>
    </section>
  );
}