import React, { useRef } from "react";
import styles from "../SectionItem/styles.module.scss";
import ReactQuill, { Quill } from "react-quill";

const Embed = Quill.import("blots/embed");

class QuillHashtag extends Embed {
  static create({ value, style }) {
    let node = super.create(value);

    node.setAttribute("style", style);
    node.innerHTML = value;
    return node;
  }
}

QuillHashtag.blotName = "hashtag";
QuillHashtag.className = "quill-hashtag";
QuillHashtag.tagName = "span";

Quill.register({
  "formats/hashtag": QuillHashtag,
});

const VariableItem = ({ title, addVariable, color }) => {
  const handleClick = () => addVariable(title, color);

  return (
    <button
      type={"button"}
      className={styles.variable}
      style={{ color }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

const Editor = ({
  id,
  infoText,
  setInfoText,
  isEditMode,
  status,
  hasDelete,
}) => {
  const refEditor = useRef(null);
  const unId = `toolbar-${id}`;
  const isApprove = status === "approve";
  const isEdit = status === "edit";

  const addVariable = (text, color = "#000") => {
    if (refEditor.current?.selection?.index > -1) {
      const quill = refEditor.current?.getEditor();
      quill.insertEmbed(refEditor.current.selection.index, "hashtag", {
        value: text,
        style: `color: ${color}`,
      });
    }
  };

  return (
    <>
      <div
        className={`${styles.text_editor} ${
          isEditMode ? "can_edit" : "no_edit"
        }`}
      >
        <div className={`${styles.quill} ${hasDelete ? "quill_delete" : ""}`}>
          <div
            id={unId}
            style={{
              display: isEditMode ? "flex" : "none",
              alignItems: "center",
            }}
          >
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button style={{ color: "rgba(0,0,0,.2)" }}> |</button>
            <select className="ql-align ql-expanded" />
          </div>
          <ReactQuill
            readOnly={!isEditMode}
            ref={refEditor}
            theme="snow"
            value={infoText}
            onChange={setInfoText}
            modules={{
              toolbar: {
                container: `#${unId}`,
              },
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "indent",
              "align",
              "hashtag",
            ]}
          />
        </div>
        {!isEditMode && (
          <div className="format">
            <p className="format__name">Текст</p>
            {!hasDelete && (
              <div
                className={`format__status ${isApprove ? "approve" : ""} ${
                  isEdit ? "edit" : ""
                }`}
              >
                <span className={"status__icon"} />
                <p className={"status__name"}>
                  {isApprove && "Согласован"}
                  {isEdit && "Отредактирован"}
                </p>
              </div>
            )}
          </div>
        )}
        {isEditMode && (
          <div className={styles.editor_variables}>
            <p className={styles.editor_variables_text}>
              Кликните, чтобы вставить переменную в текст
            </p>
            <div className={styles.variables}>
              <VariableItem
                addVariable={addVariable}
                title={"beneficiary.inn"}
                color={"#74CDE0"}
              />
              <VariableItem
                addVariable={addVariable}
                title={"order.sumt"}
                color={"#A0DD70"}
              />
              <VariableItem
                addVariable={addVariable}
                title={"principal.inn"}
                color={"#D470DD"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Editor;
