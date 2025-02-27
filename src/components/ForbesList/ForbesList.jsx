import ForbesListItem from '../ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css';

const ForbesList = ({ forbes }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbes.map(forbes => (
          <li className={style.item} key={forbes.id}>
            <ForbesListItem forbes={forbes} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForbesList;
