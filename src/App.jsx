import { Box } from "@mui/material";
import Menu from "./Menu";
import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  /* width: 560px; */
`;

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

  const disabledButton = input.length <= 3;
  const submitButtonEnabled =
    "p-2 mt-2 mr-4 font-bold text-gray-100 bg-orange-500 border-opacity-75 rounded-md border-spacing-1 shadow-orange-600 shadow-lg";
  const submitButtonDisabled =
    "p-2 mt-2 mr-4 font-bold text-gray-100 bg-gray-600 border-opacity-75 rounded-md border-spacing-1 cursor-not-allowed shadow-sm shadow-gray-600";

  return (
    <>
      <div className="flex flex-col text-center text-sky-950">
        <h1 className="text-5xl">Fetching Menus</h1>
        <Box
          sx={{
            margin: "10px auto",
          }}
        >
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center w-10 pl-2 pr-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_15_152)">
                  <rect width="24" height="24" fill="" />
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="#36454F" />
                  <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="#36454F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_152">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <Input
              type="text"
              name="search"
              id="menu"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="block sm:w-[460px] w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-cyan-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:text-sm sm:leading-6 shadow-xl focus:border-cyan-400 focus:outline-none"
              placeholder="eg. pizza, chicken"
            />
          </label>
          <div className="pt-2">
            <button
              type="button"
              disabled={disabledButton}
              className={
                disabledButton ? submitButtonDisabled : submitButtonEnabled
              }
              onClick={handleClick}
            >
              Submit
            </button>
            <button
              className="p-2 mt-2 font-semibold text-gray-100 border-opacity-75 rounded-md hover:bg-cyan-400 bg-cyan-500 border-spacing-1"
              onClick={handleReset}
            >
              reset
            </button>
          </div>
        </Box>
        <Box sx={{ margin: "auto" }}>
          <Menu menu={menu} isClicked={isclicked} />
        </Box>
      </div>
    </>
  );
}

export default App;
