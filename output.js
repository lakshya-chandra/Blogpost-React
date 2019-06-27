import React from "react";
class output extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let members = JSON.parse(localStorage.getItem("member"));
    if (members != null) {
      const element = members.map((item, index) => {
        return (
          <div key={index} className="container">
            <ul>
              <li>{item.comment}</li>
            </ul>
          </div>
        );
      });
      return <div>{element}</div>;
    }
  }
}
export default output;
