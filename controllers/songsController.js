import fs from "fs";

const getAllSongs = (req, res) => {
    try {
      const canciones = JSON.parse(fs.readFileSync("repertorio.json",'utf8'));
      res.status(200).json(canciones);
    } catch (error) {
      res.status(500).json({ error: "Error al procesar la solicitud" });
      console.error("Error al procesar la solicitud:", error);
    }
  };


  const addNewSong = (req, res) => {
    try {
        
        const canciones = JSON.parse(fs.readFileSync('repertorio.json','utf8'));
        const cancion = req.body;
        // console.log(req)
        canciones.push(cancion);
        fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
        res.status(201).send("Cancion creada con exit!");
        
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
  }


  export { getAllSongs, addNewSong };