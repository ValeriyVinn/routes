import { Component } from 'react';


class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { dropdownClass, toggleButtonClass, menuClass, children } = this.props;
    return (
      <div className={dropdownClass}>
        <button
          type="button"
          className={toggleButtonClass}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Hide Menu' : 'Show Menu'}
        </button>

        {this.state.visible && (
          
          <div className={menuClass}>
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
