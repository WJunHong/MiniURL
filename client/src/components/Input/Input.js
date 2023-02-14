// Basic imports
import React, { useState } from "react";
import styles from "./Input.module.css";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import validator from "validator";

// Rendering the children inside the background div
const Input = ({ setOutput }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [label, setLabel] = useState("Input URL");

  const submitUrl = (e) => {
    e.preventDefault();

    if (!validator.isURL(url)) {
      setError(true);
      setLabel("Bad URL format detected!");
      return;
    }

    axios
      .post("http://localhost:3333/short", { origUrl: url })
      .then((res) => {
        setOutput(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <Paper elevation={3} className={styles.inputContainer}>
        <TextField
          id="standard-basic"
          label={label}
          variant="standard"
          className={styles.inputField}
          error={error}
          onChange={(e) => {
            setError(false);
            setLabel("Input URL");
            setUrl(e.target.value);
          }}
        />
        <Button
          variant="contained"
          className={styles.button}
          onClick={submitUrl}
        >
          Convert URL
        </Button>
      </Paper>
    </div>
  );
};
export default Input;
