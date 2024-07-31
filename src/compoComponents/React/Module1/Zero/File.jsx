import css from './File.module.css'

const File = ({example}) => {
  const { brand, color, price } = example;

  return (
    <div className={css.cards}>
      <h5>{brand}</h5>
      <p>Color: {color}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default File;
