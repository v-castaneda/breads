const React = require("React");
const Default = require("./layouts/default");

function Show({ bread }) {
  // Confirm we are getting our bread data in the terminal
  //   console.log(bread.name);
  return (
    <Default>
      <h3>{bread.name}</h3>
      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <li>
        <a href="/breads">Go home</a>
      </li>
    </Default>
  );
}

module.exports = Show;
