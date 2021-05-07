
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 
  
  
  const nayoks =['Manna', 'Rubel', 'Maruf', 'Shuvo']
  const products =[
    {name: 'Photoshop',price:'$78'},
    {name: 'Illistator',price:'$64'},
    {name: 'PDF Reader',price:'$8'},
    {name: 'WordPress',price:'$208'}
  ]


  // const nayokNames = nayoks.map(nayok=>nayok)
  // console.log(nayokNames)

  // const productNames = products.map(product=>product)
  // console.log(productNames)
  
  return (
    <div className="App">

      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
      <ul>
        {
          nayoks.map(nayok =><li>{nayok}</li>)
        }
        {
          products.map(product=><li>{product.name}</li>)
        }
      </ul>
        {
          products.map(product=><Product product={product}></Product>)
        }


        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

      <Person name ="Munna" job="Cricketer"></Person>
      <Person name="Masum" job="Student"></Person>
     
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle ={
    border:'1px solid red',
    borderRadius:'3px',
    backgroundColor:'lightblue',
    height:'400px',
    width:'400px',
    float:'left'
  }
  const {name, price}  = props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h2>Name:{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount]= useState(10);
  const handleIncrease =() => { setCount(count+1)
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() =>setCount(count-1)}>Decrease</button>
      <button onClick={() =>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Person(props){
  return(
    <div style={{border:'1px solid gray', margin:'10px', padding:'10px'}}>
      <h3>My Name:{props.name}</h3>
      <h3>My Profession:{props.job}</h3>
    </div>
  )
}

export default App;
