import React, { Component } from 'react';
class SearchWorkflow extends Component {
  render() {
    console.log(this.props);
    return (<React.Fragment>
      <div className="inner-container">
        <div className="fl">
          <div className="inline-block-element">
            <label htmlFor="search-bar">Search workflows based on workflow name</label>
            <div>
              <input id="search-bar" type="search" className="txt search-txt" onChange={this.props.search.bind(this)} placeholder="Search Workflows" />
            </div>
          </div>
          <div className="inline-block-element filter-element">
            <button type="button"><i className="fas fa-filter"></i> Filter</button>
          </div>
        </div>
        <div className="fr move-down">
          <button type="button" className="primary-btn" onClick={this.props.onClick}><i className="fas fa-plus"></i> Create Workflow</button>
        </div>
        <div className="cl"></div>
      </div>
    </React.Fragment >);
  }
}


export default SearchWorkflow;