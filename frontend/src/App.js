import Alluser from "./Components/Alluser";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import UpdateForm from "./Components/UpdateForm";

function App() {
  return (
   <>
  <BrowserRouter>
    <Navbar/>
    <ToastContainer position="top-center" /> 
    
    <Switch>
      <Route exact path="/"><Alluser/></Route>
      <Route path="/form">    <Form/></Route>
      <Route path="/updateuser/:id"> <Form/></Route>
    </Switch>


</BrowserRouter>
   </>
  );
}

export default App;
