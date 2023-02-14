// Basic imports
import React from "react";
import styles from "./Input.module.css";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Rendering the children inside the background div
const Input = () => {
  return (
    <div className={styles.container}>
      <Paper elevation={3} className={styles.inputContainer}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          className={styles.inputField}
        />
        <Button variant="contained" className={styles.button}>
          Convert URL
        </Button>
      </Paper>
    </div>
  );
};
export default Input;
