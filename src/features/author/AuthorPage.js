import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Dominik Blak"
      sectionContent={
        <p>
          <b>Mam na imię Dominik.</b>
          <br />
          Obecnie mieszkam oraz pracuję w Krakowie. Informatyka to także moje hobby, dlatego postanowiłem połączyć
          przyjemne z pożytecznym i się przebranżowić. Miałem już styczność z<i>Javą</i>
          oraz
          <i>Angularem,</i>
          <strong>
            jednak najbardziej przypdał mi do gustu
            <i>JavaScript</i>i<i>React.</i>
          </strong>
        </p>
      }
    />
  </Container>
);
export default AuthorPage;
