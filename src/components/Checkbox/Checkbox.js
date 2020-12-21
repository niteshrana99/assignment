import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ id, label, onListClick , isChecked}) => {
    const checkBoxChangeHandler = () => {
        onListClick({key:id, value:label})
    }
  return (
    <React.Fragment>
      
      <input checked={isChecked} onChange={checkBoxChangeHandler} className={styles.input_checkbox} id={id} type="checkbox" />
      <label htmlFor={id}>
        <p className={`d-inline-block ${styles.label}`}>{label}</p>
        <span></span>
      </label>
    </React.Fragment>
  );
};

export default Checkbox;
