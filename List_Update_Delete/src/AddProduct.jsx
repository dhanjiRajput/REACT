import { useState } from "react";
import "./AddProduct.css"
import DisplayProduct from "./DisplayProduct";
const AddProduct = () => {
    const [data, setdata] = useState({ image: "", title: "", price: "", description: "", category: "" });
    const [list, setlist] = useState([]);

    const handleinput = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    };

    const onsubmit = (e) => {
        e.preventDefault();
        setlist([...list, { ...data, id: Date.now() }]);

        setdata({ image: "", title: "", price: "", description: "", category: "" });
    };

    const delete_product = (id) => {
        const newlist = list.filter((ele) => ele.id != id);
        const userConfirmed = window.confirm('Are you sure you want to delete this item?');
        if (userConfirmed) {
            setlist(newlist);
            alert('Item deleted successfully.');
        } else {
            alert('Action canceled.');
        }
    };

    return (
        <>
            <div className="form_div">
                <form onSubmit={onsubmit}>
                    <input type="url" placeholder="Enter Product Image Url" name="image" value={data.image} onChange={handleinput}></input><br /><br />
                    <input type="text" placeholder="Enter Product Title" name="title" value={data.title} onChange={handleinput}></input><br /><br />
                    <input type="number" placeholder="Enter Product Price" name="price" value={data.price} onChange={handleinput}></input><br /><br />
                    <input type="category" placeholder="Enter Product Category" name="category" value={data.category} onChange={handleinput}></input><br /><br />
                    <textarea placeholder="Enter Product Description" name="description" value={data.description} onChange={handleinput} rows={4} cols={39}></textarea><br /><br />
                    <input type="submit"></input>
                </form>
            </div>

            <div className="display">
                {list.map((ele) => (
                    <DisplayProduct {...ele} key={ele.id} ondelete={delete_product} />
                ))}
            </div>
        </>
    );
};

export default AddProduct;