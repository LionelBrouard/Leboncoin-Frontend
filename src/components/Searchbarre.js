import React from "react";

function Searchbarre() {
  return (
    <>
      <div className="searchbarre">
        <input type="text" placeholder="Que recherchez-vous?"></input>
        <button className="searchbutton">Rechercher</button>
      </div>
    </>
  );
}

export default Searchbarre;
