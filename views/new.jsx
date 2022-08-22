const React = require("react");
const Default = require("./layouts/Default");

function New() {
  return (
    <Default>
      <h2>Add a new bread</h2>
      <form action="/breads" method="Post">

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />

        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker">
          <option value="Rachel">Rachel</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Chandler">Chandler</option>
          <option value="Ross">Ross</option>
          <option value="Phoebe">Phoebe</option>
        </select>

        <label htmlFor="hasGluten">Has Gluten?</label>
        <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />

        <br />

        <input type="submit" />
      </form>
      <div className="backButton">
        <a href="/breads">
          <button>Go back to index</button>
        </a>
      </div>
    </Default>
  );
}

module.exports = New;
