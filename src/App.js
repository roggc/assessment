import Layout from "./components/Layout";
import { useFetch } from "./hooks";
import classes from "./App.module.css";
import GameCard from "./components/GameCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const url =
  "https://gist.githubusercontent.com/vbence86/83da491ff9830ad19ac6fa0a10162fc1/raw/d543204847b3d9896f0ce15d244bb89160fe0f86/games.json";

const imgBaseUrl = "https://ambui.betonline.ag/amber";

const App = () => {
  const { data, isError, isLoading, setUrl } = useFetch();

  useEffect(() => {
    setUrl(url);
  }, [setUrl]);

  const getChildren = () => {
    if (isLoading)
      return <div className={classes.contentInfo}>Loading data ...</div>;
    if (isError)
      return (
        <div className={classes.contentInfo}>Error while loading data ...</div>
      );
    return (
      <div className={classes.content}>
        <div className={classes.contentHeader}>
          {data.CategoryGames[0].CategoryName.toUpperCase()} GAMES
        </div>
        <div className={classes.gamesContainer}>
          {data.CategoryGames[0].Popular.map((item) => (
            <GameCard
              name={item.GameName}
              key={item.GameName}
              img={imgBaseUrl + item.ImageUrlGame}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout
      header={
        <div className={classes.header}>
          <span className={classes.red}>BET</span>
          <span className={classes.white}>ONLINE</span>
        </div>
      }
      footer={
        <div className={classes.footer}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      }
    >
      {getChildren()}
    </Layout>
  );
};

export default App;
