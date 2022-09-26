import React, { useRef } from "react";
import styles from "../SectionItem/styles.module.scss";
import ReactQuill, { Quill } from "react-quill";
import { getRandomColor } from "../../helpers/helpers";

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

const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();

const Editor = ({ id, infoText, setInfoText, isEditMode }) => {
  const refEditor = useRef(null);
  const unId = `toolbar-${id}`;

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
        <div className={styles.quill}>
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
      </div>
      {isEditMode && (
        <div className={styles.editor_variables}>
          <p className={styles.editor_variables_text}>
            Кликните, чтобы вставить переменную в текст
          </p>
          <div className={styles.variables}>
            <VariableItem
              addVariable={addVariable}
              title={"beneficiary.inn"}
              color={color1}
            />
            <VariableItem
              addVariable={addVariable}
              title={"order.sumt"}
              color={color2}
            />
            <VariableItem
              addVariable={addVariable}
              title={"principal.inn"}
              color={color3}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Editor;