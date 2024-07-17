import './App.css';
import Home from "./Pages/homepage/Home.js";
import CreateAccount from './Pages/Create Account/CreateAccount';
import MentorMentee from './Pages/Mentor Mentee/MentorMentee';
import { Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <Routes>
     <Route exact path= "/" element= {<Home/>}></Route>
     <Route path='/createAccount' element= {<CreateAccount />}></Route>
     <Route path='/MentorMentee' element= {<MentorMentee />}></Route>
     <Route path='*' element= {<Home />}></Route>
     
     </Routes>
    
      
   
  );
}

export default App;


//Remember to keep the component names capitalized inside the files, but the file names themselves can remain lowercase.