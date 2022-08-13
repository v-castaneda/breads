const React = require("React");
const Default = require("./layouts/default");

function Show({ bread }) {
  console.log(bread.name);
  return (
    <Default>
      <h2>Show Page</h2>
    </Default>
  );
}

module.exports = Show;
