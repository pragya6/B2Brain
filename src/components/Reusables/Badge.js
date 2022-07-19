import styles from './Badge.module.css';

const Badge = (props) => {
  return <div className={styles.badge}> 
    <span>{props.num}</span>
    <span>{props.text}</span>
  </div>
};

export default Badge;