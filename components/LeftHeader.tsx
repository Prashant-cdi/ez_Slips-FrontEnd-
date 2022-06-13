import styles from "../styles/Header.module.css";
import Link from "next/link";
import React, {FC} from "react"

export const LeftHeader:FC = () => {
    return (
      <div className={styles.left_header}>
        <div className={styles.left_header_h1}>
          <Link href="/">
            <span className={styles.main_logo}>ezSlips</span>
          </Link>
        </div>
      </div>
    );
  }