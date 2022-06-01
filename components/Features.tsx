import React from "react";
import Image from "next/image"
import styles from "../styles/Features.module.css"



function FeatureBox(props) {
  return(
    <div className={styles.featuresbox}> 
        <span className={styles.feature_circle} id={props.src}></span>
        <Image 
        src={props.src}
        width="100"
        height="100"
        alt={props.src}
        />        
        <h1 className={styles.featuresbox_h1}>{props.heading}</h1>
        <p>{props.para}</p>
        <span className=""></span>
    </div>
  )
}
const Features = () => {
  const paras = ["Hassle free work and automated salary slips for smooth workflow","Custom account and slips creation according to you and your employees","Simple and easy interfacefor steady, fast and friendly workflow"]
  
  
  return (
    <div className={styles.features}>
      <h1 className={styles.features_h1}>Features</h1>
      <div className={styles.features_div}>
        <FeatureBox src="/assets/images/Frame.png" heading="Instant Slips" para={paras[0]}/>
        <FeatureBox src="/assets/images/gear 1.png" heading="Customization" para={paras[1]}/>
        <FeatureBox src="/assets/images/add-friend 1.png" heading="User Friendly" para={paras[2]}/>
      </div>
    </div>
  );
};

export default Features;
