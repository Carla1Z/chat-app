import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Message } from "../Message";
import { GrSend } from "react-icons/gr";
import { useChat } from "../../hooks/useChat";
import styles from "./styles.module.css";

export const Chat = () => {
  const { id } = useParams();
  const { messages, sendMessage } = useChat(id);
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(event.target.myMessage.value);
  };
  console.log(messages);
  return (
    <div className={styles.chat}>
      <div className={styles.container}>
        <span className={styles.user}>
          <Link to="/">
            <button className={styles.btn}>Volver</button>
          </Link>
          <p>Chat with id {id}</p>
        </span>
        <div className={styles.conversation}>
          <ol>
            {messages.length === 0 ? (
              <>
                <Message
                  text={"Your chat start here 👇"}
                  hour="11:00"
                  sender={true}
                />
                <Message
                  text={"Send your first message 💬"}
                  hour="11:01"
                  sender={false}
                />
              </>
            ) : (
              messages.map((message) => <Message {...message} />)
            )}
          </ol>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="myMessage"
              placeholder="Write a message..."
              className={styles.input}
            />
            <button type="submit" className={styles.submit}>
              <GrSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
