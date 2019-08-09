const multer = require('multer')
const path = require('path')



module.exports = {
   
        dest: path.resolve(__dirname, ".." , "tmp", "uploads"),
        storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, ".." , "tmp", "uploads"))
        },
        filename: (req, file, cb) => {
            const fileName = `profileImg${req.params.id}.jpeg`
            cb(null, fileName)
        },
        fileFilter: (req, file, cb) => {
            
            
            if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
                return cb(new Error('Somente imagens são permitidas'), false)
            }
            cb(null,true)
        }
    })
    
}