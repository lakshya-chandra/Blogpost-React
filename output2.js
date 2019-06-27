import React from "react";
class output2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let members = JSON.parse(localStorage.getItem("user"));
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
export default output2;
