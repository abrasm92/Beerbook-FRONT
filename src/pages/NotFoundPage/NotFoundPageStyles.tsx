import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  #oopss {
    position: static;
    left: 0px;
    top: 0;
    width: 90vw;
    height: 100%;
    line-height: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
    padding-bottom: 100px;
  }
  #oopss #error-text {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Shabnam", Tahoma, sans-serif;
    color: #000;
    direction: rtl;
  }
  #oopss #error-text img {
    height: 342px;
  }
  .text {
    position: relative;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 20px;
    padding: 20px;
    line-height: 2.5rem;
    text-align: center;
  }
  .number {
    position: relative;
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.5rem;
    text-align: center;
  }

  #oopss #error-text p.p-a {
    font-size: 1.3rem;
    text-align: center;
    width: 80%;
  }
  #oopss #error-text p.p-b {
    font-size: 1.3rem;
    text-align: center;
  }
  #oopss #error-text .back {
    background: #fff;
    color: #000;
    font-size: 1.2rem;
    text-decoration: none;
    margin: 2em auto 0;
    padding: 0.7em 2em;
    border-radius: 500px;
    box-shadow: 0 20px 70px 4px rgba(0, 0, 0, 0.1), inset 7px 33px 0 0px #fff300;
    font-weight: 900;
    transition: all 300ms ease;
  }
  #oopss #error-text .back:hover {
    -webkit-transform: translateY(-13px);
    transform: translateY(-13px);
    box-shadow: 0 35px 90px 4px rgba(0, 0, 0, 0.3), inset 0px 0 0 3px #000;
  }

  @font-face {
    font-family: Shabnam;
    src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.eot");
    src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.woff")
        format("woff"),
      url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.woff2")
        format("woff2"),
      url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.ttf")
        format("truetype");
    font-weight: bold;
  }
  @font-face {
    font-family: Shabnam;
    src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.eot");
    src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.woff")
        format("woff"),
      url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.woff2")
        format("woff2"),
      url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.ttf")
        format("truetype");
    font-weight: normal;
  }
`;

export default NotFoundPageStyles;
