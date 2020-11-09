import React, { useEffect } from "react";
import SearchForm from "./components/SearchForm";
import "./styles.css";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header>
        <SearchForm />
      </header>
      <h1>Super Heroes</h1>
      {props.isLoading ? <h1> Loading ... </h1> : <></>}
      {props.superheroes &&
        props.superheroes.map((sh) => {
          return (
            <div key={sh.id}>
              {sh.name}
              <img src={sh.image.url} />
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.SHR.isLoading,
    superheroes: state.SHR.superheroes
  };
};

export default connect(mapStateToProps, {})(App);
