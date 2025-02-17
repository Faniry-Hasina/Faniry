// import React from "react";
import "./App.css";
import "./../src/Components/navbar/navbar.scss";
// import "./dashboard.scss";
import Products from "../src/Components/navbar/Products/Produit";
import PieArcLabel from "./Components/navbar/graphique/Graph1/topvente";
import TopVente from "./Components/navbar/graphique/Graph2/TickParamsSelector";
import GridDemo from "./Components/navbar/graphique/Graph3/GridDemo";
import SideBar from "./Components/navbar/SideBar";
import React, { useEffect, useState } from "react";
import { ProductList } from "./Components/navbar/Productlist";
import { useTranslation } from "react-i18next";
import { formatPrice } from "./Helpers";

const Dashboard: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<ProductList[]>([]);
  // let [totals,setTotals]=useState<ProductList[]>
  // let Totals = 0 as number
  const getProduct = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // data.forEach((dt:ProductList)=>{
        //   console.log(dt.price)
        //   Totals += dt.price
        //   console.log(Totals)
        // })
        setProducts(data);
      });
  };
  useEffect(() => {
    console.log(i18n.language);
    getProduct();
  }, []);
  // const [products] = useState<Product[]>([]);
  const calculateTotal = products.reduce(
    (acc, prod) => acc + prod.price * prod.rating.count,
    0
  );
  console.log(calculateTotal);
  console.log(products);
  return (
    <>
      <div className="Dashboard">
        <SideBar />
        <div className="Wrapper-title">
          <h2>{t("welcome")}</h2>
          <p>CA:{formatPrice(calculateTotal.toFixed(0))}</p>
          {/* {products.map((prod) => (
          <p>CA{prod.price}
            ${calculateTotal(products)}
          </p>
        ))} */}
        </div>
        <div className="container-Graphe">
          <TopVente />
          <PieArcLabel />
          <GridDemo />
        </div>
        <div className="list">
          <h2>{t("liste")}</h2>
          <div className="Liste-Vente">
            <Products limit={6} hideTitle={true} img={true} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
