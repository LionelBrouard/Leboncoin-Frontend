import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UniqueOffer from "../components/UniqueOffer";
import axios from "axios";
import Searchbarre from "../components/Searchbarre";
function Offers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-backend-neil.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <div>
          <div className="inputsearch">
            <Searchbarre />
          </div>
          {data.offers.map((elem, index) => {
            return (
              <>
                <Link to={"/offer/" + elem._id}>
                  <UniqueOffer {...elem} />
                </Link>
              </>
            );
          })}

          <br />
        </div>
      )}
    </div>
  );
}

export default Offers;
