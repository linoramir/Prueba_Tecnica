const SideBar = () => {
  return (
    <div className="w-1/4 border-solid border-2 border-sky-500 H-Full bg-moralis-sidebar px-8">
      <button className="w-4/5 border-solid border-2 border-transparent text-wrap text-slate-200 px-8 py-8">
        Jaja Moralis pirata
      </button>
      <nav>
        <button className="w-4/5 border-solid border-2 border-transparent transition ease-in-out delay-50 hover:bg-sky-900 duration-150 rounded-lg text-slate-300 px-2 py-2">
          Market Overview ↓
        </button>
        <button className="w-4/5 border-solid border-2 border-transparent transition ease-in-out delay-50 hover:bg-sky-900 duration-150 rounded-lg text-slate-300 px-2 py-2">
          Research ↓
        </button>
        <button className="w-4/5 border-solid border-2 border-transparent transition ease-in-out delay-50 hover:bg-sky-900 duration-150 rounded-lg text-slate-300 py-2 px-2">
          Saved
        </button>
        <button className="w-4/5 border-solid border-2 border-transparent transition ease-in-out delay-50 hover:bg-sky-900 duration-150 rounded-lg text-slate-300 py-2 px-2">
          Learn ↓
        </button>
        <button className="w-4/5 border-solid border-2 border-transparent transition ease-in-out delay-50 hover:bg-sky-900 duration-150 rounded-lg text-slate-300 py-2 px-2">
          Seattings
        </button>
        <button className="w-4/5 border-solid border-2 border-transparent transition ease-in-out delay-50 hover:bg-sky-900 duration-150 rounded-lg text-slate-300 py-2 px-2">
          Api for Devs
        </button>
      </nav>
      <button className=" w-5/6 border-solid border-2 border-sky-900 transition ease-in-out delay-50 hover:border-slate-400 hover:text-slate-200 duration-150 rounded-lg text-slate-400 px-2 py-2">
        {"-> Start Trial"}
      </button>
    </div>
  );
};
export default SideBar;
