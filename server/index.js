const express = require('express')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messageController = require('./controllers/messageController')
app.post('/api/messages', messageController.createMessage)
app.get('/api/messages', messageController.getMessages)
app.put('/api/messages/:id', messageController.editMessage)
app.delete('/api/messages/:id', messageController.deleteMessage)

const port = 3001
app.listen(port, () => console.log(`Server listening on port: ${port}`))