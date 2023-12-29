import { myContext } from '../context/FetchProvider';
import Header from '../components/header/header';
export default function AddBoatPage() {

  const { addBoat } = myContext();


    return (
      <main className='flex flex-row'>
     <Header />

      <section className='bg-slate-200 w-screen pl-20 py-10 h-screen '>
        <h2>Füge ein Boot hinzu</h2>
        <form onSubmit={addBoat} className="flex flex-col gap-5 py-5">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered max-w-xs"
            name="boatname"
            />
          <input
            type="number"
            placeholder="Baujahr"
            className="input input-bordered  max-w-xs"
            name="year"
            />
          {/* <input
            type="number"
            placeholder="Seriennumer"
            className="input input-bordered w-full max-w-xs"
            name="seriennummer"
          /> */}
          <select
            className="select select-bordered max-w-xs"
            defaultValue=""
            name="material"
            >
            <option disabled value="">
              Welches Material ?
            </option>
            <option value="holz">Holz</option>
            <option value="gfk">GFK</option>
            <option value="metall">Metall</option>
            <option value="pappe">Pappe</option>
            <option value="eelen">Seelen</option>
          </select>
          <select
            className="select select-bordered max-w-xs"
            defaultValue=""
            name="boattype"
            >
            <option disabled value="">
              Bootsart?
            </option>
            <option value="tretboot">Tretboot</option>
            <option value="segelboot">Segelboot</option>
            <option value="luftkissenboot">Luftkissenboot</option>
            <option value="geisterschiff">Geisterschiff</option>
            <option value="containerschiff">Containerschiff</option>
          </select>
          <input
            className="btn btn-secondary bg-blue-300 rounded-sm max-w-xs"
            type="submit"
            value="Boot Anlegen"
            />
        </form>
      </section>
            </main>
    );
  }
  