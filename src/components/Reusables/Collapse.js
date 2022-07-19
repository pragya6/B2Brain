import { useState } from "react";
import Icon from "./Icon";
import styles from "./Collapse.module.css";

const Collapse = (props) => {
  const [click, setClick] = useState(false);

  const clickHandler = (event) => {
      setClick(prevClick => !prevClick);
      props.onClick([!click, event.currentTarget.id]);
  };

  return (
    <button
    id={props.colState}
      className={`${styles.collapse} ${props.className}`}
      onClick={clickHandler}
    >
      <Icon
        className={styles.icon}
        icon={{
          src: "https://img.icons8.com/external-those-icons-fill-those-icons/24/CCCCCC/external-down-arrows-those-icons-fill-those-icons-1.png",
          alt: "Collapse",
        }}
      />
    </button>
  );
};

export default Collapse;
