import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Hide
        </button> */}
        {this.state.visible && 
        // <div className="Dropdown__menu">I want to work</div>
        (
          <ul>
            <li>
              <Link>1</Link>
            </li>
            <li>
              <Link>2</Link>
            </li>
            <li>
              <Link>3</Link>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
