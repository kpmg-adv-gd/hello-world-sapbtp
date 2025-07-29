const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello World 29.07.2025</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        </style>
      </head>
      <body>
        <h1>Hello World!</h1>
        <p>Benvenuto sulla tua pagina Node.js su SAP BTP!</p>
      </body>
    </html>
  `);
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
  });
}

module.exports = app;