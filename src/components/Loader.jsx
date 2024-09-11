import { dotPulse, grid } from "ldrs";

const Loader = () => {
  dotPulse.register();
  grid.register();
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-none">
      <l-grid size="150" speed="1.5" color="rgb(90,20,219)"></l-grid>
      {/* <l-dot-pulse size="120" speed="1.3" color="rgb(90,20,219)"></l-dot-pulse> */}
    </div>
  );
};

export default Loader;

// Default values shown
