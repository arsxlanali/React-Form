import logo from './logo.svg';
import AddData from "./Pages/AddData"
import DenseTable from "./Pages/Table"
import './App.css';
import { Add, Extension } from '@mui/icons-material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// localStorage.setItem("array", JSON.stringify([]));

function App() {
  return (
    <MyComponent children={<p>Hello</p>}>
      {/* <p>Hello</p> */}
      {/* <p>GoodBye</p> */}
    </MyComponent>
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<AddData />} />
    //       <Route path="/table" element={<DenseTable />} />
    //     </Routes>
    //   </Router>
    // </div>
  );
}
const MyComponent = ({children})=>{
  // console.log(children.lenght)
  return (<h1>{children.lenght}</h1>)
}
// import React from 'react';
// class App extends React.Component {
//   hug(id, e)
//   {
//     console.log("Hugging", id);
//   }
//   render(){
//     let name = "kittesh";
//     let button = <button onClick={(e)=>this.hug(name, e)}>Button</button>
//     return button;
//   }
// }

export default App;
