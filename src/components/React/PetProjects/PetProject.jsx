// import css from '../../../components/Layout.module.css';
import { Link, Outlet } from 'react-router-dom';
import Dropdown from '../Comps/Dropdown/Dropdown';
import stylesB from '../PetProjects/PetProject.module.css'



const PetProject = () => {
  return (

    <div>
      
      <h2>Pet Projects</h2>
      <Dropdown
        dropdownClass={stylesB.dropdown}
        toggleButtonClass={stylesB.dropdown__toggle}
        menuClass={stylesB.dropdown__menu}
      >
        <ul>
          <li>
            <Link to="violets">Violets</Link>
          </li>
          <li>
            <Link to="psychology">Psychology</Link>
          </li>
          <li>
            <Link to="#">Houses</Link>
          </li>
          <li>
            <Link to="#">Children</Link>
          </li>
          <li>
            <Link to="#">Languages</Link>
          </li>
          <li>
            <Link to="#">Food</Link>
          </li>
        </ul>

      </Dropdown>
      
        <div >
        <Outlet />
      </div>
      
    </div>
  );
};

export default PetProject;
