import icon from "../../public/vite.svg";

const WelcomeCard = () => {
  return (
    <div className="w-96 h-96 bg-amber-100 text-black flex flex-col text-center rounded-lg shadow-lg p-2">
      <h1 className="text-2xl font-bold">Welcome!</h1>
      <p className="text-lg">We are glad to see you on our platform.</p>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img style={{ height: "80%" }} src={icon} />
      </div>
    </div>
  );
};

export default WelcomeCard;
