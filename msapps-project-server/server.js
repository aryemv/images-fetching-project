const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/imagesRouter.js");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/images", imageRoutes);

//start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
