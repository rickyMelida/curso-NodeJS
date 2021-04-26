const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
  res.send('Esta es la pagina Principal');
});

router.get('/canciones', (req, res)=>{
  res.send('Esta es la pagina de las canciones');
});

router.get('/reproductor', (req, res)=>{
  res.send('Esta es la pagina del Reproductor');
});

module.exports = router;
