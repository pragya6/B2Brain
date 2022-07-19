import styles from "./Main.module.css";
import Container from '../Reusables/Container';
import bg from "../../assets/main-image.png";
import global from '../../assets/globalsupports.png';
import cust from '../../assets/customers.png';

const Main = () => {
  return (
    <Container >
      <img className={styles.img} src={bg} alt="Hero Image" />
      <img className={styles.img} src={global} alt="Support Image" />
      <img className={styles.img} src={cust} alt="Customer Image" />
    </Container>
  );
};

export default Main;
