import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function LogIn(props) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="form">
        <h1>Connexion</h1>

        <form
          onSubmit={async event => {
            event.preventDefault();

            try {
              const response = await axios.post(
                "https://leboncoin-api.herokuapp.com/api/user/log_in",
                {
                  email,
                  password
                }
              );
              if (response.data.token) {
                const token = response.data.token;
                Cookies.set("userToken", token, { expires: 2000 });
                props.setUser({
                  token: token
                });
                history.push("/");
              } else {
                alert("Token is missing");
              }
            } catch (error) {
              alert("Identifiants incorrects");
            }
          }}
        >
          <p>Adresse email</p>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={event => {
              const value = event.target.value;
              setEmail(value);
            }}
          ></input>
          <p>Mot de passe</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => {
              const value = event.target.value;
              setPassword(value);
            }}
          ></input>
          <button type="submit">Se connecter</button>

          <div className="hr"></div>
          <div className="nocount">Vous n'avez pas de compte ?</div>
          <Link to="/sign_up">
            <button className="create-count" type="submit" onClick={() => {}}>
              Créer un compte
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default LogIn;
