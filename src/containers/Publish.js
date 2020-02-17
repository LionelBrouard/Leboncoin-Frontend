import React, { useState } from "react";
import axios from "axios";

function Publish() {
  const [announcetitle, setAnnouncetitle] = useState("");
  const [announcetext, setAnnouncetext] = useState("");
  const [announceprice, setAnnounceprice] = useState("");
  const [file, setFile] = useState();

  return (
    <>
      <form
        onSubmit={async event => {
          event.preventDefault();

          const formData = new FormData();

          formData.append("announcetitle", "announcetitle");
          formData.append("announcetext", "announcetext");
          formData.append("announceprice", "announceprice");
          formData.append("picture", file);

          const response = await axios.post(
            "https://leboncoin-api.herokuapp.com/api/offer/publish",
            formData
          );

          console.log(response.data);
        }}
      >
        <div className="wrapper publish">
          <div className="textpublish">
            <h2> Déposer une annonce</h2>
            <div className="space"></div>

            <h3>Titre de l'annonce</h3>
            <input
              type="text"
              value={announcetitle}
              onChange={event => {
                setAnnouncetitle(event.target.value);
              }}
            />
            <h3>Texte de l'annonce</h3>
            <input
              type="area"
              value={announcetext}
              onChange={event => {
                setAnnouncetext(event.target.value);
              }}
            />
            <h3>Prix</h3>
            <input
              classeName="price"
              type="text"
              value={announceprice}
              onChange={event => {
                setAnnounceprice(event.target.value);
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
        </div>{" "}
      </form>
    </>
  );
}

export default Publish;
