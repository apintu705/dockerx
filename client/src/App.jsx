
import './App.css';
import { Home } from './pages/Home';
import {Homec} from "./components/Homec"
import {Notfound} from './components/Notfound'
import {Artist} from "./components/Artist"
import {Signup} from "./components/Signup"
import {Addingsong} from "./components/Addingsong"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Signin } from './components/Signin';
import { User } from './components/User';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getallartist } from './redux/action/artistaction';
import { allsongsaction } from './redux/action/songsaction';


function App() {
  const dispatch=useDispatch()
  const [render,setrender]=useState(false)
  const isrender=() => {
    setrender(!render)
  }
console.log(render)
  useEffect(()=>{
    dispatch(getallartist())
    dispatch(allsongsaction())
  },[dispatch,render]);

  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/" element={<Homec isrender={isrender}/>}/>
        <Route path="/artist" element={<Artist/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/addsong" element={<Addingsong/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
