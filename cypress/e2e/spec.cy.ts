import "cypress-file-upload";

const url = "https://victor-arumi-front-final-project-202204-bcn.netlify.app/";

const username = "CyTest";
const password = "CyPassword";
// const name = "CyName";

describe("Given a PadelBookings web app ", () => {
  describe("When the user visits the base web url", () => {
    it("The it should land into the login page", () => {
      cy.viewport("iphone-xr");
      cy.visit(url);
      // cy.wait(3000);
      // cy.get("a").contains("Regístrate").click();
      // cy.get('input[id="username"]').type(username);
      // cy.get('input[id="password"]').type(password);
      // cy.get('input[id="name"]').type(name);
      // cy.get("input[type=file]").attachFile("cypress.jpg");
      // cy.get("button").contains("Crear cuenta").click();

      // cy.wait(3000);
      // cy.url().should("contain", "/login");

      //login
      cy.get('input[id="username"]').type(username);
      cy.get('input[id="password"]').type(`${password}{enter}`);

      cy.contains("Todas las reservas").should("be.visible");
      cy.get("button").contains("Anterior").should("be.disabled");
      cy.get("button").contains("Siguiente").should("not.be.disabled").click();
      cy.get("button").contains("Anterior").should("not.be.disabled");

      cy.viewport("macbook-13");

      cy.get("a").contains("Nueva reserva").click();
      cy.get('select[id="club"]').select("Wi Padel");
      cy.get('select[id="club"]').should("have.value", "Wi Padel");
      cy.get('input[id="date"]').type("2000-02-20");
      cy.get('input[id="date"]').should("have.value", "2000-02-20");
      cy.get('input[id="hour"]').type("00:20");
      cy.get('input[id="hour"]').should("have.value", "00:20");
      cy.get("button")
        .contains(/outdoor/i)
        .click();
      cy.get('select[id="player1"]')
        .should("have.value", `${username} (Creador)`)
        .should("be.disabled");
      cy.get('select[id="player2"]').select("Dan Abramov");
      cy.get('select[id="player2"]').should(
        "have.value",
        "62a88c1d15c02ce1c436398a"
      );
      cy.get("p").contains("Partida abierta").should("be.visible");
      cy.get('button[title="Abrir o Cerrar partida"]').click();
      cy.get("p").contains("Partida cerrada").should("be.visible");
      cy.get('button[title="Abrir o Cerrar partida"]').click();
      cy.get("p").contains("Partida abierta").should("be.visible");

      cy.get('select[id="player3"]').select("Sheldon Cooper");
      cy.get('select[id="player3"]').should(
        "have.value",
        "62a8932915c02ce1c4363995"
      );
      cy.get('select[id="player4"]').select("Elon Musk");
      cy.get('select[id="player4"]').should(
        "have.value",
        "62a891c215c02ce1c436398f"
      );

      cy.get("p").contains("Partida cerrada").should("be.visible");
      cy.get("button").contains("Crear Reserva").click();

      cy.get("a").contains("Nueva reserva").click();
      cy.get('select[id="club"]').select("Vall Parc Club Esportiu");
      cy.get('input[id="date"]').type("2022-10-10");
      cy.get('input[id="hour"]').type("18:30");

      cy.get("a").contains("Mis reservas").click();

      cy.contains("Mis reservas").should("be.visible");
      cy.url().should("contain", `/bookings/mybookings/${username}`);
      cy.get("p").contains("00:20").click();
      cy.wait(2000);
      cy.get('button[title="Editar reserva"]').click();

      cy.get('input[id="date"]').type("2000-12-12");
      cy.get('input[id="date"]').should("have.value", "2000-12-12");

      cy.get('input[id="hour"]').type("12:00");
      cy.get('input[id="hour"]').should("have.value", "12:00");
      cy.get("button").contains("Indoor").click();

      cy.get("button").contains("Editar reserva").click();
      cy.wait(3000);

      cy.get("p").contains("2000-12-12").should("be.visible");
      cy.get("p").contains("12:00").should("be.visible");
      cy.get("p").contains("Indoor").should("be.visible");
      cy.get("p").contains("Cerrar sesión").click();

      cy.wait(2000);
      //end login
    });
  });
});
