import React from "react";
import styles from "./styles.module.css";

export const Message = ({ text, hour, sender = false }) => {
  return (
    <li className={styles.message}>
        <div className={sender ? styles.sender : styles.receiver}>
          <p>{text}</p>
        </div>
        <span className={sender ? styles.senderHour : styles.receiverHour}>
          {hour}
        </span>
    </li>
  );
};
