import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
      complete: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }

  handleSubmit() {
    if (this.state.inputValue === "") {
      alert("You should write a task!");
    } else {
      const list = [...this.state.list];
      list.push(this.state.inputValue);
      this.setState({
        list
      });
    }
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleDelete(index) {
    let copy = [...this.state.list];
    copy.splice(index, 1);
    this.setState({
      list: copy
    });
  }
  markComplete() {
    this.setState({
      complete: true
    });
  }

  render() {
    const items = this.state.list.map((item, index) => (
      <div key={index} id="each">
        <p
          style={this.state.complete ? "line-through" : {}}
          onClick={this.markComplete}
        >
          {item}
        </p>
        <i
          className="fa fa-trash"
          onClick={this.handleDelete.bind(undefined, index)}
        ></i>
      </div>
    ));

    return (
      <div id="all">
        <h1 id="text">Write your list</h1>
        <input
          id="input"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <button onClick={this.handleSubmit} id="button">
          +
        </button>
        <div id="items">{items}</div>
      </div>
    );
  }
}
