const express = require('express');
const router = express.Router();

const path = require('path');
// IMAGE PATH
const imgFolderPath = path.join(__dirname, '../img/');


//imagen
router.get('/:imgName', (req, res) =>{
    const imagen = req.params.imgName;
res.sendFile(`${imgFolderPath}${imagen}`)
})


module.exports = router;