import "./Link.css";
function Link() {
  const rightLinks = ["link3", "link4", "link5"];
  const leftLinks = ["link1", "link2"];

  const left = leftLinks.map((leftlink) => {
    return (
      <li>
        <a href="#">{leftlink}</a>
      </li>
    )
  })
  const right = rightLinks.map((rightlink) => {
    return (
      <li>
        <a href="#">{rightlink}</a>
      </li>
    )
  })

return (
<div className="Div">
  <ul>{left} {right}</ul>
 
</div>
)
}

export default Link;