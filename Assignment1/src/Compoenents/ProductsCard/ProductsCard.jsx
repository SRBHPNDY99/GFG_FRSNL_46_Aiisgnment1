import './ProductsCard.css';

const ProductCard = ({ productName='Product', price='0.00', description='Empty Description', imageUrl='https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=996' }) => {

    return (
        <>
            <div className="product-card">
                <img src={imageUrl} alt={productName} className="img" />
                <h3 className="title">{productName}</h3>
                <p className="price">Rs. {price}</p>
                <p className="description">{description}</p>
            </div>
        </>
    )
}

export default ProductCard;