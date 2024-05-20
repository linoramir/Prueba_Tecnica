const Paged = () => {
  const paginas = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="bg-moralis-bubble-container h-11 px-8 py-1">
      <div>
        <button className="join-item btn btn-outline border-solid border-2 rounded-l-lg border-slate-700 transition ease-in-out delay-50 hover:border-slate-500 duration-150 text-slate-200 w-8">
          {"<-"}
        </button>
        {paginas.map((pagina) => {
          return (
            <button className="border-solid border-2 rounded border-slate-700 transition ease-in-out delay-50 hover:border-slate-500 duration-150 text-slate-200 w-8 mx-1">
              {pagina}
            </button>
          );
        })}
        <button className="join-item btn btn-outline border-solid border-2 rounded-r-lg border-slate-700 transition ease-in-out delay-50 hover:border-slate-500 duration-150 text-slate-200 w-8 mx-1">
          {"->"}
        </button>
      </div>
    </div>
  );
};

export default Paged;
