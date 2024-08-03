import File from './File';
import css from './StackOfFiles.module.css'

const StackOfFiles = ({ cars }) => {
  return (
    <div className={css.container}>
      {cars.map((car, index) => (
        <File key={index} example={car} />
      ))}
    </div>
  );
}

export default StackOfFiles;
