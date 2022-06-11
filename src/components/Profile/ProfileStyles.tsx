import styled from "styled-components";

const ProfileStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: none;
    height: 100%;
    min-width: 280px;
    width: 80%;
    max-width: 400px;
    overflow: hidden;
    border: none;
    padding: 0 20px 20px 20px;

    p {
      font-size: 1rem;
      padding-bottom: 10px;
    }

    button {
      background-color: #0d47a1;
      border: none;
      border-radius: 7px;
      color: #fff;
      padding: 7px;
      cursor: pointer;
    }

    .profile--main-info {
      display: flex;
      margin-bottom: 15px;
      h2 {
        font-size: 1rem;
        margin-bottom: 10px;
      }
      img {
        margin-right: 30px;
        width: 100px;
        height: 100px;
        object-fit: contain;
        border-radius: 20px;
      }
    }

    .profile--edit {
      font-weight: 700;
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    .profile--lists {
      margin-top: 30px;
      padding-bottom: 20px;
      width: 230px;
      h3 {
        font-size: 1rem;
      }
      border-bottom: 1px solid #b6b6b6;
    }

    .profile--lists * {
      margin-top: 10px;
    }

    .profile--button-add-beer {
      font-size: larger;
      margin: 0 auto;
      margin-top: 140px;
      margin-bottom: 20px;
    }
  }
`;

export default ProfileStyles;
