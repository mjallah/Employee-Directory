import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <div className="search-form">
                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Employee Name"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit} className="btn btn-secondary">
                        Search
          </button>
                </div>
                <button className="btn btn-secondary sortBtn" href="#" onClick={props.sortByNameAZ}>Sort A-Z</button>
                <button className="btn btn-secondary sortBtn" href="#" onClick={props.sortByNameZA}>Sort Z-A</button>
            </div>
        </form>
    );
}

export default SearchForm;