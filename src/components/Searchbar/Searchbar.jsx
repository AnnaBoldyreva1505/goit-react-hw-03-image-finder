import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class SearchBar extends Component {
  state = {
    search: '',
    images: [],
  };

  onFormSubmitHandler = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      return toast.warn("Enter your request");
      
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  changeHandler = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.onFormSubmitHandler}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            value={this.state.search}
            onChange={this.changeHandler}
            name="searchInput"
            className={css.searchFormInput}
            type="text"
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
SearchBar.protoTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar
