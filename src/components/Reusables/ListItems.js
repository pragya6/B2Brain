import styles from "./ListItems.module.css";
import Icon from "./Icon";
import Collapse from "./Collapse";
import Badge from "./Badge";

const ListItems = (props) => {
  const badgeState = props.bNum && props.bText;
  const collapseState = (props.collapse === 'acc' || (props.collapse === 'pre'));

  return (
    <li className={styles.mainListItem}>
      <Icon icon={{ ...props.iconStuff}} />
      <a href="#">{props.aText}</a>
      {badgeState && <Badge num={props.bNum} text={props.bText} />}
      {collapseState && <Collapse
        colState = {props.collapse}
        className={styles.collapse}
        onClick={props.onSidePress}
      />}
    </li>
  );
};

export default ListItems;
