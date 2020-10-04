import React, { Component } from 'react';

class WorkflowItem extends Component {
  render() {
    const { workflow } = this.props;
    let nodesCompleted = 0;
    let nodesPending = 0;
    let nodesProgress = 0;
    workflow.nodes.map((node) => (
      (node.status == 1) ? nodesCompleted = nodesCompleted + 1 : ((node.status == 2) ? nodesProgress = nodesProgress + 1 : nodesPending = nodesPending + 1)
    ))

    workflow.completed = (nodesCompleted == workflow.nodes.length) ? true : false;
    workflow.status = (workflow.completed) ? 'Completed' : 'Pending';

    if (workflow.displayState != false) {
      workflow.displayState = true;
    }

    if (workflow.displayState == false) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="workflow-item-container effects">
          <div className={"workflowItem-delete effects workflow-status-option-" + workflow.status.toLowerCase()} onClick={this.props.deleteWorkflow.bind(this, workflow.id)}><i className="fas fa-trash effects"></i></div>

          <div className="worflow-item">
            <div className="workflow-title">{workflow.title} </div>
            <div className="quickLink" onClick={this.props.onClick.bind(this, workflow)}><i className="far fa-edit"></i> Edit Workflow</div>
            <div className="workflow-status">
              {workflow.status}
              <div className="workflow-status-icon">
                <i className={'fas fa-check-circle workflow-' + workflow.status.toLowerCase()}></i>
              </div>
            </div>
            <div className="nodes-count">
              Tasks #{workflow.nodes.length}

              <div className="nodes-completed-status">
                Completed #{nodesCompleted}, Progress #{nodesProgress}, Pending #{nodesPending}
              </div>
            </div>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default WorkflowItem;