import React from 'react'
import Image from 'next/image'

const setUpPara= "Upon completion, your information will be reviewed and a member of our client"
function Setupchild(props) {
    return (

    <div className='setup_child'>
        <span className="circle">
            <Image src={props.srcimg}
            height="80" width="80" className="setup_images" id={props.srcimg} />
        </span>
        <h3>{props.step}</h3>
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
    </div>

    )
}

const Setup = () => {
        return (
    <div className='setup'>
        <h2>Setup is as Easy as a-b-c’s</h2>
        <div className='flex'>
            <Setupchild srcimg="/Vector.png" step="Step 1" heading="Link Your Email" para={setUpPara}/>
            <Setupchild srcimg="/form.png" step="Step 2" heading="Fill The Form" para={setUpPara}/>
            <Setupchild srcimg="/Frame2.png" step="Step 3" heading="Manage Your Data" para={setUpPara}/>
        </div>
    </div>
  )
}

export default Setup