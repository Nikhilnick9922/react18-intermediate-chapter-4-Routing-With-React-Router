import Counter from "./state-management/Counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/Tasks";

function App() {
  return (
    <>
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </>
  );
}
export default App;

//  2. Setting Up Routing

// npm i react-router-dom@6.10.0

//  routing -> routes.tsx   // create new file
