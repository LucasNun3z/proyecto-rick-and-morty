const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(cors());

// Endpoint para obtener personajes de Rick and Morty
app.get('/api/personajes', async (req, res) => {
  try {
    console.log('Llamada recibida a /api/personajes');
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error en el endpoint:', error); // Muestra el error completo
    res.status(500).json({ error: error.message }); // Muestra el mensaje real del error
  }
});

app.listen(3001, () => console.log('Servidor backend en puerto 3001'));