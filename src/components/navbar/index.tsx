const NavBar = () => {
  return (
    <div className="w-full bg-moralis1 py-3">
      <div className="flex">
        <div className="w-3/6 py-2 pl-2 pr-16">
          <input
            className="transition ease-in-out delay-100 hover:border-slate-500 duration-150 placeholder:italic placeholder:text-sky-900 block bg-moralis-search w-full rounded-full border-solid border-2 border-sky-950 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-900 focus:ring-sky-900 focus:ring-1 sm:text-sm"
            placeholder="Search for any token or wallet"
            type="text"
            name="search"
          />
        </div>
        <div className="w-2/6"></div>
        <div className="w-1/6 py-2">
          <button className="transition ease-in-out delay-100 hover:border-sky-300 duration-150 rounded-md border border-sky-500 text-sky-500 py-2 px-2">
            {"->) Login / Connect"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
