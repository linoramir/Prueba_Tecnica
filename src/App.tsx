import { BubbleContainer, NavBar, SideBar, Paged } from "./components";
const App = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-3/4">
          <NavBar />
          <BubbleContainer />
          <Paged />
        </div>
      </div>
    </>
  );
};
export default App;
