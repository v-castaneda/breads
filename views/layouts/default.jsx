// utilizing JSX
const React = require("react");

// creating HTML boiler plate
function Default(html) {
  return (
    <html>
      <head>
        <title>{html.title || "Default"}</title>
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1>
              <a href="/breads">BreadCRUD</a>
            </h1>
          </header>
          <div className="container">{html.children}</div>
        </div>
      </body>
    </html>
  );
}

// exporting code for use elsewhere
module.exports = Default;
