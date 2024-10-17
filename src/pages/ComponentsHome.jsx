import WordTables from 'components/React/Comps/HiWords/HiWords';
import TongueTwisters from 'components/React/Comps/TongueTwisters/TongueTwisters';
import css from '../pages/ComponentsHome.module.css';

const ComponentsHome = () => {
  return (
    <>
      <h1 className={css.color}>Home</h1>
      <TongueTwisters />
      <WordTables />
    </>
  );
};

export default ComponentsHome;
