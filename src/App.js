import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav.js";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import Login from "./Pages/Login/Login";
import Password from "./Pages/Password/password";
import Dashboard from "./Pages/UserDashBoard/dashboard";
import CreateEventType from "./Pages/UserDashBoard/createEventType";
import AddOneonOneEvent from "./Pages/UserDashBoard/AddOneonOneEvent";
import AddGroupEvent from "./Pages/UserDashBoard/AddGroupEvent";
import AddNewWorkflow from "./Pages/UserDashBoard/AddNewWorkflow";
import EditEventType from "./Pages/UserDashBoard/EditEventType";
function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/app/login/password" element={<Password/>}></Route>
        <Route path="/user" element={<Dashboard/>}></Route>
        <Route path="/user/create_event_type" element={<CreateEventType/>}></Route>
        <Route path="/user/create_event_type/one-to-one" element={<AddOneonOneEvent/>}></Route>
        <Route path="/user/create_event_type/group_event" element={<AddGroupEvent/>}></Route>
        <Route path="/user/add_workflow" element={<AddNewWorkflow/>}></Route>
        <Route path="/user/edit_event" element={<EditEventType/>}></Route>
      </Routes>
    
    </>
  );
}

export default App;
