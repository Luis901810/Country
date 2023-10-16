import { Routes, Route} from "react-router-dom";

import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import './App.css';




function App() {
  return (
    <div className="App">
        <Routes>

            <Route path="/" element= {<Landing/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/home/detail/:id" element={<Detail/>}></Route>
            <Route path="/home/Formulary" element={<Form/>}></Route>
    
        </Routes>
     
    </div>
  );
}

export default App;
