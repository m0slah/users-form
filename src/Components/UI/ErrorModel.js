import React from "react";

// import Card from "./Card";
// import Button from "./Button";
import classes from "./ErrorModel.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <dic className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </dic>
    </div>
  );
};

export default ErrorModal;
