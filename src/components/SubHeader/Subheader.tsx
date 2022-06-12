import { useState } from "react";
import Filter from "../Filter/Filter";
import SubHeaderStyles from "./SubHeaderStyles";

type InHome = {
  checkInHome: boolean;
};

const SubHeader = ({ checkInHome }: InHome): JSX.Element => {
  const [filter, setFilter] = useState(false);

  const openCloseFilter = () => {
    setFilter(!filter);
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
            O/C
          </button>
          {filter && <Filter />}
        </SubHeaderStyles>
      )}
    </>
  );
};

export default SubHeader;
