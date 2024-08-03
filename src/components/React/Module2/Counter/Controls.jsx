
import css from './Counter.module.css';


const Controls = ({onDecrement, onIncrement}) => {
    return (<>
    <div className={css.counter__controls}>
          <button type="button" onClick={onDecrement}>
            Decrease by 1{' '}
          </button>
          <button type="button" onClick={onIncrement}>
            Increase by 1{' '}
          </button>
        </div>
    </>)
}

export default Controls