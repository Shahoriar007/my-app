import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

const names = ['Iron man', 'Bat Man', 'Speider Man', 'Captain A']  //Array 
const produts = [                //Object
  {name: 'Photoshop', price: '$100'},
  {name: 'Illustrator', price: '$120'},
  {name: 'PDF Reader', price: '$50'}
]

  return (
    <div className="App">
      <header className="App-header">

        <p>My first react paragraph</p>

        <Counter></Counter>

        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
        </ul>

        {
          produts.map(pd => <Product product={pd}></Product> )
        }

        
        <Person name="Shahoriar" type="Man"></Person>
        <Person name={names[0]}></Person> {/*// Access by the value of an array  */}
        <Person></Person>

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h3>Count: {count} </h3>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadious: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '350px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  const personStyle={                  //style system 2
    border: '2px solid red',
    margin: '10px'
  }
  return (

    //<div style={{border: '2px solid blue', margin: '10px'}}>  //style system 1

    <div style={personStyle}>
      <h1>Name : {props.name}</h1>
  <h3>The Invensible {props.type}</h3>
    </div>
  )
}



export default App;
