import "./Products.css"
const Products = ({ image, title, price, category, description, rating }) => {

    const handle = () => {
        alert("Item added to Cart!");
    };
    return (
        <>
            <div>
                <div className="probox">
                    <div style={{ display: "flex", justifyContent: "center" }}><img src={image} alt={title} /></div>
                    <h3 style={{ height: "60px" }}>{title}</h3>
                    <h3>Price: Rs.{price}</h3>
                    <h4>Ratings: {rating}</h4>
                    <h5>Category: {category}</h5>
                    <p style={{height:"200px"}}>{description}</p>
                    <button onClick={handle}>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Products;