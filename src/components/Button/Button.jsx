import PropTypes from 'prop-types';
import css from './Button.module.css';


export const Button = ({ text, onNextFetch }) => {
    return <button className={css.Button}  onClick={onNextFetch}>{text}</button>
}


