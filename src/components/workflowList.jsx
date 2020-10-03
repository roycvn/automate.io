import React, { Component } from 'react';
import WorkflowItem from './workflowItem';
import SearchWorkflow from "./searchWorkflow";


class WorkflowList extends Component {

  render() {
    const { workflows } = this.props;
    return (
      <React.Fragment>
        <SearchWorkflow workflows={this.props.workflows} search={this.props.search} onClick={this.props.onClick} />
        <div className="inner-container">
          {workflows.map((workflow) => (
            <WorkflowItem key={workflow.id} workflow={workflow} onClick={this.props.editWorkflow} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default WorkflowList;