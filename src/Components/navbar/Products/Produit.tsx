import { useEffect, useState } from "react";
import Svgicon from "../Svg/LoveIcon";
import "./produit.scss";
import { Link } from "react-router-dom";
import { truncateText ,formatPrice} from "../../../Helpers";
// import formatPrice from "../../../Helpers/index"
type Product = {
  id: number;
  description?: string;
  title: string;
  price: number;
  image: string;
  rating: { count: number };
};
type ProductsProps = {
  filterFunction?: (product: Product) => boolean;
  limit?: number;
  hideTitle?: boolean;
  custom?: string;
  img?: boolean;
  maxNameLength?: number;
};

const Products: React.FC<ProductsProps> = ({
  filterFunction,
  limit,
  hideTitle,
  img,
  maxNameLength = 20,
}) => {
  let test = [];

  const [products, setProducts] = useState<Product[]>([]);
  const getProduct = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        test = data;
        console.log(test);
        return products;
      });
  };
  useEffect(() => {
    getProduct();
    console.log(4);
    console.log(products);
  }, []);

  const filteredProducts = filterFunction
    ? products.filter(filterFunction)
    : products;
  const limitedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <div>
      {!hideTitle && <h2>Products</h2>}
      <ul className="list-Product">
     
        {limitedProducts.map((product) => (
          <li className="product" key={product.id}>
            {img && product.image && (
              <span>
                <img
                  className="produit-img"
                  src={product.image}
                  alt={product.title}
                />
              </span>
            )}
            <div className="love-icon">
              <img className="img-svg" src="./src/img/png/svg.png" alt="" />
              <Svgicon />
            </div>
            <p className="nombre-produit">stock:{product.rating.count}</p>
            <div className="titre-price">
              <p className="titre-produit">
                {truncateText(product.title, maxNameLength)}
              </p>
              <p className="price">{formatPrice(product.price*product.rating.count)}</p>
              <p className="details">
                <Link to="/Products" className="details">
                  details
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Products;
