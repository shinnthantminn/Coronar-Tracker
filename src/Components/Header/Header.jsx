import Logo from "../../Access/image.png";

function Header({ data: lastUpdate }) {
  return (
    <div>
      <div className='flex justify-between font-["IBM_Plex_Sans_Thai"] mb-10 font-bold text-gray-500'>
        <div>
          <h1 className="hidden sm:block ">COVID-19 Coronavirus Tracker</h1>
          <h1 className="block sm:hidden text-sm sm:text-base">
            COVID-19 Tracker
          </h1>
        </div>
        <div>
          <p className="hidden sm:block">
            Updated{" "}
            {lastUpdate ? new Date(lastUpdate).toUTCString() : "Loading..."}
          </p>
          <p className="block text-sm sm:hidden">
            Updated{" "}
            {lastUpdate ? new Date(lastUpdate).toDateString() : "Loading..."}
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
