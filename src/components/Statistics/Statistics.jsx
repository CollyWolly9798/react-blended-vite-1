import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ stats }) => {
  const icons = {
    1: FaRegThumbsUp,
    2: MdPeople,
    3: MdOutlineProductionQuantityLimits,
    4: GiTreeDoor,
  };
  return (
    <>
      <h3 className={style.title}>Main Statistics</h3>
      <ul className={style.list}>
        {stats.map(({ id, title, total }) => (
          <li className={style.item} key={id}>
            <StatisticsItem title={title} total={total} icons={icons[id]} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
