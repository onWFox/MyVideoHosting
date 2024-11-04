import cls from './Search.module.css'

import search from "../../../assets/search.png";

const Search = () => {
  return (
    <div className={cls.search__bar}>
      <input
        className={cls.search__input}
        placeholder="Введите запрос"
        type="search"
      />
      <button className={cls.btn__search__input}>
        <img className={cls.search} src={search} alt="" />
      </button>
    </div>
  );
};

export default Search;
