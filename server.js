const express = require('express');
const index_routes = require('./routes/index')
const notes_routes = require('./routes/notes')
const PORT = process.env.PORT || 3001;
// dynamically set the port
const app = express();

// Express middleware will always run the operation in the order from top to bottom "order matters"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(index_routes)
app.use(notes_routes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});