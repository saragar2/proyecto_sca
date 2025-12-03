const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 15432,
  database: 'hambre_fiambre',  
  user: 'postgres',     
  password: 'postgres', 
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/user/register', async (req, res) => {
  const insertRes = await pool.query(
      `INSERT INTO usuario (userName, password, name, age, blodGroup, kidneys, religion, healthStatus, typeUser) \
      VALUES ('${req.body.userName}', '${req.body.password}', '${req.body.name}', '${req.body.age}', '${req.body.blodGroup}', \
      '${req.body.kidneys}', '${req.body.religion}', '${req.body.healthStatus}', 'user')`
    );
    if (insertRes.rowCount>0){
        res.json({message: "Registro Okey"})
    } else {
        res.json({message: "Registro No Okey"})
    }
  
});

app.post('/api/user/login', async (req, res) => {
  //console.log('userName', req.body.first_name, '\npassword ', req.body.last_name);
  const selectRes = await pool.query(`SELECT * FROM usuario where \
        userName= '${req.body.userName}' and password = '${req.body.password}';`);
  //res.send(selectRes.rows);
  if (selectRes.rowCount>0){
        res.json({message: "Login Okey"})
    } else {
        res.json({message: "Login No Okey"})
    }

});

app.listen(3000);