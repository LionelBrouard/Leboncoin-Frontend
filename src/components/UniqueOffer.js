import React from "react";

function UniqueOffer({ pictures, title, price, created, id, description }) {
  return (
    <>
      <div className="general">
        <div className="wrapper">
          <div className="content">
            <div className="textOffer">
              <div className="picture" key={id}>
                {pictures.length !== 0 ? (
                  <img
                    src={pictures}
                    alt={title}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="picwhite"></div>
                )}
              </div>
              <div className="text">
                <h2 style={{ color: "black" }}>{title}</h2>

                <h2 className="price">{price} €</h2>
                <h3 style={{ color: "black" }}>{created}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UniqueOffer;
