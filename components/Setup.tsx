import React from 'react'
import Image from 'next/image'
import styles from "../styles/Setup.module.css";
import { useState  } from 'react';

const setUpPara= "Upon completion, your information will be reviewed and a member of our client"

function Setupchild(props) {

    const [ishovering , Setishovering] = useState(false);
    const [imagesrc , SetImagesrc ] =useState(props.srcimg);
    const [bgcolor, setBgcolor] = useState(props.bgcolor);

    const onMouseEnterFunction = () => {
        Setishovering(true);
        console.log("entered");
        SetImagesrc(props.altimg);
        setBgcolor(props.altbgcolor)

    }

    const onMouseLeaveFunction = () => {
        Setishovering(false);
        console.log("exited");
        SetImagesrc(props.srcimg);
        setBgcolor(props.bgcolor);
    }




    return (

    <div className={styles.setup_child}>
        <span className={styles.circle} id={props.id} style={{ backgroundColor : bgcolor}} onMouseEnter={onMouseEnterFunction} onMouseLeave={onMouseLeaveFunction}>
        <Image src={imagesrc} height={props.height} width={props.width} className="setup_images"  alt={props.srcimg}/>
            {/* {ishovering?(<Image src={props.altimg} height={props.height} width={props.width} className="setup_images"  alt={props.srcimg}/>):
            (<Image src={props.srcimg}height={props.height} width={props.width} className="setup_images"  alt={props.srcimg}/>)} */}
            
        </span>
        <h3>{props.step}</h3>
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
    </div>

    )
}

const Setup = () => {
  

        return (

    <div className={styles.setup}>
        <h2>Setup is as Easy as a-b-c’s</h2>
        <div className='flex'>
            <Setupchild srcimg="/assets/images/Vector.png" altimg="/assets/images/messagehover.png" step="Step 1" heading="Link Your Email" para={setUpPara} height="55px" width="85px" id={styles.setup1} bgcolor="#AFD7D2" altbgcolor="#47A296"/>
            <Setupchild srcimg="/assets/images/form.png" altimg="/assets/images/file2hover.png" step="Step 2" heading="Fill The Form" para={setUpPara} height="97px" width="85px" id={styles.setup2} bgcolor="rgba(33, 98, 119, 0.13)"  altbgcolor="#3F6275"/>
            <Setupchild srcimg="/assets/images/Frame2.png" altimg="/assets/images/file3hover.png" step="Step 3" heading="Manage Your Data" para={setUpPara} height="77px" width="85px" id={styles.setup3} bgcolor="rgba(33, 98, 119, 0.13)" altbgcolor="#88A3BE" />
        </div>
    </div>
  )
}

export default Setup