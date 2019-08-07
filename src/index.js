import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from './store'


class App extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
  }
  onChange = (e) => {
    const action = {
      type: 'addTodo',
      value: e.target.value
    }
    store.dispatch(action)
  }
  render() {
    return (
      <Fragment>
        <div style={{ margin: "10px 10px" }}>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "3px" }}
            onChange={this.onChange}
          />
          <Button type="primary">add</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
