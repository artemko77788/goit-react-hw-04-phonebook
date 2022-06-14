import s from './Filter.module.css';

function Filter({ filter }) {
  const handleInputChange = e => {
    filter(e.currentTarget.value);
  };

  return (
    <form>
      <label className={s.label}>
        Find contacts by name
        <input type="text" onChange={handleInputChange} className={s.input} />
      </label>
    </form>
  );
}

export default Filter;
