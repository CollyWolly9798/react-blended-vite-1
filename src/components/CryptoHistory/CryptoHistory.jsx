import { format } from 'date-fns';

import styles from './CryptoHistory.module.css';

const CryptoHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>№</th>
          <th className={styles.th}>PRICE</th>
          <th className={styles.th}>AMOUNT</th>
          <th className={styles.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, index) => {
          return (
            <tr className={styles.tr} key={id}>
              <td className={styles.td}>{index + 1}</td>
              <td className={styles.td}>{price}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{format(new Date(date), 'Pp')}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
