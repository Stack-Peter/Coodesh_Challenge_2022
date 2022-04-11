import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./Components/Nav/";
import Table from "./Components/Table/";
import Context from "./Context";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Nav />
        <Routes>
          <Route path="" element={<Table />} />
          <Route path="/:page/:id" element={<Table />} />
        </Routes>
      </Context>
      </BrowserRouter>
  );
}

export default App;
