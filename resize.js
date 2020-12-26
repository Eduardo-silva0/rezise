const path = require('path')
const sharp = require('sharp')
const fs = require('fs')

const filepath = process.argv[2]

const arrayFilepath= path.basename(filepath).split(".")

const filename = arrayFilepath[0]
const extension = arrayFilepath[arrayFilepath.length -1]

const destination = './redimensionado'

if(!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

const sizes = [128, 48, 32, 24, 16]

sizes.forEach(size=>{
  sharp(filepath)
    .clone()
    .resize({width:size})
    .toFile(`${destination}/${filename}-${size}.${extension}`)
    .then(info=>{
      console.log(info)
    })
    .catch(error=>{
      console.log(error)
    })
})
