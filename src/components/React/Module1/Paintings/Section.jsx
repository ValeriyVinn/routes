import PropTypes from 'prop-types';
import css from '../../../../components/Layout.module.css';

function Section({ title, children }) {
  return (
    <div>
      {title && <h1 className={css.beautyIsNear}>{title}</h1>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
