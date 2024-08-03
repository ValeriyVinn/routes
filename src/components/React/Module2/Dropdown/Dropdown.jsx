import { Component } from 'react';
import css from './Dropdown.module.css';

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
      <div className={css.dropdown}>
        <button
          type="button"
          className={css.dropdown__toggle}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {/* <button type="button" className={css.dropdown__toggle} onClick={this.hide}>
          Hide
        </button> */}

        {this.state.visible && (
          <div className={css.dropdown__menu}>
            Lorem ipsum dolor sit amet consectetur mit adipisicing elit. Veniam
            quos, exercitationem nihil optio sit deserunt. Officiis nemo id,
            unde fugit eaque, odit nostrum aut explicabo eos esse, omnis ratione
            quibusdam? Itaque minus sapiente voluptatibus nemo. Fuga sint quae
            veniam animi autem dolorum? Iste quas, excepturi voluptas laudantium
            laboriosam totam veniam inventore amet suscipit quisquam molestiae
            provident adipisci, rem quidem maxime.
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
