// import css from '../pagesComponents/PagesMarkUp.module.css'
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';



// class MarkUp extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };

//   render() {
//     return (
//       <div className={css.Dropdown}>
//         <button
//           type="button"
//           className={css.Dropdown__toggle}
//           onClick={this.toggle}
//         >
//           {this.state.visible ? 'Hide' : 'Show'}
//         </button>
        
//         {this.state.visible && 
//         (
//           <ul>
//             <li>
//               <Link>1</Link>
//             </li>
//             <li>
//               <Link>2</Link>
//             </li>
//             <li>
//               <Link>3</Link>
//             </li>
//           </ul>
//         )}
//       </div>
//     );
//   }
// }


const MarkUp = () => {
  return <h1>Html-CSS</h1>
}

export default MarkUp;
