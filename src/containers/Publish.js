import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Publish() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState();

  const userToken = Cookies.get("userToken");

  return (
    <>
      <form
        onSubmit={async event => {
          event.preventDefault();

          const formData = new FormData();

          formData.append("title", title);
          formData.append("text", text);
          formData.append("price", price);
          formData.append("files", file);
          try {
            const response = await axios.post(
              "https://leboncoin-api.herokuapp.com/api/offer/publish",
              formData,
              {
                headers: {
                  Authorization: "Bearer " + userToken,
                  "Content-Type": "multipart/form-data"
                }
              }
            );
            alert(JSON.stringify(response.data));
          } catch (err) {
            if (err.response.status === 500) {
              console.error("An error occurred");
            } else {
              console.error(err.response.data.msg);
            }
          }
        }}
      >
        <div className="wrapper publish">
          <div className="textpublish">
            <h2> Déposer une annonce</h2>
            <div className="space"></div>

            <h3>Titre de l'annonce</h3>
            <input
              type="text"
              value={title}
              onChange={event => {
                setTitle(event.target.value);
              }}
            />
            <h3>Texte de l'annonce</h3>
            <input
              className="textarea"
              type="area"
              value={text}
              onChange={event => {
                setText(event.target.value);
              }}
            />
            <h3>Prix</h3>
            <input
              classeName="price"
              type="number"
              value={price}
              onChange={event => {
                setPrice(event.target.value);
              }}
            />
            <h3>Photo</h3>
            <input
              className="photo"
              type="file"
              onChange={event => {
                setFile(event.target.files[0]);
              }}
            />
            <div className="validate">
              <button type="submit">Valider</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Publish;
