//Podcast Page
import baconsale from "../img/baconsale.png";

export const Podcast = () => {
  return (
    <div className="App-header">
      <h1>Check Out My Podcast!</h1>
      <br></br>
      <img src={baconsale} alt="Baconsale" height="450" />
      <br></br>
      <a className="btn btn-primary" href="https://baconsale.com/">
        Baconsale
      </a>
    </div>
  );
};
