import React, { useState } from "react";
const Productlist = () => {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const [list, setList] = useState([]);
 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (data.title && data.price && data.description) {
      setList([...list, { ...data, id: Date.now() }]);

      setData({
        title: "",
        price: "",
        description: "",
      });
    }
  };

  const handleBuy = (product) => {
    alert(`You have bought: ${product.title} for $${product.price}`);
  };

 

  return (
    <div className="productList">
      <h1>Product List</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={data.title} onChange={handleInput}/>
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="text" name="price" value={data.price} onChange={handleInput}/>
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text" name="description" value={data.description} onChange={handleInput}/>
        <br />
        <input type="submit" value="Submit" />
      </form>

      <h2>Submitted Products</h2>
      <div>
        {list.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2> 
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => handleBuy(product)}>Buy</button>
            
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Productlist;