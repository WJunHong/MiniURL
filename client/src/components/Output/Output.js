// Basic imports
import React from "react";
import styles from "./Output.module.css";
import Paper from "@mui/material/Paper";

// Rendering the children inside the background div
const Output = ({ miniUrl }) => {
  return (
    <div className={styles.container}>
      <Paper elevation={3} className={styles.outputContainer}>
        <div>MiniURL</div>
        <a href={`${miniUrl}`} target="_blank">
          {miniUrl}
        </a>
      </Paper>
    </div>
  );
};
export default Output;
