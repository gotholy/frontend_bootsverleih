import FetchProvider from "./context/FetchProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Boats from "./pages/Boats";
import BoatDetail from "./pages/BoatDetail.jsx";
import AddBoatPage from "./pages/AddBoatPage.jsx";
import Header from "./components/header/header.jsx";

function App() {
  console.log("Rendering App component");

  return (
<FetchProvider>

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boats" element={<Boats />} />
          <Route path="/boats/:id" element={<BoatDetail />} />
          <Route path="/addBoat" element={<AddBoatPage />} />
        </Routes>
      </BrowserRouter>

</FetchProvider>
  );
}

export default App;
