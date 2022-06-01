import React from "react";
import Image from "next/image"


function FeatureBox(props) {
  return(
    <div className="featuresbox"> 
        
        <Image 
        src={props.src}
        width="100"
        height="100"
        />        
        <h1 className="featuresbox_h1">{props.heading}</h1>
        <p>{props.para}</p>
        <span className=""></span>
    </div>
  )
}
const Features = () => {
  const paras = ["Hassle free work and automated salary slips for smooth workflow","Custom account and slips creation according to you and your employees","Simple and easy interfacefor steady, fast and friendly workflow"]
  
  
  return (
    <div className="features">
      <h1 className="features_h1">Features</h1>
      <div className="features_div">
        <FeatureBox src="/Frame.png" heading="Instant Slips" para={paras[0]} circleColor=""/>
        <FeatureBox src="/gear 1.png" heading="Customization" para={paras[1]}/>
        <FeatureBox src="/add-friend 1.png" heading="User Friendly" para={paras[2]}/>
      </div>
    </div>
  );
};

export default Features;
