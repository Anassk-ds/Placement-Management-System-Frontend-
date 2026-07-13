import './App.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Student from './components/StudentTable/Student';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Register from './components/Registration/Registration';
import Login from './components/pages/Login/Login';
import {Routes,Route} from "react-router-dom";
import Layout from './components/Layouts/Layout';
import Students from './components/pages/Student/Student';
// App.jsx The root component
// Initially everything is displayed from jsx
// Creating a root component
// function App(){
//   return(
//     // Fragment
//     <>
//       <h1>Welcome To Chalapathi</h1>
//       <p>Learn Today Lead Tomorrow</p>
//     </>
//   )

// }

// Root component
function App(){
  let students = 250;
  function addStudent(){
    students++
    console.log(students);
  };
  return(
    <>
    <Routes>
      
      <Route path="/login" element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path="/student" element={<Students/>}/>

      <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
      

 
  

    
    <div className='main'>
    
  

      
    </div>
    
   
    </>
  );
};
export default App;
