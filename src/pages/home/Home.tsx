import React, { FC } from "react";
import { Container } from "react-bootstrap";
import "./Home.scss";

const Home: FC = (): React.ReactElement => {
  return (
    <main className="homeView">
      <Container>
        <div>Proizvodnja unikatnog nameštaja od punog drveta</div>
      </Container>
    </main>
  );
};

export default Home;
