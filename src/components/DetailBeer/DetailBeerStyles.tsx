import styled from "styled-components";

const DetailBeerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  height: 100%;
  width: 280px;
  margin-top: 20px;
  overflow: hidden;

  border: none;

  .detail-beer--general-info {
    display: flex;
  }

  .detail-beer--description {
    padding: 50px 10px;
  }
  p {
    font-size: 0.9rem;
    padding-bottom: 10px;
  }

  .beer-info {
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    justify-content: start;
    align-items: flex-end;

    img {
      width: 40px;
      height: 40px;
      padding: 0;
      margin-right: 30px;
      margin-bottom: 20px;
    }
    h2 {
      text-align: right;
      font-size: 1.3rem;
      font-weight: 800;
      width: 180px;
      text-overflow: ellipsis;
      padding-bottom: 10px;
    }
    h3 {
      font-size: 1rem;
      padding-bottom: 10px;
      text-align: right;
    }

    p {
      font-size: 0.8rem;
      padding-bottom: 10px;
      text-align: right;
    }
  }

  .beer-info * {
    padding-right: 30px;
  }

  .detail-beer--buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
  button {
    background-color: #0d47a1;
    border: none;
    border-radius: 7px;
    color: #fff;
    padding: 7px;
    cursor: pointer;
    margin: 0px 10px;
  }

  img {
    width: 120px;
    height: 250px;
    object-fit: contain;
    overflow: hidden;
  }
`;

export default DetailBeerStyles;
