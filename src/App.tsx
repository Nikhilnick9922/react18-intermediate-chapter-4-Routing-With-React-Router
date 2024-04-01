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

// Introduction 


//  we will learn 

//  Setting up routes
//  Handling Errors 
//  Navigating Between apges 
//  Dynamic routes
//  Nested routes
//  Private routes


//  by the end of it , we will be able to build complex and multipage application 