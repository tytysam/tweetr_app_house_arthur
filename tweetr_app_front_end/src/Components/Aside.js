import React from "react";
import Card from "react-bootstrap/Card";

function Aside() {
  const asideContainerStyles = {
    backgroundColor: "white",
    width: "20%",
    height: "100vh",
    position: "fixed",
    right: "0",
    borderLeft: "0.5px solid gainsboro",
    marginBottom: "0",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div className="asideContainer" style={asideContainerStyles}>
      <Card
        bg={"dark"}
        text={"white"}
        style={{ width: "18rem", marginLeft: "35px", marginTop: "40px" }}
        className="mb-2"
      >
        <Card.Header>Trending</Card.Header>
        <Card.Body>
          <Card.Title> Arthur Bernier jr. </Card.Title>
          <Card.Text>
            MambaScript Sweeps the nation off it's metaphorical feet!!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg={"dark"}
        text={"white"}
        style={{ width: "18rem", marginLeft: "35px", marginTop: "40px" }}
        className="mb-2"
      >
        <Card.Header>People You May Know</Card.Header>
        <Card.Body>
          <Card.Title> Maddy Moore </Card.Title>
          <Card.Text>She onto big things rn</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg={"dark"}
        text={"white"}
        style={{ width: "18rem", marginLeft: "35px", marginTop: "40px" }}
        className="mb-2"
      >
        <Card.Header>Friends Online</Card.Header>
        <Card.Body>
          <Card.Title> Say Hi </Card.Title>
          <Card.Text>
            Evan
            <br />
            Kay
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Aside;
