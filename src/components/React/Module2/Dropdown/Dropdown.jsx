// import { Component } from 'react';
import Dropdown from "../../Comps/Dropdown/Dropdown";
import stylesA from './Dropdown.module.css';

function ExampleA() {
  return (
    <Dropdown
      dropdownClass={stylesA.dropdown}
      toggleButtonClass={stylesA.dropdown__toggle}
      menuClass={stylesA.dropdown__menu}
    />
  );
}

export default ExampleA

// class Dropdown extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };



//   render() {
//     const { dropdownClass, toggleButtonClass, menuClass } = this.props;
//     return (
//       <div className={dropdownClass}>
//         <button
//           type="button"
//           className={toggleButtonClass}
//           onClick={this.toggle}
//         >
//           {this.state.visible ? 'Hide Menu' : 'Show Menu'}
//         </button>
       

//         {this.state.visible && (
          
//           <div className={menuClass}>
//             Lorem ipsum dolor sit amet consectetur mit adipisicing elit. Veniam
//             quos, exercitationem nihil optio sit deserunt. Officiis nemo id,
//             unde fugit eaque, odit nostrum aut explicabo eos esse, omnis ratione
//             quibusdam? Itaque minus sapiente voluptatibus nemo. Fuga sint quae
//             veniam animi autem dolorum? Iste quas, excepturi voluptas laudantium
//             laboriosam totam veniam inventore amet suscipit quisquam molestiae
//             provident adipisci, rem quidem maxime.
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Dropdown;
