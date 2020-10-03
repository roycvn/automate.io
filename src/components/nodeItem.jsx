import React, { Component } from 'react';
class NodeItem extends Component {

  render() {
    const { title, description, status, id } = this.props.node;
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