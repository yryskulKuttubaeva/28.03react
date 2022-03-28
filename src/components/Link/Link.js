import "./Link.css"

function App() {
    const rightLinks = ["link3","link4","link5"];
    const leftLinks = ["link1","link2"];
  
    const left = leftLinks.map((leftLink)=> {
      return (
        <li>
          {leftLink}
        </li>
      );
    })
  
    const right = rightLinks.map((rightLink)=> {
      return(
        <li>
        {rightLink}
        </li>
      );
    })
    return(
        <div className="App">
             <ul>
                 {left}
                 {right}
             </ul>
        </div>
    )}
export default Link;