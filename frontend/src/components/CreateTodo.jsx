export function CreateTodo() {
  return (
    <div className="flex justify-center align-middle mb-6">
      <input
        className="font-mono max-w-md w-1/6 shadow-md border rounded-md p-2 m-2 focus:outline-blue-300"
        type="text"
        placeholder="Title"
      ></input>
      <input
        className="font-mono w-3/6 shadow-md border rounded-md p-2 m-2 focus:outline-blue-300"
        type="text"
        placeholder="Description"
      ></input>

      <button className="font-mono transition-colors bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-2 px-4 m-2 border border-blue-300 hover:border-transparent rounded shadow-md focus:outline-blue-300">
        Add a todo
      </button>
    </div>
  );
}
