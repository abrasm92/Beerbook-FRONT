import styled from "styled-components";

const DetailBeerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  height: 100%;
  min-width: 280px;
  width: 80%;
  max-width: 400px;
  margin-top: 20px;
  overflow: hidden;
  border: none;

  .detail-beer--general-info {
    display: flex;
    align-items: flex-start;
  }

  .detail-beer--description {
    padding: 50px 30px;
  }

  p {
    font-size: 0.9rem;
    padding-bottom: 10px;
  }

  .beer-info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;

    img {
      width: 50px;
      height: 50px;
      padding: 10px;
      margin-bottom: 20px;
    }
    h2 {
      text-align: right;
      font-size: 1.3rem;
      font-weight: 800;
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
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    width: 300px;
    align-self: center;
  }

  button {
    background-color: #0d47a1;
    border: none;
    border-radius: 7px;
    color: #fff;
    padding: 7px;
    cursor: pointer;
    margin: 0px 10px;
    margin-bottom: 20px;
  }

  img {
    width: 120px;
    height: 250px;
    object-fit: contain;
    overflow: hidden;
    margin-right: 20px;
    margin-left: 30px;
  }

  @media screen and (min-width: 600px) {
    min-width: 400px;
    width: 80%;
    max-width: 640px;

    p {
      font-size: 1.1rem;
      padding-bottom: 10px;
    }

    .detail-beer--general-info {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .beer-info {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-end;

      img {
        width: 70px;
        height: 70px;
      }
      h2 {
        text-align: right;
        font-size: 1.3rem;
      }
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 1.1rem;
        padding-bottom: 10px;
      }
    }

    .detail-beer--general-info {
      display: flex;
      align-items: flex-start;
      align-self: center;
    }

    .detail-beer--buttons {
      display: flex;
      justify-content: space-around;
      margin-bottom: 30px;
      width: 300px;
    }

    img {
      width: 180px;
      height: 375px;
      object-fit: contain;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 800px) {
    min-width: 600px;
    width: 80%;
    max-width: 900px;

    p {
      font-size: 1.3rem;
      padding-bottom: 10px;
    }

    .detail-beer--general-info {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .beer-info {
      img {
        width: 90px;
        height: 90px;
      }
      h2 {
        text-align: right;
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.4rem;
      }
      p {
        font-size: 1.3rem;
        padding-bottom: 10px;
      }
    }

    img {
      width: 240px;
      height: 500px;
      object-fit: contain;
      overflow: hidden;
    }
  }
`;

export default DetailBeerStyles;
