import React from "react";

function AboutUs(props) {
  return (
    <div>
      <h2 style={{fontSize: '40px'}}>Notre Concept</h2>
      <img src='./enjoy.jpeg' alt='enjoy' style={{width: '100%'}} />
      <p style={{fontSize: '35px'}}>
        "Only when we face the impossible, and experience the unbearable, do we
        find out who we truly are" - Virunika Tugaleva <br />
        Partagez-nous vos plus beaux, plus drôles, plus surprenants
        souvenirs/philosophies/tout ce qui se passe par la tête, tout en restant anonyme. 
        <br/>
        Restez anonyme, restez vous-même.
      </p>
    </div>
  );
}

export default AboutUs;
