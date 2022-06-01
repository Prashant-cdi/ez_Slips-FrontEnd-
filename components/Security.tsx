import React from 'react';
import Image from 'next/image';
import styles from "../styles/Security.module.css";

function SecurityLeft() {
    return(
        <div className={styles.security_left}>
asdasasd
        </div>
    )
}

function SecurityRight() {
    return(
        <div className={styles.security_right}>
            
            <Image 
            className={styles.biometric_image}
            src="/assets/images/biometric.png"
            layout='fill'
            alt='biometric'
           />

            
        </div>
    )
}

const Security = () => {
  return (
    <div className={styles.security}>
        <SecurityLeft />
        <SecurityRight />
    </div>
  )
}

export default Security