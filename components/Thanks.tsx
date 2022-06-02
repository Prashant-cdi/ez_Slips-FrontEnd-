import React from 'react'
import Image from 'next/image'
import styles from '../styles/Thanks.module.css'


const partners = ["CodeDrills Infotech","Codedrills Ventures","Codedrills Solutions"];

const customStyleh2 = {
  "margin":"30px auto"
}

const customStyleh1 = {
  "margin":"40px auto"
}

function Partner(props) {
  return (
    <h2 >{props.value}</h2>
  )
}

const Thanks = () => {
  return (
      <div className={`${styles.thanks} justify-center`}>
        <div className={styles.imagerounddiv}>
          <Image src="/assets/images/Ellipse13.png" alt="customer" layout="fill" className={styles.thanks_img}/>
        </div>
        <div className={styles.thanks_content}>
          “Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I really appreciate that was awesome and super fun” 
        </div>
        <h3 className='inline_block margin_auto' style={customStyleh2}>Lassy Chester, Creative director</h3>
        <h1 className='inline_block margin_auto' style={customStyleh1}>Our Partners</h1>
        <div className={styles.partners_div}>
          { partners.map((value)=>(
                  <Partner value={value} key={value}/>
          ))
          }
       
        </div>
      </div>
  )
}

export default Thanks