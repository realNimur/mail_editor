import React, { useState } from "react";
import EditButton from "../EditButton";
import ApproveButton from "../ApproveButton";
import SaveButton from "../SaveButton";
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.scss";
import Editor from "../Editor";
import OrderButtons from "../OrderButtons/OrderButtons";
import Params from "../Params";

const SectionItem = ({
  id,
  type,
  infoText,
  file,
  setInfoText,
  isApprove,
  setApprove,
  upInOrder,
  downInOrder,
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const isTextSection = type === "text";
  const isDocumentsSection = type === "document";

  const getFormatFile = (fileName) => {
    const array = fileName.split(".");
    return array[array.length - 1].toUpperCase();
  };

  return (
    <>
      <div className={styles.section_item}>
        {isTextSection && (
          <Editor
            id={id}
            infoText={infoText}
            setInfoText={setInfoText}
            isEditMode={isEditMode}
          />
        )}
        {isDocumentsSection && file && (
          <div className={"no_edit"} style={{ width: "100%", padding: "16px" }}>
            <div className={styles.file}>
              <div className={styles.header}>
                <p className={styles.text}>{getFormatFile(file.name)}</p>
              </div>
              <p className={styles.name}>{file.name}</p>
            </div>
          </div>
        )}

        <div className={styles.section_buttons}>
          {isEditMode ? (
            <SaveButton onClick={() => setEditMode(false)} />
          ) : (
            <>
              <EditButton
                style={{ marginBottom: " 16px" }}
                onClick={() => setEditMode(true)}
              />
              <ApproveButton
                isApprove={isApprove}
                setApprove={setApprove}
                style={{ marginBottom: " 16px" }}
              />
              <div className={styles["order-buttons"]}>
                <OrderButtons
                  id={id}
                  upInOrder={upInOrder}
                  downInOrder={downInOrder}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {isEditMode && (
        <Params
          title={
            <p
              style={{
                marginTop: "30px",
                color: "#151515",
                fontSize: "16px",
                fontWeight: 500,
                marginBottom: 8,
              }}
            >
              Параметры блока
            </p>
          }
        />
      )}
    </>
  );
};

export default SectionItem;
