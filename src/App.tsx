import s from "./App.module.scss";
import loader from "./assets/img/loader.gif";
import { Collection } from "./features/Collection";
import { Header } from "./features/Header";
import { useAppSelector } from "./hooks";

const App = () => {
  const { isLoaded } = useAppSelector(state => state.movies);
  const { status } = useAppSelector(state => state.app);
  return (
    <div className={s.app}>
      <Header />
      <div className={s.appContainer}>
        <div className={s.container}>
          {status === "loading" && (
            <div className={s.loader}>
              <img style={{ marginTop: "50px" }} src={loader} alt="loader" />
            </div>
          )}
          {isLoaded && <Collection />}
        </div>
      </div>
    </div>
  );
};

export default App;
