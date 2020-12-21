import React from "react";
import styles from "./Tags.module.css";
const Tags = ({ tags , removeTag}) => {
  return (
    <div>
      <ul>
        {tags.map((tag) => (
          <li key={tag.key} className={styles.pill}>
            {tag.value} <span className={styles.remove_btn} onClick={() => removeTag(tag.key)}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
