import { useState } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const search = "https://img.icons8.com/android/24/7c7777/search.png";
  const cross = "https://img.icons8.com/ios-glyphs/30/7c7777/multiply.png";

  const [iconCross, setIconCross] = useState(false);
  const [val, setVal] = useState("");

  const clickHandler = () => {
    setIconCross(true);
    props.onSearchClick(true);
  };

  const changeHandler = (event) => {
    setVal(event.target.value);
    props.setQuery(event.target.value)
    props.onSearch();
  };

  const crossClickHandler = () => {
    if (iconCross) {
      setIconCross(false);
      setVal("");
      props.setQuery("");
      props.onSearchClick(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
          <img
            src={!iconCross ? search : cross}
            alt="Search Icon"
            onClick={crossClickHandler}
          />
          <input
            value={val}
            placeholder="Search by account name or website"
            onClick={clickHandler}
            onChange={changeHandler}
          />{" "}
      </div>
      <img
        src="https://img.icons8.com/material-rounded/24/7c7777/bell--v2.png"
        alt="Bell Icon"
      />
    </header>
  );
};

export default Header;
