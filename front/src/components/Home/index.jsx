import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Home = () => {
  const [id, setId] = useState(null);

  const handleChage = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.info}>
          <span>
            <h1 className={styles.title}>ChatApp</h1>
            <p className={styles.text}>
              ChatApp es un canal de comunicación en línea que le permite
              mantener conversaciones en tiempo real. Ingrese el ID del usuario
              y empiece a conversar
            </p>
          </span>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Ingresa el ID de la conversación"
              onChange={handleChage}
              className={styles.input}
            />
            <Link to={`/chat/${id}`}>
              <button className={styles.btn}>Ir al chat</button>
            </Link>
          </form>
        </div>
        <img
          src="https://images.pexels.com/photos/7862494/pexels-photo-7862494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="home"
          className={styles.image}
        />
      </div>
    </div>
  );
};
