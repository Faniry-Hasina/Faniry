// import { useState } from "react";
import { Link } from "react-router-dom";
import NotifSvg from "./Svg/Notif";
import CommentSvg from "./Svg/Commentaire";
import MenuSvg from "./Svg/Menu";
import { useTranslation } from "react-i18next";


import  { useState, useEffect } from "react";
import DisconnecteSvg from "./Svg/DissconnectSvg";
import Language from "./Language";




export default function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [multiLangue, setmultiLangue] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);

 
  const {t,i18n} = useTranslation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };
  const toggleCommentaires = () => {
    setCommentairesOpen(!commentairesOpen);
  };
  const toggleLangue = () => {
    setmultiLangue(!multiLangue);
  };

  // const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [background, setBackground] = useState("white");
  const [Borderbottom, setBorderbottom] = useState("");


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setBackground("white");
        setBorderbottom("1px solid white");
      } else {
        setBackground("white");
        setBorderbottom("0px solid rgb(0, 48, 48)");
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header>
      <div
        className="profil-bar"
        style={{
          borderBottom: Borderbottom,
          height: "8vh",
          backgroundColor: background,
          transition: "background-color 0.9s ease",
        }}
      >
        {/* ({scrollDirection}) */}
        <button onClick={toggleLangue}>
          {t("langue")}
          {multiLangue && (
            <div className="Wrapper-Btn">
              
<Language/>
            </div>
          )}
        </button>
        <div onClick={toggleNotifications} style={{ position: "relative" }}>
          <NotifSvg />
          {notificationsOpen && (
            <div className="notifications-popup">
              <div className="notification">
                <span role="img" aria-label="Wave">
                  👋{i18n.t("welcome")}
                </span>{" "}
                Bienvenue sur le tableau de bord, pouvez-vous enregistrer votre
                mot de passe ?
              </div>
              <div className="notification">
                <span role="img" aria-label="Warning">
                  ⚠️
                </span>{" "}
                Quelqu'un a tenté de se connecter à votre compte avec votre
                email et mot de passe.
              </div>
              <div className="notification">
                <span role="img" aria-label="Key">
                  🔑
                </span>{" "}
                Vérifiez votre mot de passe.
              </div>
            </div>
          )}
        </div>
        <div onClick={toggleCommentaires} style={{ position: "relative" }}>
          <CommentSvg />
          {commentairesOpen && (
            <div className="commentaires-popup">
              <div className="commentaires">
                <div className="img-p">
                  <img
                    src="/john.jpg"
                    alt="Person"
                    className="img-p"
                  />
                </div>
                <span role="img" aria-label="Wave"></span> J'adore cette site 👋
              </div>
              <div className="commentaires">
                <div className="img-p">
                  <img
                    src="/john.jpg"
                    alt="Person"
                    className="img-p"
                  />
                </div>
                <span aria-label="Wave"></span>"L'interface est tellement fluide
                et bien pensée !"
              </div>
              <div className="commentaires">
                <div className="img-p">
                  <img
                    src="/john.jpg"
                    alt="Person"
                    className="img-p"
                  />
                </div>
                <span aria-label="Wave"></span> "Ce tableau de bord m'aide à
                avoir une vision complète et rapide de mes objectifs.
              </div>
              <div className="commentaires">
                <div className="img-p">
                  <img
                    src="/john.jpg"
                    alt="Person"
                    className="img-p"
                  />
                </div>
                <span aria-label="Wave"></span> Bienvenue sur le tableau <br />{" "}
                de bord, pouvez-vous <br />
                enregistrer votre mot de passe ?
              </div>
              <div className="commentaires">
                <div className="img-p">
                  <img
                    src="/john.jpg"
                    alt="Person"
                    className="img-p"
                  />
                </div>
                <span aria-label="Wave"></span> Bienvenue sur le tableau <br />{" "}
                de bord, pouvez-vous <br />
                enregistrer votre mot de passe ?
              </div>
              <div className="commentaires">
                <div className="img-p">
                  <img
                    src="/john.jpg"
                    alt="Person"
                    className="img-p"
                  />
                </div>
                <span aria-label="Wave"></span> Bienvenue sur le tableau <br />{" "}
                de bord, pouvez-vous <br />
                enregistrer votre mot de passe ?
              </div>
              <div className="commentaires">
                <div className="img-p">
                  <img
                    src="/john.jpg"
                    alt="Person"
                    className="img-p"
                  />
                </div>
                <span aria-label="Wave"></span> Bienvenue sur le tableau <br />{" "}
                de bord, pouvez-vous <br />
                enregistrer votre mot de passe ?
              </div>
              <div className="commentaires">
                <div className="img-p">
                  <img
                    src="/john.jpg"
                    alt="Person"
                    className="img-p"
                  />
                </div>
                <span aria-label="Wave"></span> Bienvenue sur le tableau <br />{" "}
                de bord, pouvez-vous <br />
                enregistrer votre mot de passe ?
              </div>
            </div>
          )}
        </div>
        <img
          src="/Calamardo DRILL.jpeg"
          alt="Profile"
          className="profil-img"
        />
        <div className="menu-container" onClick={toggleMenu}>
          <MenuSvg />
          {menuOpen && (
            <div className="menu-dropdown">
              <ul>
                <li className="out">
                  <DisconnecteSvg/>
                  <p
                    className="p-out"
                    onClick={() =>
                      alert("Êtes-vous sûr de vouloir vous déconnecter ?")
                    }
                  >
                    <Link to="/">Se déconnecter</Link>
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
