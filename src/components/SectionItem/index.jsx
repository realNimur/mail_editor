import React, { useState } from "react";
import EditButton from "../EditButton";
import ApproveButton from "../ApproveButton";
import styles from "./styles.module.scss";
import SaveButton from "../SaveButton";

const SectionItem = () => {
  const [isEditMode, setEditMode] = useState(false);

  return (
    <div className={styles.section_item}>
      <div className={styles.section_left}>
        <p className={styles.section_text}>
          1. Настоящая независимая гарантия обеспечивает исполнение принципалом
          его обязательств по заключению контракта с бенефициаром (в случае
          признания принципала в соответствии с Федеральным законом от
          05.04.2013 го № 44-ФЗ "О контрактной системе в сфере закупок товаров,
          работ, услуг для обеспечения государственных и муниципальных нужд"
          (далее - Федеральный закон) победителем определения поставщика
          (подрядчика, исполнителя) или иным участником закупки, с которым по
          результатам определения поставщика (подрядчика, исполнителя)
          заключается контракт).
        </p>
      </div>
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
