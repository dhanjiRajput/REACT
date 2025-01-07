import "./Products.css"
const Products=({title,image,description,price,ratings,category})=>{
    return(
        <>
        <div className="product">
            <div style={{display:"flex",justifyContent:"center"}}><img src={image} alt={title} /></div>
            <h3 style={{height:"60px"}}>{title}</h3>
            <h3>Price: Rs.{price}</h3>
            <h4>Ratings: {ratings}</h4>
            <h5>Category: {category}</h5>
            <p>{description}</p>
        </div>
        </>
    );
};

export default Products;