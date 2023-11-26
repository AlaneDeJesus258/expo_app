var express = require('express');
var router = express.Router();
const User = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '' });
});

router.get('/sistema', function(req, res, next) {
  res.render('login', { title: '' });
});

router.post('/login/auth', async (req, res, next) => {
  try {
    const { nome, password } = req.body;

    // Verificar se o usuário existe no banco de dados
    const user = await User.findOne({ nome, password });
    console.log(req.body.nome + "   " + password)

    if (user) {
    
      res.render('sistema', { title: 'Express' });
    } else {
 
      res.render('login', { title: 'Codigo de Estudante ou Palavra Passe incorrectos.' });
    }
  } catch (error) {
    // Tratar erros de validação ou do banco de dados
    res.status(400).send(`Erro: ${error.message}`);
  }
});


module.exports = router;
