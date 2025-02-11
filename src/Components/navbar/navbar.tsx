import { Link } from "react-router-dom";
import ProductSvg from "./Svg/ProductSvg";
import StoreSvg from "./Svg/StoreSvg";
import "./navbar.scss";
import { useTranslation } from "react-i18next";
import ClientSvg from "./Svg/ClientSvg";
import DashSvg from "./Svg/dashSvg";
const Navbar: React.FC = () => {
  const {t,i18n} = useTranslation();
  return (
    <div className="navBar">
      <img src="src/img/jpeg/hu-jiarui-Luhg-tamGfA-unsplash.jpg" alt="logo" />
    <nav>
      <ul className="ul-nav" style={{ display: "flex", gap: "20px", listStyle: "none" ,flexDirection:"column",width:"20vw",padding:"0px"}}>
        <li className="list-nav"><DashSvg/><Link to="/dashboard" className="link_style">{t("Dash")}</Link></li>
        <li className="list-nav"> <ProductSvg/><Link to="/products" className="link_style">{t("produit")}</Link></li>
        <li className="list-nav"> <ClientSvg/><Link to="/clients" className="link_style">{t("clients")}</Link></li>
        <li className="list-nav"> <StoreSvg/><Link to="/store" className="link_style">{t("store")}</Link></li>
      </ul>
    </nav>
    </div>
  );
};
export default Navbar;