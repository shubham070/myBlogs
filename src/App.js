import './App.css';
import Home from './Home';
import Navbar from './Navbar/Navbar';
import Create from './Create';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [user, setUser]  =useState([]);

  const hangleLogout = ()=>{
    setIsUserLogin(false);
    setUser([]);

  }

  function handleCallBackResponse(response){
    console.log(response);
    var userObj = jwtDecode(response.credential);
    if(user!==null)
    {
    setIsUserLogin(true);
    }
    setUser(userObj);
  }

  useEffect(()=>{
    /*global google */
    google.accounts.id.initialize({
      client_id: "1061151006003-948gq9nh3pfcaersmo680c4g6pu9mn4g.apps.googleusercontent.com",
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size:"large"}
    );
  },[isUserLogin]);

  return (
    <div>
  { !isUserLogin ? <div className='login' id="signInDiv"></div> :

  <BrowserRouter>
    <div className='App'>
    <div  className='logout'>
      <h2>{user.name}</h2>
    <button className='create button' onClick={()=>hangleLogout()} id="signOut">SignOut</button>
    </div>
    <Navbar></Navbar>
    <div className="content">   
    <Routes>
      <Route exact path='/' element={<Home/>}/>      
      <Route path='/create' element={<Create/>}/>
      <Route path='/blog/:id' element={<BlogDetails/>}/>  
      <Route path='*' element={<NotFound/>}/>      
    </Routes> 
    </div>
    </div>
    </BrowserRouter>}
 </div> );
}


export default App;
