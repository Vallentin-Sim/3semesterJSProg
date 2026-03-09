import express from 'express'
const app = express()

app.use(express.static('assets'))
app.use(express.urlencoded())
// fordi vi sender JSON til serveren i forbindelse med et POST
// request skal middlewaret her aktiveres
app.use(express.json())

app.get('/', (request, response)=>{
    response.send('<html><head><title>Hello world</title><body><h1>Bøh</h1></body></html>')
})

app.post('/adduser', (request, response)=>{
    const newUserName = request.body.name
    if (newUserName !== 'KAJ') {
        response.json({
            message: `Serveren siger du hedder ${newUserName}`,
            status: 200
        })
    } else {
        response.json({
            message: `Serveren siger du hedder ${newUserName}`,
            status: 400
        })
    }
})

app.listen(8000, ()=>{console.log('🚅 Så kører toget')})