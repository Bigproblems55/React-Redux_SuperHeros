import React, { useState } from "react";
import { connect } from "react-redux";
import { submitSearch } from "../store/actions";

function SearchForm(props) {
  console.log("PROPS", props);
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(search);
          props.submitSearch(search);
        }}
      >
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      {props.isError ? <p className="error">{props.error}</p> : <></>}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("MSTP", state);
  return {
    isLoading: state.SHR.isLoading,
    isError: state.SHR.isError,
    error: state.SHR.error
  };
};

export default connect(mapStateToProps, { submitSearch })(SearchForm);
