const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const connection = mysql.connect({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database:'universitat'
})

const app = express();
const port = 3080;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`);
});

connection.connect((err) =>{
  if(err) throw err;
  console.log('Connected to the database');
})
const {crearConfigBaseDades} = require('./db.config');
const baseDades = crearConfigBaseDades();
const {initModels} = require( "../../models/init-models");
const bdd = initModels(baseDades);

app.post('/modifCorreuCerrato', (req, res) => {

});

app.get('/llistaAssigCerrato', async (req, res) => {
    const resultado = await connection.execute(`
      SELECT ASSIG_CODI, ASSIG_NOM
      FROM ASSIGNATURES
      JOIN PROFESSOR  ON ASSIG_DNI_PROFESSOR_RESP = PROF_DNI
      JOIN DEPARTAMENT  ON PROF_DEPT_CODI = DEPT_CODI
      WHERE PROF_DEPT_CODI = 1`);
    res.json(resultado[0]);
    console.log(resultado[0]);
});

app.put('/modifDeptCerrato', async (req, res) => {
  const departament = req.body
  const cosa = 2
  console.log(departament)
  try {
    await bdd.departament.update(departament, {where: {DEPT_CODI: req.departament.DEPT_CODI}})
    console.log("A lo hecho pecho!");
  }catch (err) {
    console.log(err, "No puc, pelacanyes!")
  }})

app.get('/impartirAssigCerrato', async (req, res) => {

    const assignatures = await bdd.assignatures.findAll({
      where: {
        ASSIG_DNI_PROFESSOR_RESP: 2100
      }
    });
    res.json(assignatures);
});
