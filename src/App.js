import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

const names = ['Iron man']  //Array 
const produts = [                //Object
  {name: 'Photoshop', price: '$100'},
  {name: 'Illustrator', price: '$120'},
  {name: 'PDF Reader', price: '$50'}
]

  return (
    <div className="App">
      <header className="App-header">

        <p>My first react paragraph</p>
        {/* <Product name={produts[0].name} price={produts[0].price}></Product> //Pass one by one object element */}
        <Product product={produts[0]}></Product>
        <Product product={produts[1]}></Product>
        <Person name="Shahoriar" type="Man"></Person>
        <Person name={names[0]}></Person> {/*// Access by the value of an array  */}
        <Person></Person>

      </header>
    </div>
  );
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
