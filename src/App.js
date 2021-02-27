import logo from './logo.svg';
import './App.css';

// function App() {
//   var person = {
//     name: "Md. Abdullah",
//     job: "Developer"
//   }
//   var style = {
//     color: "green"
//   }
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
//         <h1 style={style}>Name: {person.name}</h1>
//         <h2 style={{backgroundColor: "red"}}>Job: {person.job}</h2>
//       </header>
//     </div>
//   );
// }

function App(){
  return(
    <div className="App">
      <header className="App-header">
        <h1>React Component Creating</h1>
        <Person></Person>
      </header>
    </div>
  )
}


function Person(){
  let personStyle={
    border: "2px solid green",
    margin: "10px",
    padding: "10px",
    backgroundColor: "cyan",
    color: "gray",
    borderRadius: "10px"
  }
  return (
  <div style={personStyle}> 
    <h1>Name: Md.Abdullah</h1>
    <h3>Web Developer</h3>
  </div>
  )
}
export default App;
