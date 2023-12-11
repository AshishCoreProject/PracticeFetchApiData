import { CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div className="relative z-10 mx-auto text-xl font-bold text-sky-700">
      <CircularProgress
        value={100}
        sx={{ color: "rgb(37 99 235)", fontSize: "200px" }}
      />
    </div>
  );
}

export default Loader;
