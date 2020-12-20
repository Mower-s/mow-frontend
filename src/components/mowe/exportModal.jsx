import React from "react";
import PropTypes from "prop-types";
export default class ExportModal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
    render() {
        if (!this.props.show) {
            return null;
          }
    return (
        <div className="export-container">
        <h1 className="export-title">Export as (format)</h1>
        <h1 className="input-title">Name</h1>
        <input type="text" className="export-name" id="export-name" placeholder="filename.format" /> 
        <h1 className="input-title" style={{top: '50%'}}>Quality</h1>
        <span className="quality-box">1080p</span>
        <span className="quality-box" style={{left: '35%', background: 'none'}}>480p</span>
        <span className="quality-box" style={{left: '60%', background: 'none'}}>360p</span>
        <span className="cancel-button" onClick={this.onClose}>Cancel</span>
        <span className="export-button">Export</span>
      </div>
    );
  }
}
ExportModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};