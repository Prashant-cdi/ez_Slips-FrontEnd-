import React from 'react';
import Image from 'next/image';

function SecurityLeft() {
    return(
        <div className="security_left">
asdasasd
        </div>
    )
}

function SecurityRight() {
    return(
        <div className="security_right">
            
            <Image 
            className="biometric_image"
            src="/biometric.png"
            layout='fill'
           />

            
        </div>
    )
}

const Security = () => {
  return (
    <div className="security">
        <SecurityLeft />
        <SecurityRight />
    </div>
  )
}

export default Security