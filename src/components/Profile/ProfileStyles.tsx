import styled from "styled-components";

const ProfileStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    height: 100%;

    overflow: hidden;
    border: none;
    padding: 0 20px 20px 20px;

    p {
      font-size: 0.8rem;
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
      cursor: pointer;
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
  }

  @media screen and (min-width: 600px) {
    min-width: 400px;
    width: 80%;
    max-width: 640px;

    .profile {
      min-width: 400px;
      width: 80%;
      max-width: 640px;
    }

    .profile--lists {
      margin-top: 30px;
      padding-bottom: 20px;
      min-width: 320px;
      width: 80%;
      max-width: 500px;

      h3 {
        font-size: 1rem;
      }
      border-bottom: 1px solid #b6b6b6;
    }
  }
`;

export default ProfileStyles;
