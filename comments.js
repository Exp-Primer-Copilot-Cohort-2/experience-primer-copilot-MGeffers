// Create web server and listen on port 3000
// Create a route for the comments page
// Render comments.ejs
// Pass the comments data to the comments.ejs template
// Create a route for the post request
// Get the comment from the form
// Push the comment to the comments array
// Redirect to the comments page

// Require the express module
const express = require('express');

// Create an instance of the express server
const app = express();

// Set the port to 3000
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Create a route for the comments page
app.get('/comments', (req, res) => {
  // Comments data
  const comments = [
    { name: 'John', comment: 'I love this site!' },
    { name: 'Alex', comment: 'This is the best site!' },
    { name: 'Michelle', comment: 'How can I get more information?' },
  ];

  // Render the comments.ejs template
  res.render('comments', { comments });
});

// Create a route for the post request
app.post('/comments', (req, res) => {
  // Get the comment from the form
  const comment = req.body.comment;

  // Push the comment to the comments array
  comments.push(comment);

  // Redirect to the comments page
  res.redirect('/comments');
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});