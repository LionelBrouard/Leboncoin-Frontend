import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Offer(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + id
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        {isLoading === true ? (
          <p>En cours de chargement ...</p>
        ) : (
          <>
            <div className="offerpic">
              <img src={data.pictures} alt={data.title} />
            </div>
            <div className="offertext">
              <h2>{data.title}</h2>
              <h2 className="price"> {data.price} €</h2>
              <h3 classeName="date">{data.created}</h3>
            </div>
            <div className="description">
              <h4 className="wrapper">Description</h4>
              <p className="wrapper">{data.description}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Offer;
