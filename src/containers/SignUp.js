import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();

  const handleSubmit = async e => {
    console.log("coucou");
    e.preventDefault();
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/api/user/sign_up",
      {
        email: email,
        username: username,
        password: password1
      }
    );
    console.log(response.data);
  };

  return (
    <>
      <div className="wrapper">
        <div className="sign-up">
          <div className="text-sign-up">
            <h2>Pourquoi créer un compte ?</h2>
            <div className="timegen">
              <FontAwesomeIcon icon={["far", "clock"]} className="icon" />
              <div className="time">
                <h3>Gagnez du temps</h3>
                <p>
                  Publier vos annonces rapidement avec vos informations
                  pré-remplies chaque fois que vous souhaitez déposer une
                  nouvele annonce.
                </p>
              </div>
            </div>
            <div className="firstgen">
              <FontAwesomeIcon icon={["far", "bell"]} className="icon" />
              <div className="first">
                <h3>Soyez les premiers informés</h3>
                <p>
                  Créez des alertes Immo ou Emploi et ne manquez jamais
                  l'annonce qui vous interresse.
                </p>
              </div>
            </div>

            <div className="viewgen">
              <FontAwesomeIcon icon={["far", "eye"]} className="icon" />
              <div className="view">
                <h3>Visibilité</h3>
                <p>
                  Suivez les statistiques de vos annonces,nombre de fois où
                  votre annonce a été vue, nombre de contacts reçus.
                </p>
              </div>
            </div>
          </div>
          <div className="sign-up-form">
            <h1>Créez un compte</h1>
            <form
              className="sign-up-form"
              onSubmit={async event => {
                event.preventDefault();

                if (password1 === password2) {
                  try {
                    const response = await axios.post(
                      "https://leboncoin-api.herokuapp.com/api/user/sign_up",
                      {
                        email: email,
                        username: username,
                        password: password1
                      }
                    );

                    console.log(response.data);

                    if (response.data.token) {
                      const token = response.data.token;

                      Cookies.set("userToken", token, { expires: 2000 });

                      setUser({
                        token: token
                      });

                      history.push("/");
                    }
                  } catch (error) {
                    alert(error.message);
                  }
                }
              }}
            >
              <p>Pseudo</p>
              <input
                placeholder="Username"
                type="text"
                value={username}
                onChange={event => {
                  setUsername(event.target.value);
                }}
              />
              <p>Adresse email</p>
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
              <p>Mot de passe</p>
              <input
                placeholder="Password 1"
                type="password"
                value={password1}
                onChange={event => {
                  setPassword1(event.target.value);
                }}
              />
              <p>Confirmer le mot de passe</p>
              <input
                placeholder="Password 2"
                type="password"
                value={password2}
                onChange={event => {
                  setPassword2(event.target.value);
                }}
              />
              <input type="submit" value="Créer mon Compte Personnel" />
            </form>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default SignUp;
