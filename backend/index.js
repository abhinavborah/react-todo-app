const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You sent the wrong inputs!",
    });
    return;
  }

  // put the todo in the DB
  await todo.create({
    tite: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    message: "Todo created.",
  });
});

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You sent the wrong inputs!",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    },
  );

  res.json({
    message: "Todo marked as completed.",
  });
});

app.listen(3000);
