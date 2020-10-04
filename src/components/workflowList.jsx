import React, { Component } from 'react';
import WorkflowItem from './workflowItem';
import SearchWorkflow from "./searchWorkflow";


class WorkflowList extends Component {

  render() {
    const { workflows } = this.props;
    // let counter = 1;
    // workflows.map((workflow) => {
    //   if (!workflow.id) {
    //     workflow.id = counter++
    //   }
    // });
    return (
      <React.Fragment>
        <div className="header-container">
          <SearchWorkflow workflows={this.props.workflows} search={this.props.search} searchFilter={this.props.searchFilter} onClick={this.props.onClick} />
        </div>
        <div className="inner-container">
          {workflows.map((workflow) => (
            <WorkflowItem key={workflow.id} workflow={workflow} workflowStatus={this.props.workflowStatus} deleteWorkflow={this.props.deleteWorkflow} onClick={this.props.editWorkflow} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default WorkflowList;