const LinkedList = require("./linked-list");

function main() {
  let SSL = new LinkedList();
  SSL.insertFirst("Apollo");
  SSL.insertLast("Boomer");
  SSL.insertLast("Helo");
  SSL.insertLast("Husker");
  SSL.insertLast("Starbuck");
  SSL.insertLast("Tauhida");
  SSL.remove("Husker");
}
