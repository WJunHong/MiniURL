// Basic imports
import React from "react";
import styles from "./Output.module.css";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// Rendering the children inside the background div
const Output = ({ miniUrl, fullUrl }) => {
  return (
    <div className={styles.container}>
      <Paper elevation={3} className={styles.outputContainer}>
        <div>MiniURL</div>
        <a href={`${fullUrl}`} target="_blank">
          {miniUrl}
        </a>
        {miniUrl ? <Button variant="outlined">copy</Button> : null}
      </Paper>
    </div>
  );
};
export default Output;
