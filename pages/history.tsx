import React,{FC} from 'react'

import {LeftHeader, MiddleHeader, ModalWrapper } from '../components/Header'

import { useState } from 'react'

import * as linkData from "../components/mockdata/links"

import styles from "../styles/Header.module.css";
import Copyright from '../components/Copyright';
import { Leftfooter, Middlefooter } from '../components/Footer';
import RightFooterdashboard from '../components/RightFooterdashboard';
import LeftDashboardComponent from '../components/LeftDashboardComponent';
import RightConfiguration from '../components/RightConfiguration';
import RightHistoryComponent from '../components/RightHistoryComponent';




const History:FC = () => {
    const [displayModal , setDisplayModal] = useState<boolean>(false);
  
    const [contentIndex, setContentIndex ] = useState<number>(0);

    function handlesetDisplaymodal(value:boolean):any {
        setDisplayModal(value)
        console.log("this has run");
        console.log(displayModal);
      }
    
      function SetContentIndex (value:number) :any  {
        setContentIndex(value)
      }


const footershadow : any = {
    "boxShadow": "1px 1px 6px grey",
    "padding": "50px 0 40px"
  }

  return (

    <>
    <div className={styles.header}>
        <LeftHeader />
        <MiddleHeader   
    displayModal={displayModal} 
    setdisplayModal={handlesetDisplaymodal} 
    links={linkData.links} 
    SetContentIndex= {SetContentIndex}  />
        
    
    </div>
  
   

    <ModalWrapper   displayModal = {displayModal} 
  contentIndex={contentIndex} 
  setdisplayModal={handlesetDisplaymodal}  />


{/* here is the main dashboard middle content */}
<div className='flex'>

<LeftDashboardComponent />

<RightHistoryComponent />
</div>






<div className="flex align_item_center" style={footershadow}>
    <Leftfooter />
    <Middlefooter />

  <RightFooterdashboard />
    
    </div>

<Copyright /> 
  </>
    
    


  )
}

export default History