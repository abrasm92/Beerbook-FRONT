import "cypress-file-upload";

const url =
  "https://abraham-saavedra-front-final-project-202204-bcn.netlify.app/";

describe("Given a beerbook app", () => {
  describe("When user in and try to register, login and do 'todo' functions", () => {
    it("Then it can do regist, login, go to login, create beer, then serach by country, then go to detail, edit this beer, see changes and delete this one", () => {
      cy.visit(url);

      cy.get("p").contains(
        "Descubre todo sobre las mejores cervezas del mundo"
      );

      cy.get("button").should("contain.text", "Iniciar sesión").click();

      cy.get("span").contains("Registrate aquí").click();

      cy.get('input[placeholder="Nombre"]').type("usuario prueba");
      cy.get('input[placeholder="Usuario"]').type("usuarioprueba");
      cy.get('input[placeholder="E-mail"]').type("prueba@gmail.com");
      cy.get('input[placeholder="Contraseña"]').type(`12345678{enter}`);

      cy.get("button").contains("Iniciar sesión").click();

      cy.get('input[placeholder="Usuario"]').type("usuarioprueba");
      cy.get('input[placeholder="Contraseña"]').type("12345678{enter}");

      cy.get('[alt="icono de filtro"]').click();

      cy.get('select[name="filterType"]').select("País");

      cy.get('select[name="filterValue"]').select("España");

      cy.get("button").contains("Filtrar").click();

      cy.get("li").eq(2).click();

      cy.get("p").contains("Mi perfil").click();

      cy.scrollTo(0, 700);

      cy.get("button").contains("Agregar una cerveza").click();

      cy.scrollTo(700, 0);

      cy.get('input[placeholder="Nombre de la cerveza"]').type(
        "cerveza prueba"
      );
      cy.get('input[placeholder="Fabricante"]').type("cerveceria prueba");
      cy.get('select[name="style"]').select("Porter");
      cy.get('input[placeholder="IBU"]').type("{backspace}30");
      cy.get('input[placeholder="Grados"]').type("{backspace}6.5");
      cy.get('select[name="country"]').select("Italia");
      cy.get("textarea").type("Descripción de cerveza de prueba");
      cy.get("input[type=file]").attachFile("imagen prueba.png");

      cy.get("button").contains("Crear cerveza").click();

      cy.scrollTo(0, 2500);

      cy.get("button").contains(">").click();

      cy.get("button").contains(">").click();
    });
  });
});
