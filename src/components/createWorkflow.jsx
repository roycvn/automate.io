import React, { Component } from 'react';
import NodeItem from './nodeItem';

class CreateWorkflow extends Component {
  constructor() {
    super();
  }
  state = {
    title: '',
    id: '',
    completed: false,
    nodes: []
  };

  componentDidMount() {
    this.setState(this.props.editingNode);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   ////console.log(prevProps);
  //   ////console.log(prevState);
  // }

  updateWorkflow = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title) {
      //console.log('updating the state', this.state);
      this.props.onSave(this.state);
    }
  }

  createNode = (e) => {
    var nodes = this.state.nodes;
    nodes.push({
      title: '',
      description: '',
      status: 3,
      id: nodes.length + 1
    });

    this.setState({ nodes });
  }

  onChange = (id, e) => {
    var nodes = this.state.nodes
    nodes.map((node) => {
      if (node.id == id) {
        node[e.target.name] = e.target.value;
      }
    });
    this.setState({ nodes })
  }

  changeStatus = (id, status) => {
    let realStatus = 1;
    if (status == 3) {
      realStatus = 2;
    } else if (status == 2) {
      realStatus = 1;
    } else if (status == 1) {
      realStatus = 3;
    }

    let nodes = this.state.nodes;
    nodes.map((node) => {
      if (node.id == id) {
        node.status = realStatus;
      }
    });

    this.setState({ nodes });
  }


  deleteNode = () => {
    let nodes = this.state.nodes;
    nodes.pop();
    this.setState({ nodes });
  }

  shuffleNodes = () => {
    let nodes = this.state.nodes;
    console.log(nodes);
    nodes.sort(() => Math.random() - 0.5);
    this.setState({ nodes });
  }

  render() {
    if (!this.state.status) {
      this.state.status = 'Pending';
    }

    let counter = 1;
    this.state.nodes.map((node) => {
      if (!node.id) {
        node.id = counter++
      }
    });
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="header-container">
            <div className="inner-container">

              <div className="fl">
                <div className="inline-block-element">
                  <label htmlFor="search-bar">Workflow Title</label>
                  <div>
                    <input id="workflow-name" type="text" name="title" value={this.state.title} className="txt search-txt" onChange={this.updateWorkflow} placeholder="Workflow Title" />
                  </div>
                </div>
              </div>
              <div className="fr move-down">
                <button type="button" className={"purple-btn left-space workflow-status-option-" + this.state.status.toLowerCase()} onClick={this.shuffleNodes}><i className="fas fa-random"></i> Shuffle Nodes</button>
                <button type="button" className="danger-btn left-space" onClick={this.deleteNode}><i className="fas fa-times"></i> Delete Node</button>
                <button type="button" className="primary-btn left-space" onClick={this.createNode}><i className="fas fa-plus"></i> Create Node</button>
                <button type="submit" className="blue-btn left-space"><i className="fas fa-save"></i> Save Workflow</button>

                <button type="submit" className="left-space" onClick={this.props.onClick}><i className="fas fa-list-ul"></i> Workflow List</button>

              </div>
              <div className="cl"></div>
            </div>
          </div>
          <div className="inner-container">
            {
              this.state.nodes.map((node) => (
                <NodeItem key={node.id} node={node} onChange={this.onChange} onClick={this.changeStatus} />
              ))
            }

          </div>
        </form>
      </React.Fragment >
    );
  }
}

export default CreateWorkflow;