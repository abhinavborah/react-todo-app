import { useState } from "react";
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex justify-center align-middle mb-6">
      <input
        className="font-mono max-w-md w-1/6 shadow-md border rounded-md p-2 m-2 focus:outline-blue-300"
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <input
        className="font-mono w-3/6 shadow-md border rounded-md p-2 m-2 focus:outline-blue-300"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>

      <button
        className="font-mono transition-colors bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-2 px-4 m-2 border border-blue-300 hover:border-transparent rounded shadow-md focus:outline-blue-300"
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            if (json) {
              alert("Todo has been added!");
            } else {
              alert("Todo cannot be added.");
            }
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
