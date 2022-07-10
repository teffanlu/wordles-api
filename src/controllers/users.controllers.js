const pool = require('../utils/dbconnection');
const { mail } = require('../utils/mailer');
const query = require('../utils/queries');

const getGamer = async (req, res) => {
  const client = await pool.connect();
  try{
    const { userName } = req.body;
    const response = await client.query(query.getGamer, [userName]);
    res.status(200).json(response.rows);
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
      console.log(response);
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

module.exports = {
  getGamer,
  createGamer,
  deleteGamer,
  updateGamer,
  updateStatisticsGamer
};