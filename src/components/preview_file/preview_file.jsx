import React, { memo } from "react";
import styles from "./preview_file.module.css";
const PreviewFile = ({ contents }) => {
  return (
    <div className={styles.previewFile}>
      <p className={styles.title}>file preview</p>
      <div className={styles.contents}>
        <pre className={styles.code}>{contents && contents}</pre>
      </div>
    </div>
  );
};

export default PreviewFile;
