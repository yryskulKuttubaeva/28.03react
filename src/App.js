import Link from "./components/Link/Link"

function App() {
  const rightLinks = ["link3","link4","link5"];
  const leftLinks = ["link1","link2"];

return (
  <div className="App">
    <ul>
      {rightLinks}
      {leftLinks}
    </ul>
  </div>
)

}


export default App;
