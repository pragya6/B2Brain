import Container from "../Reusables/Container";
import AccountItems from "./AccountItems";
import styles from "./Accounts.module.css";

const Accounts = (props) => {
  let dataList;

  if(props.items){
    dataList = (props.items
    .filter((item) => {
      if (props.query === "") {
        return item;
      } else if (item.company.toLowerCase().includes(props.query.toLowerCase())) {
        return item;
      }else if (item.website.includes(props.query.toLowerCase())) {
        return item;
      }
    })
    .map((item) => {
      return (
        <AccountItems
          key={item.id}
          slug={item.slug}
          company={item.company}
          logo={item.logo}
          website={item.website}
        />
      );
    }));
  };
  return (
    <Container>
      <div className={styles.flexContainer}>
        <div className={styles.firstFlex}>
          <h2>Similar Accounts</h2>
          <div className={styles.gridContainer}>
            {dataList.length>0 ? dataList : <h2>No Match Found!!</h2>}
          </div>
        </div>
        <div className={styles.quick}>
          <ul>
            <li>
              <h2>Quick Actions</h2>
            </li>
            <li>Track New Account</li>
            <li>Bulk Track Accounts</li>
            <li>Manage Accounts</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Accounts;
