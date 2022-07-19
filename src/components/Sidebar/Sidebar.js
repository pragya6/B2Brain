import { useState } from "react";
import styles from "./Sidebar.module.css";
import icon from "../../assets/b2brainIcon.png";
import ListItems from "../Reusables/ListItems";

const Sidebar = (props) => {
  const astate = props.accState;
  const pstate = props.preState;

  return (
    <div className={styles.sidebar}>
      <header className={styles.header}>
        <img src={icon} alt="B2Brain Icon" />
        <h1>B2Brain</h1>
      </header>
      <section className={styles.sideContent}>
        <ul className={styles.mainItem}>
          <ListItems
            iconStuff={{
              src: "https://img.icons8.com/material-outlined/192/CCCCCC/home--v2.png",
              alt: "Home Icon",
            }}
            aText="Dashboard"
          />
          <ListItems
            iconStuff={{
              src: "https://img.icons8.com/sf-black/64/CCCCCC/star.png",
              alt: "Intels Icon",
            }}
            aText="Intels"
            bNum="4"
            bText="Unread"
          />
          <ListItems
            iconStuff={{
              src: "https://img.icons8.com/material-rounded/24/CCCCCC/person-male.png",
              alt: "Leads Icon",
            }}
            aText="Leads"
            bNum="4"
            bText="Unseen"
          />
          <ListItems
            iconStuff={{
              src: "https://img.icons8.com/fluency-systems-regular/48/CCCCCC/building.png",
              alt: "Account Icon",
            }}
            aText="Accounts"
            collapse="acc"
            onSidePress={props.onIdCheck}
          />
          {astate && (
            <ul className={styles.collapseContent}>
              <li className={styles.collapseItem}>Manage all</li>
              <li className={styles.collapseItem}>Track new accounts</li>
              <li className={styles.collapseItem}>Bulk import</li>
            </ul>
          )}
          <ListItems
            iconStuff={{
              src: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/CCCCCC/external-gear-setting-flatart-icons-outline-flatarticons-1.png",
              alt: "Preferences Icon",
            }}
            aText="Preferences"
            collapse="pre"
            colClass={styles.collapse}
            onSidePress={props.onIdCheck}
          />
          {pstate && (
            <ul className={styles.collapseContent}>
              <li className={styles.collapseItem}>Product Focus</li>
              <li className={styles.collapseItem}>Intel Preferences</li>
              <li className={styles.collapseItem}>Lead Persona</li>
            </ul>
          )}
          <ListItems
            iconStuff={{
              src: "https://img.icons8.com/external-creatype-outline-colourcreatype/64/CCCCCC/external-chain-essential-ui-v3-creatype-outline-colourcreatype-2.png",
              alt: "Integrations Icon",
            }}
            aText="Integrations"
          />
          <ListItems
            iconStuff={{
              src: "https://img.icons8.com/material-rounded/20/CCCCCC/commercial-development-management.png",
              alt: "Team Icon",
            }}
            aText="Team"
          />
          <ListItems
            iconStuff={{
              src: "https://img.icons8.com/external-kosonicon-outline-kosonicon/50/CCCCCC/external-message-chat-messages-kosonicon-outline-kosonicon-17.png",
              alt: "Help/Support Icon",
            }}
            aText="Help/Support"
          />
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
