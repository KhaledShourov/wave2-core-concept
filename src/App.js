import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name: "Khaled",
    job: "Student"
  }
  var perspn2 ={
    name: "Sarkar",
    job: "Home maker"
  }
  var style = {
    color:'green',
    border:'1px solid gray'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquid!</p>

        <h1 className="" style={style}>Heading: {person.name +" " + person.job}</h1>
        <h2 style ={{color:'gray', border:'1px solid red'}}>Header: {perspn2.name + " " + perspn2.job}</h2>
        
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  return (
    <div style={{border:'1px solid gray', margin:'10px', padding:'10px'}}>
      <h1>Name: Sakib Khan</h1>
      <h2>Hero of the Year</h2>
    </div>
  )
}

export default App;
