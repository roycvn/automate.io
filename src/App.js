import React, { Component } from 'react';
import './App.css';
import CreateWorkflow from './components/createWorkflow';
import NavBar from "./components/navbar";
import WorkflowList from "./components/workflowList";
import Login from "./components/login";

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
    editingNode: null,
    isLoggedIn: false
  };

  constructor() {
    super();
    //console.log("App Constructor");
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
      if (!workflow.id) {
        workflow.id = workshops.length + 1;
      }
      workshops.push(workflow);
    }

    this.setState(workshops);
    this.setState({ editingWorkflow: false });
    this.setState({ editingNode: null });
    this.manageCreateWindow();

    // console.log('after - save ');
    // console.log(this.state);
  }

  manageCreateWindow = () => {
    this.setState({ editingWorkflow: !this.state.editingWorkflow });
  }

  editWorkflow = (workflow) => {
    this.setState({ editingNode: workflow });
    this.manageCreateWindow();
  }

  workflowStatus = (workflow) => {
    workflow.completed = !workflow.completed;
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

  deleteWorkflow = (did) => {
    this.setState({ workflows: [...this.state.workflows.filter(wrkfl => wrkfl.id != did)] });
  }


  doLogout = () => {
    this.setState({ isLoggedIn: false });
  }

  doLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar isLoggedIn={this.state.isLoggedIn} doLogout={this.doLogout} />
        {
          this.state.isLoggedIn ? (
            this.state.editingWorkflow ?
              <CreateWorkflow onSave={this.handleSave} workflows={this.state.workflows} onClick={this.manageCreateWindow} editingNode={this.state.editingNode} />
              :
              <WorkflowList workflows={this.state.workflows} workflowStatus={this.workflowStatus} deleteWorkflow={this.deleteWorkflow} search={this.search} searchFilter={this.searchFilter} editWorkflow={this.editWorkflow} onClick={this.manageCreateWindow} />
          ) : <Login isLoggedIn={this.state.isLoggedIn} doLogin={this.doLogin} />
        }
      </React.Fragment >
    );
  }
}

export default App;
