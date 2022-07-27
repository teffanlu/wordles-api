const pool = require('../utils/dbconnection');
const { mail } = require('../utils/mailer');
const query = require('../utils/queries');

const getGamers = async (req, res) => {
  const client = await pool.connect();
  try{
    const response = await client.query(query.getGamers);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const getGamer = async (req, res) => {
  const client = await pool.connect();
  try{
    const { userName, phoneNumber, gmail } = req.body;
    console.log(userName, phoneNumber, gmail);

    if(phoneNumber === undefined || gmail === undefined){
      const response = await client.query(query.getGamer, [userName]);
      res.status(200).json(response.rows);
    } else {
      const response = await client.query(query.getGamer, [userName]);
      const response2 = await client.query(query.getForPhone, [phoneNumber]);
      const response3 = await client.query(query.getForGmail, [gmail]);
      res.status(200).json([response.rows, response2.rows, response3.rows]);
    }

    
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const createGamer = async (req, res) => {
  const client = await pool.connect();
  try{
    const { name, userName, phoneNumber, gmail, password } = req.body;
    console.log(name, userName, phoneNumber, gmail, password);
    const response = await client.query(query.createGamer, [
      name, 
      userName, 
      phoneNumber, 
      gmail, 
      password
    ]);

    //send email of welcome
    //await mail(nombre, gmail, "empresa");
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const updateGamer = async (req, res) => {
  const client = await pool.connect();
  try{
      const id = parseInt(req.params.id);
      const { name, userName, phoneNumber, gmail, password } = req.body;
      console.log(name, userName, phoneNumber, gmail, password, id);
      const response = await client.query(query.updateGamer, [ 
        name, 
        userName, 
        phoneNumber, 
        gmail, 
        password, 
        id
      ]);
      
      res.status(200).json(response.rows);
  }catch{
      res.status(505);
  }finally{
      client.release(true);
  }
};

const updateStatisticsGamer = async (req, res) => {
  const client = await pool.connect();
  try{
      const id = parseInt(req.params.id);
      const { totalPoints, currentStreak, winStreak } = req.body;
      console.log(totalPoints, currentStreak, winStreak);
      let response = await client.query(query.updateStatisticsGamer, [ 
        totalPoints, 
        currentStreak, 
        winStreak,
        id
      ]);
      console.log(response.rows);
      res.status(200).json(response.rows);
  }catch{
      res.status(505);
  }finally{
      client.release(true);
  }
};

const deleteGamer = async (req, res) => {
  const client = await pool.connect();
  try{
      const id = parseInt(req.params.id);
      await client.query(query.deleteGamer, [ id ]);
      res.status(200).json(`Gamer with id: ${id}, deleted Successfully`);
  }catch{
      res.status(505);
  }finally{
      client.release(true);
  }
};

const confirmCodigo = async (req, res) => {
  const client = await pool.connect();
  try{
    const { gmail, codigo } = req.body;
    console.log(gmail, codigo);
    const response = await client.query(query.confirmCodigo, [codigo]);

    if(response.rows.data.gmail === gmail){
      res.status(200).json(response.rows);
      return 0;
    }

    res.status(200).json({error: '505'});
    return 1;
    
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const createCodigo = async (req, res) => {
  const client = await pool.connect();
  try{
    const { gmail } = req.body;

    var codigo = Math.trunc(Math.random() * (9999 - 1000) + 1000);

    console.log(gmail, codigo);
    const response = await client.query(query.createCodigo, [gmail, codigo]);

    //send email of Confirmacion de email
    await mail(codigo, gmail);

    res.status(200).json(response.rows);    
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

module.exports = {
  getGamer,
  createGamer,
  deleteGamer,
  updateGamer,
  updateStatisticsGamer,
  confirmCodigo,
  createCodigo,
  getGamers
};