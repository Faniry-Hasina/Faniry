import "./client.scss";
import femme from "../../../img/jpeg/femme.jpg";
import Lina from "../../../img/jpeg/2.jpg";
import Faniry from "../../../img/jpeg/john.jpg";
import "./../../../App.css";
import SideBar from "../SideBar";
import "../ProductList.scss";
import "../Products/produit.scss"
import { useTranslation } from "react-i18next";
type Client = {
  id: number;
  name: string;
  contact: string;
  img: string;
  email:string;
};
const Clients: React.FC = () => {
  const clients: Client[] = [
    { id: 1, name: "Faniry Hasina", contact: "032 89 813 19", img: femme ,email:"faniry@gmail.com"},
    { id: 2, name: "Marie Linah", contact: "033 21 304 62", img: Lina ,email:"Linah@gmail.com"},
    { id: 3, name: "Amazia rajao", contact: "032 21 888 67", img: Faniry ,email:"Rajao@gmail.com"},
    { id: 3, name: "Doara niaina", contact: "034 21 309 67", img: Lina,email:"Doara@gmail.com"},
    { id: 3, name: "Marie Saunia", contact: "038 21 304 67", img: Faniry ,email:"Marie@gmail.com"},
  ];
  const {t} = useTranslation();
  return (
    <>
      <div className="Dashboard">
        <SideBar />
        <h1 className="title-client">{t("clients")}</h1>
        <div className="Container-Product">
          <ul className="Ul-Product">
            <li className="title-list">
              <div className="card">
                <p>{t("identifier")}</p>
              </div>
              <div className="card">
                <p>{t("Email")}</p>
              </div>
              <div className="card">
                <p>{t("Contact")}</p>
              </div>
              <div className="card">
                <p>{t("Montant")}</p>
              </div>
            </li>
            <ul className="list-Prod">
              {clients.map((client: any) => (
                <li className="product-list" key={client.id}>
                  <div className="card">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="img-product"
                    />
                  </div>
                  <div className="card">
                    <p className="titre-produit">{client.email}</p>
                  </div>
                  <div className="card">
                    <p className="price">{client.name}</p>
                  </div>
                  <div className="card">
                    <button className="custom-btn">{t("Montant")}</button>
                  </div>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Clients;
