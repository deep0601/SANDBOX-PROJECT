// imports

const express = require("express");
const app = express();
const port = 3000;

// Static Files

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})
app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/views/mainpage.html')
})
app.get('/settings', (req, res) => {
    res.sendFile(__dirname + '/views/settings.html')
})
app.get('/calendar', (req, res) => {
    res.sendFile(__dirname + '/views/calendar.html')
})
app.get('/newpost', (req, res) => {
    res.sendFile(__dirname + '/views/newpost.html')
})
app.get('/oldpost', (req, res) => {
    res.sendFile(__dirname + '/views/oldposts.html')
})

// listen to port 3000

app.listen(port, () => console.info(`Listening on port ${port}`))