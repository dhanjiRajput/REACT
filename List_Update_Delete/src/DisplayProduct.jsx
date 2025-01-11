import { useState } from "react";
import "./DisplayProduct.css"
const DisplayProduct=({title,image,price,description,category,id,ondelete,iscomplete,onupdate})=>{

    const [com,setcom]=useState(iscomplete)
    const complete=()=>{
        setcom(!com);
    };

    const update=()=>{
        onupdate({title,image,price,description,category,id});
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
                <button onClick={()=>ondelete(id)}>Delete</button>   
                <button onClick={update}>Update</button>   
                <button onClick={complete}>{com?"Complete":"Pending"}</button>                                                                                                                                                     
            </div>
        </>
    );
};

export default DisplayProduct;