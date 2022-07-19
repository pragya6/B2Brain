import styles from './AccountItems.module.css';
import logos from '../../assets/Logo.png';

const AccountItems = (props) => {
  return <div className={styles.items}>
    <img src={props.logo ? props.logo : logos} alt="Logo" />
    <div>
      <p>{props.company}</p>
      <p>{props.website}</p>
    </div>
    <button>Track</button>
  </div>
};

export default AccountItems;