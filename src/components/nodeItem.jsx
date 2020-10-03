import React, { Component } from 'react';
class NodeItem extends Component {

  // componentDidMount() {
  //   if (!status) {
  //     status = 3;
  //   }
  // }

  render() {
    const { title, description, id } = this.props.node;
    let status = 3;
    if (this.props.node.status) {
      status = this.props.node.status;
    }
    return (
      <div className="node-element">
        <div className="node-element-inner">
          <div className={"nodeitem-status effects  node-status-" + status} name="status" onClick={this.props.onClick.bind(this, id, status)}><i className="fas fa-check effects" ></i></div>
          <input type="text" name="title" defaultValue={title} onChange={this.props.onChange.bind(this, id)} />
          <div className="long-box">
            <textarea name="description" defaultValue={description} onChange={this.props.onChange.bind(this, id)}></textarea>
          </div>
        </div >
      </div >
    );
  }
}

export default NodeItem;