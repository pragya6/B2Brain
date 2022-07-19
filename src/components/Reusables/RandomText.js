import styles from "./RandomText.module.css";
import Container from "./Container";

const RandomText = (props) => {
  return (
    <Container>
      <p className={styles.text}>{props.children}</p>
    </Container>
  );
};

export default RandomText;
