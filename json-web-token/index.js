const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config('.env');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res)=> {
	res.json({
		text: "api work!"
	});
});

app.post('/auth', (req, res) => {
	const{ username, password } = req.body;
	const user = {username: username}
	let token = createToken(user);

	res.send({
		message: 'Acceso correcto',
		token: token
	})
})

app.get('/login', (req, res)=> {
	res.send(`
			<form action='/auth' method='post'>
				<div>
					<labe>Usuario</label>
					<input type='text' name='username'>
				</div>
				<div>
					<labe>Password</label>
					<input type='password' name='password'>
				</div>
				<div>
					<input type='submit' value='Enviar'>
				</div>
			</form>
		`)
});

app.get('/protected', ensureToken, (req, res)=> {
	jwt.verify(req.token, process.env.SECRET, (err, data)=> {
		if(err) {
			res.status(403).send({
				message: 'Token no valido o expirado'
			});
			console.log(err);
		}else {
			res.json({
				text: 'protected',
				data
			});
		}
	});

});


let createToken = (user)=>{
	return jwt.sign(user, process.env.SECRET, {expiresIn: '10m'});
}


function ensureToken(req, res, next) {
	const bearerHeader = req.headers['authorization'];

	if(!bearerHeader) return res.status(403).send({ message: 'Acceso Denegado' });

	let token = bearerHeader.split(" ")[1];

	req.token = token;

	next();

}

app.listen(3000, ()=>{
	console.log('Servidor corriendo en el puerto 3000');
});
