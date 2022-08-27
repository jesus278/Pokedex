import React from "react";
const Navbar = () => {
  let imgApi =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <div>
          <img src={imgApi} alt="imgPokeApi" className="navbar-image" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
