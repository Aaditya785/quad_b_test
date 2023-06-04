import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Details from "./pages/Details";

function App() {

  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
