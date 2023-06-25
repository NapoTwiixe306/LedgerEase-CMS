const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

// Route d'inscription
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'L\'utilisateur existe déjà' });
    }

    // Créer un nouvel utilisateur
    user = new User({
      name,
      email,
      password
    });

    // Hasher le mot de passe et sauvegarder l'utilisateur dans la base de données
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Créer un jeton JWT
    const payload = {
      user: {
        id: user.id,
        name: user.name
      }
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

    // Sauvegarder le jeton JWT dans le localStorage
    // localStorage.setItem('token', token);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur serveur');
  }
});

// Route de connexion
router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    // Vérifier si l'utilisateur existe
    let user = await User.findOne({ name });
    if (!user) {
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    // Vérifier si le mot de passe correspond
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    // Créer un jeton JWT
    const payload = {
      user: {
        id: user.id,
        name: user.name
      }
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

    // Sauvegarder le jeton JWT dans le localStorage

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur serveur');
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('token'); // Supprimer le cookie contenant le jeton JWT
  res.status(200).send({ message: 'Déconnexion réussie' }); // Renvoyer une réponse avec un message
});



module.exports = router;
