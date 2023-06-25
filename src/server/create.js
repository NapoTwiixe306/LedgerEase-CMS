const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

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

  const fileName = `${emailAddress}.json`; // Use email address as the file name
  const filePath = path.join(__dirname, 'Users', fileName); // Construct the file path

  fs.writeFile(filePath, jsonData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la sauvegarde des données.' });
    } else {
      res.status(200).json({ success: true, message: 'Les données ont été sauvegardées avec succès.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
