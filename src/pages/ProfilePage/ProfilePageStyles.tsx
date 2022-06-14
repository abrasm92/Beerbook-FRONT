import styled from "styled-components";

const ProfilePageStyles = styled.section`
  display: flex;
  padding-top: 30px;
  margin: 100px auto;
  border: 1px solid #b6b6b6;
  min-width: 280px;
  width: 80%;
  max-width: 600px;
  height: 100%;
  border-radius: 20px;
  box-shadow: 10px 10px 7px #b6b6b6;

  @media screen and (min-width: 600px) {
    min-width: 400px;
    width: 80%;
    max-width: 640px;
    padding-top: 50px;
    padding-left: 30px;
  }
`;

export default ProfilePageStyles;
