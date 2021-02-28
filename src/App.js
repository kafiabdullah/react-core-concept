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
  const product= [
    {name: 'Photoshop' ,price: '$99.99'},
    {name: 'PDF Reader' ,price: '$10.99'},
    {name: 'Illastator' ,price: '$40.99'}
  ]
  return(
    <div className="App">
      <header className="App-header">
    <h1>Shopping Cart</h1>
      <Products name={product[0]}></Products>
      <Products name={product[1]}></Products>
      <Products name={product[2]}></Products>
        <h1>React Component Creating</h1>
        <Person name="kafi Abdullah" job="web Developer"></Person>
        <Person name="Tareq Mahmud" job="web Developer"></Person>
       
      </header>
    </div>
  )
}

// add product card
function Products(props) {
  const productStyle={
    backgroundColor: '#d3d3d3',
    border: '1px solid green',
    borderRadius: '10px',
    height: '200px',
    width: '200px',
    margin: '10px',
    padding: '10px',
    color: 'black',
    float: 'left'
  }
  const {name, price} = props.name;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  
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
    <h1>Name: {props.name}</h1>
    <h3>Profession: {props.job} </h3>
  </div>
  )
}
export default App;
