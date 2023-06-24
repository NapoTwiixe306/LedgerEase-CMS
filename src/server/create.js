const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/api/formData', (req, res) => {
  const { websiteName, emailAddress } = req.body;

  const formData = {
    websiteName,
    emailAddress
  };

  const jsonData = JSON.stringify(formData, null, 2); // Add indentation for readability

  fs.writeFile('formData.json', jsonData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Une erreur est survenue lors de la sauvegarde des données.');
    } else {
      res.status(200).send('Les données ont été sauvegardées avec succès.');
    }
  });
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
