
import css from './Loader.module.css';
import { InfinitySpin } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div  className={css.Loader}>
      <InfinitySpin 
  width='200'
        color="#a41fdc"
       
/>
    </div>
  );
}

export default Loader;

