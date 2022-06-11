import NotFoundPageStyles from "./NotFoundPageStyles";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyles>
      <div id="oopss">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <span className="number"> 404</span>
          <span className="text">PAGINA NO ENCONTRADA</span>
          <p className="p-a">
            La página que estás buscando no se pudo encontrar
          </p>
        </div>
      </div>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
