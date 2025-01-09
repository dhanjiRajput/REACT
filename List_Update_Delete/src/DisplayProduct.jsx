import "./DisplayProduct.css"
const DisplayProduct=({title,image,price,description,category,id,ondelete})=>{

    // const handle=(action)=>{
    //     if(action=="add"){
    //         alert("Product Added Successfully!");
    //     }else if(action=="upd"){
    //         alert("Product Updated Successfully!");
    //     }else{
    //         alert("Product Deleted Successfully!");
    //     }
    // };
    return(
        <>                                                                                                                      
            <div className="box">
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
                <p>{description}</p>
                <button>Add to Cart</button>
                <button>Update</button>
                <button onClick={()=>ondelete(id)}>Delete</button>
            </div>        
        </>
    );
};

export default DisplayProduct;