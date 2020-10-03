import React, { Component } from 'react';
import './App.css';
import CreateWorkflow from './components/createWorkflow';
import NavBar from "./components/navbar";
import WorkflowList from "./components/workflowList";

class App extends Component {
  state = {
    workflows: [
      {
        title: 'Workflow 1',
        id: 1,
        completed: true,
        nodes: [
          {
            title: 'Task 1',
            description: 'Task1 Description goes here',
            completed: true,
            sortOrder: 1,
            id: 1
          },
          {
            title: 'Task 2',
            description: 'Task2 Description goes here',
            completed: true,
            sortOrder: 2,
            id: 2
          }
        ]
      },

      {
        title: 'Workflow 2',
        completed: false,
        id: 2,
        nodes: [
          {
            title: 'Task 21',
            description: 'Task21 Description goes here',
            completed: false,
            sortOrder: 1,
            id: 1
          },
          {
            title: 'Task 22',
            description: 'Task22 Description goes here',
            completed: false,
            sortOrder: 2,
            id: 2
          }
        ]
      }
    ],
    editingWorkflow: false,
    editingNode: null
  };

  constructor() {
    super();
    console.log("App Constructor");
  }

  handleSave = (workflow) => {
    console.clear();
    var workshops = this.state.workflows;
    if (workflow.id) {
      workshops.map((workflowNode) => {
        if (workflowNode.id == workflow.id) {
          Object.assign(workflowNode, workflow)
        }
      });
    } else {
      workshops.push(workflow);
    }

    this.setState(workshops);
    // this.setState({ editingWorkflow: false });
    // this.setState({ editingNode: null });
    this.manageCreateWindow();
  }

  manageCreateWindow = () => {
    this.setState({ editingWorkflow: !this.state.editingWorkflow });
  }

  editWorkflow = (workflow) => {
    this.setState({ editingNode: workflow });
    this.manageCreateWindow();
  }

  search = (e) => {
    var txt = e.target.value;
    var workflows = this.state.workflows;

    workflows.map((workflow) => {
      workflow.displayState = false;
      if (txt.length > 0) {
        if (workflow.title.toLowerCase().includes(txt.toLowerCase())) {
          workflow.displayState = true;
        }
      } else {
        workflow.displayState = true;
      }
    });
    this.setState({ workflows });
  }

  searchFilter = (status) => {
    var workflows = this.state.workflows;
    workflows.map((workflow) => {
      workflow.displayState = true;
      if (status != 'mixed') {
        if (workflow.completed != status) {
          workflow.displayState = false;
        }
      }
    });
    this.setState({ workflows });
  }


  render() {
    return (
      <React.Fragment>
        <NavBar />
        {
          this.state.editingWorkflow ?
            <CreateWorkflow onSave={this.handleSave} workflows={this.state.workflows} onClick={this.manageCreateWindow} editingNode={this.state.editingNode} />
            :
            <WorkflowList workflows={this.state.workflows} search={this.search} searchFilter={this.searchFilter} editWorkflow={this.editWorkflow} onClick={this.manageCreateWindow} />
        }
      </React.Fragment >
    );
  }
}

export default App;
