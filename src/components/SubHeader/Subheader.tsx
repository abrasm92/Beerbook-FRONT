import { changeFilterStateActionCreator } from "../../redux/features/beerSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Filter from "../Filter/Filter";
import SubHeaderStyles from "./SubHeaderStyles";

type InHome = {
  checkInHome: boolean;
};

const SubHeader = ({ checkInHome }: InHome): JSX.Element => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.beer);

  const openCloseFilter = () => {
    dispatch(changeFilterStateActionCreator());
  };
  return (
    <>
      {checkInHome && (
        <SubHeaderStyles>
          <p className="subheader--tittle">
            Descubre todo sobre las mejores cervezas del mundo
          </p>
        </SubHeaderStyles>
      )}

      {!checkInHome && (
        <SubHeaderStyles>
          <button onClick={openCloseFilter} className="subHeader--open-filter">
            <img
              src="/images/filter-symbol.svg"
              alt="icono de filtro"
              width={20}
              height={20}
            />
          </button>
          {filter.status && <Filter />}
        </SubHeaderStyles>
      )}
    </>
  );
};

export default SubHeader;
