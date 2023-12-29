import { myContext } from "../context/FetchProvider.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  BoatItem from "../components/boat/BoatItem.jsx"
import Header from "../components/header/header.jsx";

export default function BoatDetail() {
  const { boats } = myContext();
  const { id } = useParams();
  const [selectedBoat, setSelectedBoat] = useState(null);

  useEffect(() => {
    const boat = boats.find((boat) => boat._id === id);
    setSelectedBoat(boat);
  }, [boats, id]);

  return (
    <main className="flex flex-row bg-red-200">

    <Header />
    
    <section className="bg-red-200 pl-20 my-20">

      <h3>EIN BOOT</h3>
      <div className="grid grid-cols-3 gap-1">
        {selectedBoat && <BoatItem boat={selectedBoat} inDetailPage />}
      </div>
    </section>
    </main>
  );
}
