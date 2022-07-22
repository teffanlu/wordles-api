const pool = require('../utils/dbconnection');
const query = require('../utils/queries');

const getRooms = async (req, res) => {
    const client = await pool.connect();
    try{
        let response = await client.query(query.getRooms);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const createRoom = async (req, res) => {
    const client = await pool.connect();
    try{
        const { word, turns, limitTime, gamer_id } = req.body;
        console.log(word, turns, limitTime, gamer_id);
        let response = await client.query(query.createRoom, [ 
            word, 
            turns, 
            limitTime, 
            gamer_id
        ]);
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const getRoom = async (req, res) => {
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        let response = await client.query(query.getRoom, [id]);
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const deleteRoom = async (req, res) => {
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        await client.query(query.deleteRoom, [ 
          id
        ]);
        res.status(200).json('Delete Successfully');
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const updateRoom = async (req, res) => {
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const { word, turns, limitTime } = req.body;
        console.log(word, turns, limitTime, id);
        let response = await client.query(query.updateRoom, [ 
            word, 
            turns, 
            limitTime,
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

const getStacts = async (req, res) => {
    const client = await pool.connect();
    try{
        const { gamer_id } = req.body;
        let response = await client.query(query.getStacts, [ 
            gamer_id
        ]);
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const getStact = async (req, res) => {
    const client = await pool.connect();
    try{
        const { gamer_id, word_id } = req.body;
        let response = await client.query(query.getStact, [ 
            gamer_id, 
            word_id 
        ]);
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const createStacts = async (req, res) => {
    const client = await pool.connect();
    try{
        const { totalPoints, totalTime, totalTurns, word_id, gamer_id } = req.body;
        console.log(totalPoints, totalTime, totalTurns, word_id, gamer_id);
        let response = await client.query(query.createStacts, [ 
            totalPoints,
            totalTime,
            totalTurns, 
            word_id, 
            gamer_id
        ]);
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

module.exports = {
    getRooms,
    createRoom,
    getRoom,
    deleteRoom,
    updateRoom,
    getStacts,
    getStact,
    createStacts
};