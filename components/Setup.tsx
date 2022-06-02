import React from 'react'
import Image from 'next/image'
import styles from "../styles/Setup.module.css";

const setUpPara= "Upon completion, your information will be reviewed and a member of our client"
function Setupchild(props) {
    return (

    <div className={styles.setup_child}>
        <span className={styles.circle} id={props.id}>
            <Image src={props.srcimg}
            height={props.height} width={props.width} className="setup_images"  alt={props.srcimg}/>
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
            <Setupchild srcimg="/assets/images/Vector.png" step="Step 1" heading="Link Your Email" para={setUpPara} height="55px" width="85px" id={styles.setup1}/>
            <Setupchild srcimg="/assets/images/form.png" step="Step 2" heading="Fill The Form" para={setUpPara} height="97px" width="85px" id={styles.setup2} />
            <Setupchild srcimg="/assets/images/Frame2.png" step="Step 3" heading="Manage Your Data" para={setUpPara} height="77px" width="85px" id={styles.setup3} />
        </div>
    </div>
  )
}

export default Setup