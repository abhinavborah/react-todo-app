export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="transition-colors border-2 rounded-lg p-2 m-4 shadow-sm">
            <h1 className="text-black font-bold font-mono text-lg p-2 m-2 focus:outline-blue-300">
              {todo.title}
            </h1>
            <h2 className="text-black font-mono p-2 m-2 focus:outline-blue-300">
              {todo.description}
            </h2>

            <button className="text-sm font-mono transition-colors bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 m-2 border border-green-400 hover:border-transparent rounded shadow-md focus:outline-green-400">
              {todo.completed == true ? "Completed" : "Mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
