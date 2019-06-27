import React from "react";

class Blog extends React.Component {
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
    const array = [];
    let data = JSON.parse(localStorage.getItem("member"));
    if (data != null) {
      data.map(function(v) {
        array.push(v);
      });
    }
    array.push(this.state);
    console.log(array);
    localStorage.setItem("member", JSON.stringify(array));
  }
  render() {
    return (
      <div>
        <div className="container">
          <p className="text:">
            The English word football may mean any one of several team sports
            (or the ball used in that respective sport), depending on the
            national or regional origin and location of the person using the
            word. So where English is a first language the unqualified use of
            the word football is used to refer to the most popular code of
            football in that region. The sports most frequently referred to as
            simply football are Association football, American football,
            Australian rules football, Canadian football, Gaelic football, rugby
            league football and rugby union football.
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
export default Blog;
