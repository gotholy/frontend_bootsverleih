import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext()

export const myContext = () => useContext(AppContext)


export default function FetchProvider({children}){

    const [boats, setBoats] =useState([])
    const [refresh, setRefresh] =useState([false])


    useEffect(() => {
        async function getBoats() {
          try {
            const response = await fetch(import.meta.env.VITE_BACKEND + "/api/boats");
            const data = await response.json();
            console.log("Fetched boats:", data);
            setBoats(data);
          } catch (error) {
            console.error("Error fetching boats:", error);
          }
        }
        getBoats();
      }, [refresh]);



      async function addBoat(e) {
        try {
          e.preventDefault();
          const form = e.target;
          const formData = {
            boatname: form.boatname.value,
            year: form.year.value,
            material: form.material.value,
            boattype: form.boattype.value,
          };
    
          await fetch(import.meta.env.VITE_BACKEND + "/api/boats", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          setRefresh((prev) => !prev);
         
        } catch (error) {
          console.error("Error in addBoat:", error);
        }
      }
      
      

return(
    <AppContext.Provider value={{boats, setBoats, refresh, setRefresh, addBoat}}>
       {children}
    </AppContext.Provider>
)
}