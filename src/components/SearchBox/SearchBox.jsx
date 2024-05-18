import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchbox}>
      <p className={css.searchfield}>Find contact by name</p>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
