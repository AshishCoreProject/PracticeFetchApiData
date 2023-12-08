import { Box } from "@mui/material";
import Menu from "./Menu";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [menu, setMenu] = useState("");
  const [isclicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(() => true);
    setMenu(input);
    setInput("");
    console.log(menu);
  }
  function handleReset() {
    setIsClicked(() => false);
    setMenu("");
  }

  return (
    <>
      <div className="text-center text-sky-950">
        <h1 className="text-5xl">Fetching Menus</h1>
        <Box
          sx={{
            width: "400px",
            margin: "10px auto",
          }}
        >
          <input
            type="text"
            name="menu"
            id="menu"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="eg. pizza, chicken"
          ></input>
          <button
            type="button"
            disabled={Boolean(!input)}
            className="p-2 mt-2 mr-4 font-bold text-gray-100 bg-orange-500 border-opacity-75 rounded-md border-spacing-1"
            onClick={handleClick}
          >
            Submit
          </button>
          <button
            className="p-2 mt-2 font-semibold text-gray-100 border-opacity-75 rounded-md bg-cyan-500 border-spacing-1"
            onClick={handleReset}
          >
            reset
          </button>
        </Box>
        <Box sx={{ margin: "auto" }}>
          <Menu menu={menu} isClicked={isclicked} />
        </Box>
      </div>
    </>
  );
}

export default App;
