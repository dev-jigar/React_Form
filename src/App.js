import logo from "./logo.svg";
import "./App.css";
import Form from "./pages/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Listing from "./pages/users/Listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/table" element={<Listing />} />
        </Routes>
      </BrowserRouter>

      {/* <Listing /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
