import React, {FC} from 'react';
import * as linkData from "./mockdata/links"
import * as modalData from "./mockdata/ModalData" 
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

interface MiddleHeaderProps {
    links : linkData.Links[],
    displayModal: boolean, 
    SetContentIndex?: any,
    setdisplayModal : any
  }
  
  
  
  export const MiddleHeader:FC<MiddleHeaderProps> = ({ links , displayModal, setdisplayModal, SetContentIndex }) => {
  
    function changeDisplay() {
      setdisplayModal(!displayModal);
    }
     
    return(
  
      <div className={styles.middle_header}>
        {links.map((val, index) => (
          <div key={val.text} id={val.text} className={styles.middleheaderlink} 
          onClick={ 
            ()=>{
            console.log("clicked")
            changeDisplay();
            SetContentIndex(index);
            console.log(index);
          }
          }>
        
            <Link href={val.href}>
              <>
                <h3>{val.text}</h3>
  
                <span className={styles.down_arrow}>
  
                  <Image
                    src="/assets/images/down-arrow.png"
                    alt="down arrow"
                    height="20"
                    width="20"
                    />
                </span>
  
              </>
            </Link>
          </div>
        ))}
  
        </div>
    );
  }
  