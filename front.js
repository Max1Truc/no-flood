const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send(`
  Invite this bot: <a href="https://discordapp.com/oauth2/authorize?client_id=646405464346853377&scope=bot&permissions=76802">Here</a>
`))

app.listen(port, () => console.log(`Web server listening on port ${port}!`))
