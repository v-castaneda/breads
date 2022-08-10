const React = require("react");
const Default = require("./layouts/Default");

function Index({ breads }) {
  return (
    <Default>
      <h2>Index Page</h2>
      {/* This is a JSX comment. */}
      {/* <p>I have {breads[0].name} bread!</p> */}
      <ul>
        {breads.map((bread, index) => {
          return <li key={index}>{bread.name}</li>;
        })}
      </ul>
    </Default>
  );
}

module.exports = Index;
