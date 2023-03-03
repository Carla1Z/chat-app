import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../Message";
import { GrSend } from "react-icons/gr";

export const Chat = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.myMessage.value;
    const hour = `${new Date().getHours()}:${new Date().getMinutes()}`;
    const sender = true;
    console.log([...messages, { text: value, hour }]);
    setMessages([...messages, { text: value, hour }]);
  };

  return (
    <div>
      <p>Chat with id {id}</p>
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="myMessage" placeholder="Write a message..." />
        <button type="submit">
          <GrSend />
        </button>
      </form>
    </div>
  );
};