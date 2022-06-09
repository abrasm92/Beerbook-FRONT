import { useState } from "react";
import Filter from "../Filter/Filter";
import SubHeaderStyles from "./SubHeaderStyles";

const SubHeader = (): JSX.Element => {
  const [filter, setFilter] = useState(false);

  const openCloseFilter = () => {
    setFilter(!filter);
  };
  return (
    <SubHeaderStyles>
      {/* <p>Descubre todo sobre las mejores cervezas del mundo</p> */}
      <button onClick={openCloseFilter} className="subHeader--open-filter">
        O/C
      </button>
      {filter && <Filter />}
    </SubHeaderStyles>
  );
};

export default SubHeader;
