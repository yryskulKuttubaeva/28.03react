import NavBar from "./components/Link/Link";
import User from "./components/User/User";


function App() {

  const styles = {
    display: "block",
  };


  return (
    <div className="App">
      
        <nav style={styles}>
          
          <NavBar inlines/>


        </nav>

        <div>
          <User/>
        </div>
    </div>
  );
}

export default App;