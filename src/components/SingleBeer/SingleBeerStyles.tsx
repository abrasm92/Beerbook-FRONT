import styled from "styled-components";

const SingleBeerStyles = styled.li`
  list-style: none;
  height: 155px;
  width: 280px;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;

  align-items: center;
  border: none;
  border-bottom: 1px solid #b6b6b6;
  cursor: pointer;

  button {
    background-color: #0d47a1;
    border: none;
    border-radius: 7px;
    color: #fff;
    padding: 7px;
    cursor: pointer;
    margin-left: 90px;
    z-index: 100;
  }

  img {
    width: 60px;
    height: 125px;
    object-fit: contain;
  }

  .beer-info {
    margin-top: -15px;
    padding-left: 25px;
  }

  .beer-info * {
    padding-bottom: 5px;
  }

  h2 {
    font-size: 1rem;
    font-weight: 800;
    width: 180px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  h3 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

export default SingleBeerStyles;
