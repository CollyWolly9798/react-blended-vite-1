import style from './ForbesListItem.module.css';
import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';

const ForbesListItem = ({ forbes }) => {
  return (
    <>
      <img className={style.avatar} src={forbes.avatar} alt={name} />
      <h3 className={style.title}>{forbes.name}</h3>
      <span className={style.capital}>
        {forbes.capital} <BiDollarCircle color="#2196f3" size={22} />
        {forbes.isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};

export default ForbesListItem;
