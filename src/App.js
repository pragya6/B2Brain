import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Accounts from "./components/Main/Accounts";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import useFetch from "./hook/useFetch";

function App() {
  const [accShow, setAccShow] = useState(false);
  const [preShow, setPreShow] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [q, setQ] = useState("");
  const { error, items, isLoading, getData } = useFetch();

  const checkHandler = ([clickResult, idRcvd]) => {
    if (idRcvd === "acc") {
      setAccShow(clickResult);
    } else if (idRcvd === "pre") {
      setPreShow(clickResult);
    }
  };

  const searchHandler = (state) => {
    setShowAccount(state);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Sidebar onIdCheck={checkHandler} accState={accShow} preState={preShow} />
      <Header
        onSearchClick={searchHandler}
        onSearch={getData}
        setQuery={setQ}
      />
      {!showAccount && <Main />}
      {showAccount && !error && <Accounts items={items} query={q} />}
      {showAccount && error && <p>{error}</p>}
      {showAccount && isLoading && 
      <p>Loading...</p>
      }
    </>
  );
}

export default App;
