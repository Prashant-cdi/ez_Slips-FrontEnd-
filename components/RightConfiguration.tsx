import Image from 'next/image'
import React,{FC} from 'react'
import styles from '../styles/rightconfiguration.module.css'

interface leftinputprops {
    [index: string] : string;
}

const LeftInput:FC<leftinputprops> = ({text, placeholder}) => {
    return (
        <input type={text} placeholder={placeholder} className={styles.leftinput}/>
    )
}

const RightInput:FC<leftinputprops> = ({text, placeholder}) => {
    return (
        <input type={text} placeholder={placeholder} className={styles.rightinput}/>
    )
}

const SelectInput:FC<leftinputprops> = ({text, placeholder}) => {
    return (
        <>
        
        <select name="" id="" className={styles.selectinput}>
            <option value="">Type of organisation</option>
            <option value="">helo</option>
            <option value="">helo</option>  
        </select>
        </>
    )
}


const InputfullWidth = () => {
    return (
        <input type="text" name="" id="" className={styles.inputfullwidth}/>
    )
}

const RightConfiguration = () => {
  return (
    <div className={styles.rightconfiguration}>
        <div className={styles.cameradiv}>
                <Image 
                src="/assets/images/camera.png"
                width="48px"
                height="43.75px"
                alt="camera" 
                />
        </div>

        <div className="flex">
            <LeftInput placeholder='Organisation Legal Name' type="text"  />
            <SelectInput />
        </div>

        <InputfullWidth />

        <div className="flex">
            <LeftInput placeholder='Basic Salary %' type="number"  />
            <RightInput placeholder='HRA %' type="number" />
        </div>

        <div className="flex">
            <LeftInput placeholder='More fields' type="number"  />
            <RightInput placeholder='HRA %' type="number" />
        </div>

        <button type="submit" className={styles.leftinput} style={{"backgroundColor":"#47A296",
         "color":"white",
         "fontWeight":"bold",
         "fontSize": "19px"
        }}>Save</button>

    </div>
  )
}

export default RightConfiguration