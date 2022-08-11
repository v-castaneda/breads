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
        <h1> HTML Rendered!</h1>
        {html.children}
      </body>
    </html>
  );
}

// exporting code for use elsewhere
module.exports = Default;
