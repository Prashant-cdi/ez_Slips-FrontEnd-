import React,{FC} from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import * as linkData from "./mockdata/links"
import * as modalData from "./mockdata/ModalData" 

import { useState } from 'react'


import { LeftHeader } from "./LeftHeader";
import { MiddleHeader } from "./MiddleHeader";
// const displayModalFlag: boolean = false;

// this is the main component of the file

const Header: FC = () => {
  
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
  
    return (
      <>
  <div className={styles.header}>
  
    <LeftHeader />
  
    <MiddleHeader 
    displayModal={displayModal} 
    setdisplayModal={handlesetDisplaymodal} 
    links={linkData.links} 
    SetContentIndex= {SetContentIndex}  />

    <RightHeader />
    
  </div>
  
  <ModalWrapper 
  displayModal = {displayModal} 
  contentIndex={contentIndex} 
  setdisplayModal={handlesetDisplaymodal}  
  />
  </>
    );
  };
  


const RightHeader:FC = () => {
  return (
    <div className={styles.right_header}>
      <li>
        <Link href="/signin">Sign In</Link>
      </li>
      <span className={styles.spanbutton}>
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </span>
    </div>
  );
}


interface ModalWrapperI {
  displayModal: boolean,
  contentIndex: number,
  setdisplayModal?: any | void
}

const ModalWrapper:FC<ModalWrapperI> = ({displayModal , contentIndex, setdisplayModal}) => {

  var customStyleWrapper = {
    "display": "unset"    
  }
  
  const handleModalWrapper:any =(event:any) => {
      console.log(event.target.id);
      if(event.target.id=="modalWrap"){
        setdisplayModal(!displayModal);
    
    }
  }

  if(!displayModal)
  {

    customStyleWrapper ={
      "display":"none"
    }
  }

  return(
    <div className= {styles.modalwrapper} onClick={handleModalWrapper} id="modalWrap" style={customStyleWrapper}>
      <Modal displayModal={displayModal} contentIndex={contentIndex} />
  </div>
    )
  }
  

const Modal:FC<ModalWrapperI>=({displayModal, contentIndex}) =>{

  console.log(displayModal)

 return(

      <div className={`flex ${styles.modal} `} id="modal"  >
      <div className={`${styles.firstmodalchild} ${styles.modalchilds}`}>
        <div className={styles.name}>{modalData.modalcontent[contentIndex]["1stdiv_heading"]}</div>
        <p >{modalData.modalcontent[contentIndex]["1stdiv_para"]}</p>
      </div>
      
      <div className={`${styles.secondmodalchild} ${styles.modalchilds}`}>
      
        <h2>{modalData.modalcontent[contentIndex]["2nddiv_main_heading"]}</h2>
        <h3>{modalData.modalcontent[contentIndex]["2nddiv_first_smallheading"]}</h3>
        <p className={styles.samepara}>{modalData.modalcontent[contentIndex]["2nddiv_upper_para"]}</p>
        <hr className={styles.hruler} />
        <h3>{modalData.modalcontent[contentIndex]["2nddiv_second_smallheading"]}</h3>
        <p className={styles.samepara}>{modalData.modalcontent[contentIndex]["2nddiv_lower_para"]}</p>

      </div>

      <div className={`${styles.thirdrdmodalchild} ${styles.modalchilds}`}>
      <h2>{modalData.modalcontent[contentIndex]["3rddiv_main_heading"]}</h2>
        <h3>{modalData.modalcontent[contentIndex]["3rddiv_first_smallheading"]}</h3>
        <p className={styles.samepara}>{modalData.modalcontent[contentIndex]["3rddiv_upper_para"]}</p>
        <hr className={styles.hruler}/>
        <h3>{modalData.modalcontent[contentIndex]["3rddiv_second_smallheading"]}</h3>
        <p className={styles.samepara}>{modalData.modalcontent[contentIndex]["3rddiv_lower_para"]}</p>
      </div>
   </div>
   
 ) 
}



export default Header;
