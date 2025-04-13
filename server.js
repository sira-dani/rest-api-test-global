//importar el servidor
const app = require("./server");

//puerto donde escuchara el servidor
const PORT = 8001;

//configurar el servidor para escuchar en el puerto
try {
    app.listen(PORT, () => {
        console.log(`servidor corriendo en el puerto ${PORT}`);
    });
} catch (error) {
    console.log("🚀 ~ error:", error)

}
