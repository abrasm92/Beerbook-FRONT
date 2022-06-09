import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { filterBeerThuk } from "../../redux/thunks/beerThunks";
import FilterStyles from "./FilterStyles";

const Filter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const initialStateFilter = {
    filterType: "style",
    filterValue: "Lager",
  };
  const [filterCategory, setFilterCategory] = useState(initialStateFilter);

  const changeFilterType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "style":
        setFilterCategory({
          ...filterCategory,
          [event.target.name]: event.target.value,
          filterValue: "Lager",
        });
        break;
      case "country":
        setFilterCategory({
          ...filterCategory,
          [event.target.name]: event.target.value,
          filterValue: "Escocia",
        });
        break;
      case "degrees":
        setFilterCategory({
          ...filterCategory,
          [event.target.name]: event.target.value,
          filterValue: "0-5",
        });
        break;
      case "IBU":
        setFilterCategory({
          ...filterCategory,
          [event.target.name]: event.target.value,
          filterValue: "0-20",
        });
        break;
      default:
        return;
    }
  };

  const changeFilterValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCategory({
      ...filterCategory,
      [event.target.name]: event.target.value,
    });
  };

  const submitFilter = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      filterBeerThuk(filterCategory.filterType, filterCategory.filterValue, 1)
    );
  };

  return (
    <FilterStyles>
      <section className="filter">
        <label htmlFor="" className="categories">
          <select
            name="filterType"
            className="categories--options"
            onChange={changeFilterType}
            defaultValue={filterCategory.filterType}
          >
            <option value="style">Estilo</option>
            <option value="country">País</option>
            <option value="degrees">Grados</option>
            <option value="IBU">IBU</option>
          </select>
        </label>
        <label htmlFor="" className="values">
          {filterCategory.filterType === "style" && (
            <select
              name="filterValue"
              className="values--options"
              onChange={changeFilterValue}
            >
              <option value="Lager">Lager</option>
              <option value="Porter">Porter</option>
              <option value="Blonde">Blonde</option>
              <option value="Red Ale">Red Ale</option>
            </select>
          )}
          {filterCategory.filterType === "country" && (
            <select
              name="filterValue"
              className="values--options"
              onChange={changeFilterValue}
            >
              <option value="Escocia">Escocia</option>
              <option value="EEUU">EEUU</option>
              <option value="España">España</option>
              <option value="Bélgica">Bélgica</option>
              <option value="Japon">Japon</option>
              <option value="Italia">Italia</option>
            </select>
          )}
          {filterCategory.filterType === "degrees" && (
            <select
              name="filterValue"
              className="values--options"
              onChange={changeFilterValue}
            >
              <option value="5">0-5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11-30</option>
            </select>
          )}
          {filterCategory.filterType === "IBU" && (
            <select
              name="filterValue"
              className="values--options"
              onChange={changeFilterValue}
            >
              <option value="0">0-20</option>
              <option value="20">21-40</option>
              <option value="40">41-60</option>
              <option value="60">61-80</option>
              <option value="80">81-100</option>
            </select>
          )}
        </label>
        <button onClick={submitFilter}>Filtrar</button>
      </section>
    </FilterStyles>
  );
};

export default Filter;
