// Basic imports
import React from "react";
import styles from "./Output.module.css";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// Rendering the children inside the background div
const Output = ({ miniUrl, fullUrl }) => {
  const copyUrl = () => {
    navigator.clipboard.writeText(miniUrl);
  };
  return (
    <div className={styles.container}>
      <Paper elevation={3} className={styles.outputContainer}>
        <div>{!miniUrl ? "Create a MiniURL now!" : "MiniURL"}</div>
        <a href={`${fullUrl}`} target="_blank">
          {miniUrl}
        </a>
        {miniUrl ? (
          <div className={styles.bottomSegment}>
            <Button
              variant="outlined"
              className={styles.copyButton}
              onClick={copyUrl}
            >
              copy
            </Button>
          </div>
        ) : null}
      </Paper>
    </div>
  );
};
export default Output;
