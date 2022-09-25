import React, { useState } from "react";
import EditButton from "../EditButton";
import ApproveButton from "../ApproveButton";
import SaveButton from "../SaveButton";
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.scss";
import Editor from "../Editor";

const SectionItem = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [infoText, setInfoText] = useState("Настоящая");

  return (
    <div className={styles.section_item}>
      <Editor
        infoText={infoText}
        setInfoText={setInfoText}
        isEditMode={isEditMode}
      />
      <div className={styles.section_buttons}>
        {isEditMode ? (
          <SaveButton onClick={() => setEditMode(false)} />
        ) : (
          <>
            <EditButton
              style={{ marginBottom: " 16px" }}
              onClick={() => setEditMode(true)}
            />
            <ApproveButton />
          </>
        )}
      </div>
    </div>
  );
};

export default SectionItem;
