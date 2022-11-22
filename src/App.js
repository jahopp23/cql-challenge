import './App.css';
import React from "react";
import { useState } from "react";


function App() {


  const products = [
    {
      id: 1,
      name: "Product 1"
    },
    {
      id: 2,
      name: "Product 2"
    },
    {
      id: 3,
      name: "Product 3"
    }
  ];

  const [selectedProductIDs, setSelectedProductIDs] = useState([]);
     
  const addIDToSelection = (id) => {
      if (!selectedProductIDs.includes(id)) {
         setSelectedProductIDs((selProds) => [...selProds, id]);
         console.log(selectedProductIDs.length + 1);        
     
      }
  };

  // remove button function
  const removeIDFromSelection = (id) => {
    if (selectedProductIDs.includes(id)) {
      setSelectedProductIDs(products.filter(product => product.id !== id));
      console.log(selectedProductIDs.length - 1);
      
    }
  }

  //title number
  const productNumber = selectedProductIDs.length; 

  // map product cards
  const productItems = products.map((product) =>

    <div className="col d-flex">
     <div className="card p-4">
      <li key={product.id}>{product.name}</li>
      <div className="row p-2">
          <button className="btn btn-primary" onClick={() => { addIDToSelection(product.id)}}>Select</button>
      </div>
      {/* <div className="row p-2">      
      <button className="btn btn-danger" onClick={() => { removeIDFromSelection(product.id)}}>Remove</button>
      </div> */}
   
      </div>
    </div>

    
  );

  return (
    <div className="App">

    <div className="container product-container d-flex">
    
     <div className="row d-flex p-4">
        
    <h1>{productNumber} Product(s)</h1>
        {productItems}
   
     </div> 

    </div>

    <div className="container">
    <div className="row d-flex p-4">
   
    <p>Selected Product IDs: {selectedProductIDs.join(", ")}</p> 

    </div>    
    </div>
  </div>
  );
}

export default App;
