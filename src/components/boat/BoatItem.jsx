
import { myContext } from "../../context/FetchProvider";
import { Link } from "react-router-dom";

export default function BoatItem({ boat, inDetailPage }) {

 
    return (
      <article className=" bg-slate-500">

        <div className="flex flex-col text-left mx-4 py-2">
        <h3>{boat.boatname}</h3>
        <p>Boat Type: {boat.boattype}</p>
        <p>Material: {boat.material}</p>
        <p>Year: {boat.year}</p>
        
        {inDetailPage ? (
          <div className="flex flex-row gap-1justify-center py-5">
            {/* Render delete and edit buttons in the DetailPage */}
            <button className="btn btn-info">Editieren</button>
            <button className="btn btn-alert bg-red-600">
              Löschen
            </button>
          </div>
        ) : (
          <Link to={`/boats/${boat._id}`} className="bg-blue-400 rounded-md py-1 px-1 my-2">
            Details
          </Link>
        )}
        </div>
  
      </article>
    );
  }