import css from '../compoComponents/LayoutComponents.module.css';

const DropdownMarkup = () => {
  return (
    <div>
      <ul className={css.hidden__menu}>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
      </ul>
    </div>
  );
};

export default DropdownMarkup;
