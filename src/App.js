import './App.css';
import Header from "./Components/Header.js";
import Body from "./Pages/homepage/Body.js";
import Footer from "./Pages/homepage/Footer.js";
import CreateAccount from './Pages/Create Account/CreateAccount';
import MentorMentee from './Pages/Mentor Mentee/MentorMentee';
import {BrowserRouter, Routes, useRoutes} from 'react-router-dom'


function App() {
  let routes = useRoutes([{
    path: "/", 
    element: <Body/>,
  }])
  return (

    <BrowserRouter>
      {routes}
    </BrowserRouter>
      
   
  );
}

export default App;


//Remember to keep the component names capitalized inside the files, but the file names themselves can remain lowercase.