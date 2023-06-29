import logo from "./logo.svg";
import "./App.css";
import Form from "./pages/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Listing from "./pages/users/Listing";
function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Listing />
      <ToastContainer />
    </div>
  );
}

export default App;
