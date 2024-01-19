
//Imports the Express library into the Node.js application
const express = require('express')
//Creates an instance of the Express application
const app = express()
//Sets the port number that the Express application will listen on
const port = 8000

// Serve static files (CSS, images, JS) from the 'public' directory
app.use(express.static('public'));

// Serve the 'css' directory as '/css' and the 'img' directory as '/img', and the 'js' directory as '/js'.
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set the 'views' directory
app.set('views', './views');

// Render the 'index' template when the user navigates to the root URL
app.get('', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// Render the 'about-us' template when the user navigates to '/about-us'
app.get('/about-us', (req, res) => {
  res.sendFile(__dirname + '/views/about-us.html')
})

// Render the 'contact-us' template when the user navigates to '/contact-us'
app.get('/contact-us', (req, res) => {
  res.sendFile(__dirname + '/views/contact-us.html')
})

// Start the server on the specified port
app.listen(port, () => console.info(`App is live on port ${port}`))
