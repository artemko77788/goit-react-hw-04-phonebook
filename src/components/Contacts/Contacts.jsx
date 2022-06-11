import PropTypes from 'prop-types';
import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import s from './Contacts.module.css';

const Contacts = ({ data, findId }) => {
  return (
    <ul className={s.list}>
      {data.map(el => {
        const { name, id, number } = el;

        return (
          <li key={id} className={s.item}>
            <span>{name}</span>: <span>{number}</span>
            <button key={id} onClick={() => findId(id)} className={s.btn}>
              <BiArrowBack className={s.arrow} />
              <GrBasket />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  findId: PropTypes.func.isRequired,
};

export default Contacts;
