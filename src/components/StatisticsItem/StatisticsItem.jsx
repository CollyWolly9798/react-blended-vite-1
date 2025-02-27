import style from './StatisticsItem.module.css';
const StatisticsItem = ({ title, total, icons: Icon }) => {
  return (
    <>
      <Icon size="30" />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
