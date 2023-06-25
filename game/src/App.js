import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import { Component } from 'react';
import { Navigate } from './components/navigation/navigation';


// function App(props) {
//   const [apiResponse, setapiResponse] = useState("");
//   return (
//     <div className="App">
//         <header className="App-header">
//           <img src="{logo}" className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React plus Node</h1>

//         </header>
//         <p className="App-intro">{this.state.apiResponse}</p>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
  super(props);
  this.state = { apiResponse: "" };
}
  

  callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res}))
    .catch(err => err);

  }
  componentDidMount(){
    this.callAPI();
  }


  render() {
    return (
      <div className="App">
        <Navigate />
          <header className="App-header">
            <img src="{logo}" className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React plus Node</h1>
            {/* <h1>Adding more elements</h1> */}
            

          </header>
          <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}


// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//         <header className="App-header">
//           <img src="{logo}" className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React plus Node</h1>

//         </header>
//         <p className="App-intro">{this.state.apiResponse}</p>
//     </div>
//   );
// }




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
