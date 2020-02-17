import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/images/logoLBC.png";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ user, setUser }) {
  const history = useHistory();
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="headergen">
            <div className="headertotal">
              <Link to="/offers">
                <img src={Logo} className="logo"></img>
              </Link>
              <Link to="/publish" className="publlish">
                <button className="postoffer">+ Déposer une annonce</button>
              </Link>
              <button className="search">O Rechercher</button>
            </div>
            {user === null ? (
              <div className="modal">
                <div className="icon-connect">
                  <FontAwesomeIcon icon={["far", "user"]} />
                  <Link to="/log_in">
                    <button className="connect">Se connecter</button>{" "}
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="icon-connect disconnect"
                onClick={() => {
                  Cookies.remove("userToken");
                  setUser(null);
                  history.push("/");
                }}
              >
                Se déconnecter
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="orange"></div>
    </>
  );
}

export default Header;
