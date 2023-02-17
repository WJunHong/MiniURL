import React from "react";
import styles from "./Output.module.css";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// Output display of MiniUrl
const Output = ({ miniUrl, fullUrl }) => {
  // Copies the miniUrl to clipboard for user to easily paste into search bar
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
