const path = require('path');

const express = require("express");
const app = express();

// set server port
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
//parse URL-encoded bodies - Allows us retrieve data from submitted data
app.use(express.urlencoded({ extended: true }));

//import cors
var cors = require('cors');
app.use(cors());

//import the harperdb instance
const db = require("./dbconfig");

app.get('*', (req, res) =>
{
  res.sendFile(path.join(publicPath, 'index.html'));
});

// root endpoint response
app.get("/", (req, res) =>
{
  res.send("<h1>Welcome, your server is up and running!</h1>");
});

// Add todo item endpoint
app.post("/add", async (req, res) =>
{
  if (!req.body.title || req.body.title === "")
  {
    res.status(400).send("Todo Title is required");
  } else
  {
    const option = {
      title: req.body.title,
      isComplete: false,
    };

    try
    {
      const response = await db.insert({
        table: "items",
        records: [option]
      });
      res.status(200).send(response);
    } catch (error)
    {
      res.status(500).send(error);
    }
  }
});

// Get all todos
app.get("/todos", async (req, res) =>
{
  try
  {
    const response = await db.query("SELECT * FROM todos.items");
    res.status(200).send(response);
  } catch (error)
  {
    res.send(500).send("Something went wrong");
  }
});

//Clear all todos
app.post("/clear", async (req, res) =>
{
  try
  {
    const response = await db.query("DELETE FROM todos.items");
    res.status(200).send(response);
  } catch (error)
  {
    res.send(500).send("Something went wrong");
  }
});

//Delete todo item
app.delete("/delete/:todo_id", async (req, res) =>
{
  const { todo_id } = req.params;
  try
  {
    const response = await db.delete({
      table: "items",
      hashValues: [todo_id]
    });
    res.status(200).send(response);
  } catch (error)
  {
    res.status(500).send(error);
  }
});

//Update
// 1. route to update a todo
app.post("/edit", async (req, res) =>
{
  // 2. set the updated todo and specify the todo identifier - hash attribute
  const option = {
    id: req.body.id,
    title: req.body.title,
    isComplete: req.body.isComplete,
  };
  // 3. use try/catch to control errors
  try
  {
    // 4. send the updated todo
    const response = await db.update({
      table: "items",
      records: [option],
    });
    // 5. send success message to the frontend
    res.status(200).send(response);
  } catch (error)
  {
    // 5. send error message to the frontend
    res.status(500).send(error);
  }
});


app.listen(port, () =>
{
  console.log(`Your server ⚡ is running 🏃‍♀️ on http://localhost:${ port }`);
});