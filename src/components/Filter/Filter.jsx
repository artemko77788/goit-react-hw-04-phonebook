import { Component } from 'react';
import s from './Filter.module.css';

class Filter extends Component {
  handleInputChange = e => {
    this.props.filter(e.currentTarget.value);
  };

  render() {
    return (
      <form>
        <label className={s.label}>
          Find contacts by name
          <input
            type="text"
            onChange={this.handleInputChange}
            className={s.input}
          />
        </label>
      </form>
    );
  }
}

export default Filter;
