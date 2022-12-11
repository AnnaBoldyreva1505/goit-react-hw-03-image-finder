import css from './Button.module.css';


export const Button = ({ text, nextPage }) => {
    return <button className={css.Button}  onClick={nextPage}>{text}</button>
}


