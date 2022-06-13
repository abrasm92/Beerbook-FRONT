import { useState } from "react";
import {
  changeFilterTypeActionCreator,
  changeFilterValueActionCreator,
} from "../../redux/features/beerSlice";
import { useAppDispatch } from "../../redux/hooks";
import { filterBeerThunk } from "../../redux/thunks/beerThunks";
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
          filterValue: "NA",
        });
        break;
      case "IBU":
        setFilterCategory({
          ...filterCategory,
          [event.target.name]: event.target.value,
          filterValue: "0",
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
    dispatch(changeFilterTypeActionCreator(filterCategory.filterType));
    dispatch(changeFilterValueActionCreator(filterCategory.filterValue));
  };

  const submitFilter = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(
      filterBeerThunk(filterCategory.filterType, filterCategory.filterValue, 1)
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
            data-testid="filterType"
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
              data-testid="filterValue-style"
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
              data-testid="filterValue-country"
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
              data-testid="filterValue-degrees"
            >
              <option value="NA">Sin Alcohol</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          )}
          {filterCategory.filterType === "IBU" && (
            <select
              name="filterValue"
              className="values--options"
              onChange={changeFilterValue}
              data-testid="filterValue-IBU"
            >
              <option value="0">0-9</option>
              <option value="10">10-19</option>
              <option value="20">20-29</option>
              <option value="30">30-39</option>
              <option value="40">40-49</option>
              <option value="50">50-59</option>
              <option value="60">60-69</option>
              <option value="70">70-79</option>
              <option value="80">80-89</option>
              <option value="90">90-100</option>
            </select>
          )}
        </label>
        <button onClick={submitFilter}>Filtrar</button>
      </section>
    </FilterStyles>
  );
};

export default Filter;
