import React, { FC } from "react";
import { Container } from "react-bootstrap";
import "./Home.scss";

const Home: FC = (): React.ReactElement => {
  return (
    <main className="home-view">
      <Container>
        <div>Etno Dekor Miletic se bavi izradom unikatnog nameštaja od punog
          drveta. Ono po čemu smo se istakli su najprodavaniji modeli od starih
          obrađenih buradi. Moguća je izrada nameštaja i po Vašim
          idejama,dimenzija pa i slika.</div>
      </Container>
    </main>
  );
};

export default Home;
