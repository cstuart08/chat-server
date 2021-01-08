const messages = []

let id = 0

module.exports = {
    createMessage: (req, res) => {
        let {text, time} = req.body
        if (!text || !time) {
            res.status(404).send("Unable to create book. Missing message text or time.")
        } else {
            let message = {
                id,
                text,
                time
            }
            messages.push(message)
            id++
            res.status(200).send(messages)
        }
    },
    getMessages: (req, res) => {
        res.status(200).send(messages)
    },
    editMessage: (req, res) => {
        const {id} = req.params
        let index = messages.findIndex( e => e.id === +id)
        if (index === -1) {
            res.status(404).send("Unable to edit a message. Message ID not found.")
        } else {
            const {text, time} = req.body
            let editedMessage = {
            id: +id,
            text: text || messages[index].text,
            time: time || messages[index].time
            }
            messages[index] = editedMessage
            res.status(200).send(messages)
        }
    },
    deleteMessage: (req, res) => {
        const {id} = req.params
        let index = messages.findIndex( e => e.id === +id)
        if (index === -1) {
            res.status(404).send(`Unable to delete a message. Message ID: ${id}, not found.`)
        } else {
            messages.splice(index, 1)
            res.status(200).send(messages)
        }
    },
}