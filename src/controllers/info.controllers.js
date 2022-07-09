const pool = require('../utils/dbconnection');
const query = require('../utils/queries');
const fs = require('fs-extra');

const getDataEmpresa = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const response = await client.query(query.getDataEmpresa, [id]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const getDocument = async (req, res) => {
    const client = await pool.connect();
    try{
      const id = parseInt(req.params.id);
      const response = await client.query(query.getDocument, [id]);
      res.status(200).json(response.rows);
    }catch{
      res.status(505);
    }finally{
      client.release(true);
    }
  };

const getMensaje = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const response = await client.query(query.getMensaje, [id]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const getArchivo = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const response = await client.query(query.getArchivo, [id]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const setDataEmpresa = async (req, res) => {
    const client = await pool.connect();
    try{
        const id_empresa = parseInt(req.params.id);
        const {title, descripcion, contacto} = req.body;

        const resp = await client.query(query.getDataEmpresa, [id_empresa]);

        if(resp.rows.length > 0){
            const response = await client.query(query.updateDataEmp, [
                title,
                descripcion,
                contacto,
                id_empresa
            ]);
            res.status(200).json(response.rows);
        } else {
            const response = await client.query(query.setDataEmpresa, [
                title,
                descripcion,
                contacto,
                id_empresa
            ]);
            res.status(200).json(response.rows);
        }
        
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const setDocument = async (req, res) => {
    const client = await pool.connect();
    try{

        const admin_id = parseInt(req.params.id);
        const {newData} = req.body;
        console.log(newData, newData.length);

        for (let i = 0; i < newData.length; i++) {

            var {titulo, subtitulo, texto, link, linkTipe, linkName} = newData[i];
            
            console.log(titulo, subtitulo, texto, link, linkTipe, linkName);

            await client.query(query.setDocument, [
                titulo, 
                subtitulo, 
                texto, 
                link,
                linkTipe,
                linkName,
                admin_id
            ]);
        }

        const resp = await client.query(query.getDocument, [admin_id]);
        res.status(200).json(resp.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const setMensaje = async (req, res) => {
    const client = await pool.connect();
    try{
        const admin_id = parseInt(req.params.id);
        const {date, mensaje, nombre, time} = req.body;

        console.log(date, mensaje, nombre, time)

        const response = await client.query(query.setMensaje, [
            nombre,
            mensaje,
            date,
            time,
            admin_id
        ]);

        res.status(200).json(response.rows);
        
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const setArchivo = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const {archivo} = req.files;

    var file, tituloFile;

    console.log(tituloFile, file, id);

    let r = await client.query(query.setArchivo, [
      null,
      null,
      tituloFile,
      file,
      id
    ]);

    res.status(200).json([]);
    await fs.unlink(archivo.tempFilePath);

  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const setArchivo2 = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    console.log(id);
    const {titulo, descripcion} = req.body;

    console.log(titulo, descripcion, id);

    await client.query(query.setArchivo, [
      titulo,
      descripcion,
      null,
      null,
      id
    ]);

    res.status(200).json([]);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const deleteDocument = async (req, res) => {
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        await client.query(query.deleteDocument, [ id ]);
        res.status(200).json(`Item Document ${id} deleted Successfully`);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const deleteArchivo = async (req, res) => {
  const client = await pool.connect();
  try{
      const id = parseInt(req.params.id);
      await client.query(query.deleteArchivo, [ id ]);
      res.status(200).json(`Item Archivo ${id} deleted Successfully`);
  }catch{
      res.status(505);
  }finally{
      client.release(true);
  }
};

module.exports = {
    getDataEmpresa,
    getMensaje,
    getDocument,
    setDataEmpresa,
    setDocument,
    setMensaje,
    deleteDocument,
    setArchivo,
    deleteArchivo,
    getArchivo,
    setArchivo2
};