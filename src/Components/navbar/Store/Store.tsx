import "./Store.scss";
import "./../../../App.css";
import SideBar from "../SideBar";
import "../navbar.scss";
import { useEffect, useState } from "react";
import { truncateText, formatPrice } from "../../../Helpers";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

type StockType = {
  id: number;
  title: string;
  price: string;
  stock: number;
  image: string;
  maxNameLength: number;
};
function Store() {
  const [products, setProducts] = useState<StockType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getProduct = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setLoading(false);
        return data;
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<StockType | null>(null);
  const [createMode, setCreateMode] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    title: "",
    price: "",
    stock: 0,
    image: "",
    maxNameLength: 10,
  });
  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };
  const handleBuyProduct = (product: StockType) => {
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
      price: "",
      stock: 0,
      image: "",
      maxNameLength: 20,
    });
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="Dashboard">
      <SideBar />
      <div className="Container-Store">
        <h1 className="title-client">{t("store")}</h1>
        <section>
          <ul className="list-Product">
            {products.map((product) => (
              <div className="products" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
                <h6>{truncateText(product.title, newProduct.maxNameLength)}</h6>
                <p className="price">
                  {formatPrice(parseFloat(product.price))}
                </p>
                <p className="stock">In stock:{product.stock}</p>
                <button
                  className={`buy-button ${
                    product.stock === 0 ? "out-of-stock" : ""
                  }`}
                  disabled={product.stock === 0}
                  type="button"
                  onClick={() => handleBuyProduct(product)}
                >
                  {product.stock === 0 ? "Out of Stock" : "Buy Now"}
                </button>
                <button
                  className="manage-content-button"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Manage Content
                </button>
              </div>
            ))}
          </ul>
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
                  type="text"
                  placeholder="Prix"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
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
          </div>
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
        </section>
      </div>
    </div>
  );
}

export default Store;
