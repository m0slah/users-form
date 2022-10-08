import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

const App = () => {

  

  return (
      <div className="App">
        <AddUser />
        <UserList  /> 
      </div>
  );
};

export default App;
