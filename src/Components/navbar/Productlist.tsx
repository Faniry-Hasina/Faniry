import { useEffect, useState } from "react";
import "./../../App.css";
import "../navbar/ProductList.scss";
import SideBar from "./SideBar";
import { Rating } from "@mui/material";
import { useTranslation} from "react-i18next";
import { truncateText,formatPrice } from "../../Helpers";
export type ProductList = {
  id: number;
  description?: string;
  title: string;
  price: number;
  image: string;
  stock:number;
  rating: { count: number };
  maxNameLength?: number;
};
type ProductsProps = {
  filterFunction?: (product: ProductList) => boolean;
  limit?: number;
  hideTitle?: boolean;
  img?: boolean;
  maxNameLength?: number;
};
const Products: React.FC<ProductsProps> = ({
  filterFunction,
  limit,
  hideTitle,
  maxNameLength = 30,
}) => {
  // const [products, setProducts] = useState<ProductList[]>([]);
  const getProduct = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setProducts(data);
      });
  };
  useEffect(() => {
    getProduct();
    console.log(4);
  }, []);
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? ` ${text.slice(0, maxLength)}...` : text;
  };
  const [products, setProducts] = useState<ProductList[]>([]);
  const {t,i18n} = useTranslation();
  const filteredProducts = filterFunction
    ? products.filter(filterFunction)
    : products;
  const limitedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;
    const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductList | null>(null);
  const [createMode, setCreateMode] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    title: "",
    description:"",
    price: 0,
    stock: 0,
    image: "",
    rating:{count:0},
    maxNameLength: 10,
  });
  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };
  const handleBuyProduct = (product:ProductList) => {
    setCurrentProduct(product);
    setConfirmationVisible(true);
  };

  const confirmPurchase = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === currentProduct?.id
          ? { ...product, stock: product.stock - 1 }
          : product
      )
    );
    setConfirmationVisible(false);
    alert("Achat confirmé !");
  };
  const cancelPurchase = () => {
    setConfirmationVisible(false);
  };
 const handleCreateProduct = () => {
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    const productToAdd = { ...newProduct, id: newId };
    setProducts([...products, productToAdd]);
    setCreateMode(false);
    setNewProduct({
      id: 0,
      title: "",
      description:"",
      price: 0,
      stock: 0,
      image: "",
      rating:{count:0},
      maxNameLength: 20,
    });
  };
  return (
    <div className="Dashboard">
      <SideBar />
      <div className="Container-Product">
        <div className="Wraper-title">
        {!hideTitle && <h2>{t("produit")}</h2>}
        <div className="create-product-section">
            {createMode ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreateProduct();
                }}
                className="create-product-form" 
              >
                <input
                  type="text"
                  placeholder="Nom du produit"
                  value={newProduct.title}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, title: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Prix"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
                  }
                />
                <input
                  type="number"
                  placeholder="Stock"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: +e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="URL de l'image"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                />
                <div className="Wrapper-btn">
                  <button className="create-btn" type="submit">
                    Créer
                  </button>
                  <button
                    className="skip-btn"
                    type="button"
                    onClick={() => setCreateMode(false)}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={() => setCreateMode(true)}
                className="create-button"
              >
                Create
              </button>
            )}
            {confirmationVisible && currentProduct && (
            <div className="container-Alert">
              <div className="confirmation">
                <p>Êtes-vous sûr de vouloir acheter {currentProduct.title} ?</p>
                <div className="Wrap-btn">
                  <button onClick={confirmPurchase} className="oui-btn">
                    Oui
                  </button>
                  <button onClick={cancelPurchase} className="non-btn">
                    Non
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
        

        <ul className="Ul-Product">
          <li className="title-list">
            <div className="card">
              <p>{t("image")}</p>
            </div>
            <div className="card">
              <p>{t("description")}</p>
            </div>
            <div className="card">
              <p> {t("prix")}</p>
            </div>
            <div className="card">
              <p>{t("Store")}</p>
            </div>
          </li>
          <ul className="list-Prod">
            {limitedProducts.map((product) => (
                <li className="product-list" key={product.id}>
                  <div className="card">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-product"
                    />
                  </div>
                  <div className="card">
                    <p className="titre-produit">
                      {truncateText(product.title, maxNameLength)}jeux vous
                      invite de regarder
                    </p>
                  </div>
                  <div className="card">
                    <p className="price">{formatPrice(product.price)}</p>
                  </div>
                  <div className="card">
                    {product.rating.count <= 100 ? (
                      <button className="custom-btn">CreateStock</button>
                    ) : (
                      <p>{product.rating.count}</p>
                    )}
                  </div>
                  {/* <button className="btn-Product">Stock</button> */}
                </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default Products;
