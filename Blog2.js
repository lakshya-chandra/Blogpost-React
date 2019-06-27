import React from "react";

class Blog2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      print: this.state.comment
    });
    console.log(this.state);
    const array1 = [];
    let data = JSON.parse(localStorage.getItem("user"));
    if (data != null) {
      data.map(function(v) {
        array1.push(v);
      });
    }
    array1.push(this.state);
    console.log(array1);
    localStorage.setItem("user", JSON.stringify(array1));
  }
  render() {
    return (
      <div>
        <div className="container">
          <p className="text:">
            Cricket is a bat-and-ball game played between two teams of eleven
            players on a field at the centre of which is a 20-metre (22-yard)
            pitch with a wicket at each end, each comprising two bails balanced
            on three stumps. The batting side scores runs by striking the ball
            bowled at the wicket with the bat, while the bowling and fielding
            side tries to prevent this and dismiss each player (so they are
            "out"). Means of dismissal include being bowled, when the ball hits
            the stumps and dislodges the bails, and by the fielding side
            catching the ball after it is hit by the bat, but before it hits the
            ground. When ten players have been dismissed, the innings ends and
            the teams swap roles. The game is adjudicated by two umpires, aided
            by a third umpire and match referee in international matches. They
            communicate with two off-field scorers who record the match's
            statistical information.
          </p>
        </div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="container">
            <textarea
              rows="3"
              cols="20"
              placeholder="Write Comment here"
              onChange={e => this.setState({ comment: e.target.value })}
            />
          </div>
          <div className="container">
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Blog2;
