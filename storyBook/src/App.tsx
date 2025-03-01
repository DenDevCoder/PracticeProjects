import WelcomeCard from "./components/WelcomeCard";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <WelcomeCard />
      <div className=" mt-2.5 flex items-center justify-between px-2 w-96">
        <button className="px-4 py-2 bg-amber-400 rounded-xl hover:bg-amber-600">
          Back
        </button>
        <button className="px-4 py-2 bg-amber-400 rounded-xl hover:bg-amber-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
