// Basic imports
import React, { useState } from "react";
import styles from "./Input.module.css";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import validator from "validator";

// Rendering the children inside the background div
const Input = ({ getOutput, getFullUrl }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [label, setLabel] = useState("Shorten URL");

  const submitUrl = (e) => {
    e.preventDefault();

    if (!validator.isURL(url)) {
      setError(true);
      setLabel("Bad URL format detected!");
      return;
    }
    axios
      .post("http://localhost:3333/post/short", { fullUrl: url })
      .then((res) => {
        console.log(res);
        getOutput(res.data.miniUrl);
        getFullUrl(res.data.fullUrl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <Paper elevation={3} className={styles.inputContainer}>
        <div className={styles.textFieldContainer}>
          <TextField
            id="standard-basic"
            label={label}
            variant="standard"
            className={styles.textField}
            error={error}
            onChange={(e) => {
              setError(false);
              setLabel("Shorten URL");
              setUrl(e.target.value);
            }}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            variant="contained"
            className={styles.button}
            onClick={submitUrl}
          >
            Submit
          </Button>
        </div>
      </Paper>
    </div>
  );
};
export default Input;
