import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['razzak', 'josim', 'alomgir', 'bappaRaj', 'bappi', 'suvo'];
  const noyokName = nayoks.map(nayok => nayok);
  console.log(noyokName);

const products =[
  {name:'photoshop', price:'$2.99'},
  {name:'adobe ilustrator', price:'$4.90'},
  {name:'pdf reader', price:'$1.99'}
]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <h1>I am a react Person</h1>
        <ul>{

          nayoks.map(nayok => <li>{nayok}</li>)

          }
         

        </ul>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter></Counter>
        <Product product={products[0]}></Product>
        <Users></Users>



      </header>
    </div>
  );
}
function Users(){
  const [users, setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>setUser(data))
  },[])
    
  
  return(
    <div>
      <h3>dynamic todo{users.length}</h3>
  <ul>{
    users.map(us => <li>{us.title}</li>) 
    }
    </ul>
    </div>
  )
  }

function Product(props){
  const productStyle ={
    backgroundColor: 'lightGray',
    height: '200px',
    width: '200px',
    borderRadius: '2px solid green'

  }
  const {name, price} = props.product;
  console.log(name, price);
  return( <div style ={productStyle}>
  <h3>{name}</h3>
  <h1>{price}</h1>
  <button>buy now</button>
    
</div>
  )
}
function Counter(){
  const[count, setCount] = useState(10)
  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={ ()=>setCount(count + 1)}>increase</button>
    </div>
  )
}

export default App;
