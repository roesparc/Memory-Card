const createCard = (id, name, image) => ({ id, name, image });

const cards = [
  createCard(1, "Frodo", require("./img/frodo.jpg")),
  createCard(2, "Sam", require("./img/sam.jpg")),
  createCard(3, "Pippin", require("./img/pippin.jpg")),
  createCard(4, "Merry", require("./img/merry.jpg")),
  createCard(5, "Gandalf", require("./img/gandalf.jpg")),
  createCard(6, "Aragorn", require("./img/aragorn.jpg")),
  createCard(7, "Legolas", require("./img/legolas.jpg")),
  createCard(8, "Gimli", require("./img/gimli.jpg")),
  createCard(9, "Boromir", require("./img/boromir.jpg")),
  createCard(10, "Sauron", require("./img/sauron.jpg")),
  createCard(11, "Gollum", require("./img/gollum.jpg")),
  createCard(12, "Bilbo", require("./img/bilbo.jpg")),
];

export default cards;
