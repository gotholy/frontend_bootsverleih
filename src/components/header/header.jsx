import { Link } from "react-router-dom";

export default function Header() {
    return (
      <aside className="flex flex-col justify-center w-1/6 bg-red-300 h-screen w-">
           <section className="flex flex-col h-4/5 gap-20 justify-around px-5">
                <Link className="bg-blue-400 rounded-md w-28 text-center"to={"/boats"}>Boote</Link>
                <Link className="bg-blue-400 rounded-md w-28 text-center" to={"/"}>Reservierung</Link>
                {/* <Link className=" bg-blue-400 rounded-md w-28" to={"/addBoat"}>Boot Hinzufügen</Link> */}

           </section>
      </aside>
    );
  }
  