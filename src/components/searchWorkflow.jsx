import React, { Component } from 'react';
class SearchWorkflow extends Component {
  render() {
    //console.log(this.props);
    return (<React.Fragment>
      <div className="inner-container">
        <div className="fl">
          <div className="inline-block-element">
            <label htmlFor="search-bar">Search workflows based on workflow name</label>
            <div className="outer-txt-field no-margin">
              <i className="fas fa-search"></i>
              <input id="search-bar" type="search" className="outer-txt search-txt" onChange={this.props.search.bind(this)} placeholder="Search Workflows" />
            </div>
          </div>
          <div className="inline-block-element filter-element">
            <button type="button"><i className="fas fa-filter"></i> Filter</button>
            <ul className="filter-option-list">
              <li><div className="filter-option" onClick={this.props.searchFilter.bind(this, 'mixed')}>ALL</div></li>
              <li><div className="filter-option" onClick={this.props.searchFilter.bind(this, true)}>COMPLETED</div></li>
              <li><div className="filter-option" onClick={this.props.searchFilter.bind(this, false)}>PENDING</div></li>
            </ul>
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