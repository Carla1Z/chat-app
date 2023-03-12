import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Message } from "../Message";
import { GrSend } from "react-icons/gr";
import { useChat } from "../../hooks/useChat";
import { AiOutlineDoubleLeft } from "react-icons/ai";
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
          <Link to="/" style={{textDecoration: "none"}}>
            <button className={styles.btn}>
              <AiOutlineDoubleLeft />
              Volver
            </button>
          </Link>
          <p>
            Chat with id <b>{id}</b>
          </p>
          <img
            src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="userPhoto"
            className={styles.userPhoto}
          />
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
