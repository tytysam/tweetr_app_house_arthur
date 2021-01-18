import React from "react";

function Footer() {
  const myStyles = {
    bottom: "0",
    position: "fixed",
    width: "80vw",
    backgroundColor: "white",
  };
  return (
    <div className="footer" style={myStyles}>
      <hr style={{ backgroundColor: "gainsboro" }} />
      <p style={{ display: "flex", marginLeft: "50px" }}>
        Twittr by <em>General Assembly©</em>
      </p>
    </div>
  );
}

export default Footer;
