import React, { useRef } from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./MultiSelect.module.css";


const MultiSelect = ({ options, onListClick }) => {
  const dropdownList = useRef();
  const showDropdown = () => {
    if(!dropdownList.current.style.opacity || dropdownList.current.style.opacity +'' ==="0") {
      dropdownList.current.style.opacity = 1;
    } else {
      dropdownList.current.style.opacity = 0;
    }
  }

  return (
    <div className={styles.multiselect_container}>
      <button onClick={showDropdown} className={styles.multiselect_dropdown}>
        Select users 
        <i className={`${styles.arrow} ${styles.down}`}></i>
      </button>
      <div ref={dropdownList} className={styles.listContainer}>
        {options.map((option) => (
            <div className={styles.listItem} key={option.key}>
              <Checkbox  isChecked={option.isChecked} onListClick={onListClick} label={option.value} id={option.key} />
              </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
