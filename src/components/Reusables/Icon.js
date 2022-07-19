import styles from './Icon.module.css';

const Icon = (props) => {
  return <img className={`${styles.icon} ${props.className ? props.className : ""}`} {...props.icon}/>
};

export default Icon;