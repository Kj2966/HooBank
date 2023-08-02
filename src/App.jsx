import React from "react";
import style from "./style";
import styles from "./style";
import { Billing, Business, Button, CardDeal, Clients, Cta, FeedBackCard, Footer, GetStarted, Hero, Navbar, Stats, Tstmon } from './Components/ImportAllOther'
const App = () => (
  <div className="bg-primary w-full owerflow-hidden ">
    <div className={`${styles.paddingX} ${style.flexCenter}`}>
      <div className={`${styles.boxWidth}`}><Navbar /></div>
    </div>

    {/* // for the hero component */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}><Hero /></div>
    </div>
    {/* // for the hero component */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats />
        <Business />
        <Billing />

        <CardDeal />
       
        <Tstmon />
        <Clients />
        <Cta />
        <Footer />

      </div>
    </div>
  </div>
);

export default App;
