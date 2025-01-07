import { useState } from "react";
import "./AddProduct.css"
import Timer from "./Timer";
const AddProduct = () => {

    const [data, setdata] = useState({ image: "", title: "", price: "", description: "", category: "" });
    const [list, setlist] = useState([]);

    const handleinput = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setlist([...list, { ...data, id: Date.now() }]);
        setdata({ image: "", title: "", price: "", description: "", category: "" });
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Add Products</h1>
            <div className="form">
                <form onSubmit={onSubmit}>

                    <input type="url" id="image" name="image" value={data.image} onChange={handleinput} placeholder="Enter Product Image" />
                    <br />
                    <br />

                    <input type="text" id="title" name="title" value={data.title} onChange={handleinput} placeholder="Enter Product Title" />
                    <br />
                    <br />

                    <input type="text" id="price" name="price" value={data.price} onChange={handleinput} placeholder="Enter Product Price" />
                    <br />
                    <br />

                    <textarea id="description" name="description" rows="4" cols="39" value={data.description} onChange={handleinput} placeholder="Enter Description" />
                    <br />
                    <br />
                    <select id="category" name="category" value={data.category} onChange={handleinput}>
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="books">Books</option>
                    </select>
                    <br />
                    <br />
                    <input type="submit"></input>
                </form>
            </div>

            <h1 style={{ textAlign: "center",color:"red" }}>Sale Going to Close <Timer/></h1>
            <div id="main">
                <div id="box">
                    {list.map((ele) => (
                        <div key={ele.id}>
                            <img src={ele.image}></img>
                            <h2>{ele.title}</h2>
                            <p>Price: ${ele.price}</p>
                            <p>Category: {ele.category}</p>
                            <p>Description: {ele.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AddProduct;