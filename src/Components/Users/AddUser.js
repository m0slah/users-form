import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState();
  const [enteredAge, setEnteredAge] = useState();

  const addUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if(enteredUsername.trim().length ===0 || enteredAge.trim().length===0){
      return;
    }

    if(+enteredAge<1){
      return;
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    console.log(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          // value={enteredUsername}
          onChange={addUsernameHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          // value={enteredAge}
          onChange={ageChangeHandler}
        />
        <br />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
