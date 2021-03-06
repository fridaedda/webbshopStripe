const express = require('express')
const cors = require('cors')

const cars = [{
  id: 0,
  name : "Adidas - Superstar classic",
  description: "Unik design",
  extraDescription: "Superstar Ftwr White/Black/White är tillverkade av en kombination av olika material. Den välkända snäcktån är tillverkad av gummi, något som ger skorna en unik design samtidigt som den skyddar foten mot regn. Större delen av skon är tillverkad av läder, syntet och tyg. Detta gör skorna bekväma att bära samtidigt som de håller formen länge.",
  size: 41,
  price: 899,
  img: "Adidas5.png"
}]

const app = express()
const PORT = 3001
app.use(express.json())

app.use(cors())
app.get('/api/cars', (req,res) => res.json(cars))

console.log(cars);


app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))