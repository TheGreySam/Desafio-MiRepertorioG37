import fs from "fs";

const getAllSongs = (req, res) => {
    try {
      const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
      res.status(200).json(canciones);
    } catch (error) {
      res.status(500).json({ error: "Error al procesar la solicitud" });
      console.error("Error al procesar la solicitud:", error);
    }
  };


  export { getAllSongs };