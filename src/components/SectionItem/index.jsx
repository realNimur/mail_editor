import React, { useState } from "react";
import EditButton from "../EditButton";
import ApproveButton from "../ApproveButton";
import SaveButton from "../SaveButton";
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.scss";
import Editor from "../Editor";
import OrderButtons from "../OrderButtons/OrderButtons";
import Params from "../Params";
import DeleteButton from "../DeleteButton";
import ReturnButton from "../ReturnButton";
import AddLibButton from "../AddLibButton";

const SectionItem = ({
  id,
  type,
  infoText,
  status,
  file,
  role,
  setInfoText,
  order,
  hasDelete,
  isApprove,
  handleDelete,
  handleReturn,
  setApprove,
  upInOrder,
  downInOrder,
  addToTemplate,
}) => {
  const isManager = role === "manager";
  const [isEditMode, setEditMode] = useState(false);
  const isTextSection = type === "text";
  const isDocumentsSection = type === "document";

  const getFormatFile = (fileName) => {
    const array = fileName.split(".");
    return array[array.length - 1].toUpperCase();
  };

  return (
    <>
      <div className={styles.order}>{order + 1}.</div>
      <div
        className={`${styles.section_item} ${
          hasDelete ? styles.section_item_delete : ""
        }`}
      >
        {isTextSection && (
          <Editor
            id={id}
            status={status}
            infoText={infoText}
            hasDelete={hasDelete}
            setInfoText={setInfoText}
            isEditMode={isEditMode}
          />
        )}
        {isDocumentsSection && file && (
          <div className={styles.file_wrapper}>
            <div className={styles.file}>
              <div className={styles.header}>
                <p className={styles.text}>{getFormatFile(file.name)}</p>
              </div>
              <p className={styles.name}>{file.name}</p>
            </div>
            <div className="format">
              <p className="format__name">Файл</p>
            </div>
          </div>
        )}

        <div className={styles.section_buttons}>
          {hasDelete ? (
            <ReturnButton onClick={() => handleReturn(id)} />
          ) : (
            <>
              {isEditMode ? (
                <SaveButton onClick={() => setEditMode(false)} />
              ) : (
                <>
                  <div className={styles.section_buttons_wrapper}>
                    <div>
                      <EditButton
                        style={{ marginBottom: " 16px" }}
                        onClick={() => setEditMode(true)}
                      />
                      {!isManager && (
                        <ApproveButton
                          isApprove={isApprove}
                          setApprove={setApprove}
                          style={{ marginBottom: " 16px" }}
                        />
                      )}
                      <div className={styles["hide-buttons"]}>
                        <OrderButtons
                          id={id}
                          upInOrder={upInOrder}
                          downInOrder={downInOrder}
                          style={{ marginBottom: " 16px" }}
                        />
                        {isManager && (
                          <AddLibButton
                            onClick={() =>
                              addToTemplate({
                                id,
                                type,
                                text: infoText,
                                status,
                                isApprove: false,
                                hasDelete: false,
                              })
                            }
                          />
                        )}
                      </div>
                    </div>
                    <div className={styles["hide-buttons"]}>
                      <DeleteButton handleDelete={() => handleDelete(id)} />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {isTextSection && isEditMode && (
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
