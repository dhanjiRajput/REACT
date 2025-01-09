import { useState } from "react";
import "./DisplayProduct.css"
const DisplayProduct=({title,image,price,description,category,id,ondelete,iscomplete})=>{

    const [com,setcom]=useState(iscomplete)
    const complete=()=>{
        setcom(!com);
    };

    return(
        <>                                                                                                                      
            <div className="box" style={com?{textDecoration:"line-through"}:{}}>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
                <p>{description}</p>
                <button>Add to Cart</button>
                <button>Update</button>
                <button onClick={()=>ondelete(id)}>Delete</button>   
                <button onClick={complete}>{com?"Complete":"Pending"}</button>                                                                                                                                                     
            </div>        
        </>
    );
};

export default DisplayProduct;