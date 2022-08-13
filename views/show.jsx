const React = require("React");
const Default = require("./layouts/default");

function Show({ bread }) {
  // Confirm we are getting our bread data in the terminal
  //   console.log(bread.name);
  return (
    <Default>
      <h2>Show Page</h2>
      <h3>{bread.name}</h3>
      <img src={bread.image} alt={bread.name} />
    </Default>
  );
}

module.exports = Show;
