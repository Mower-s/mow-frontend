import React from "react";
import ExportModal from './exportModal';
import '../../styles/exportModal.css';
class UserNav extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
      return (
          <div className="user-nav">
          <div className="users" id="users">
            <div className="user-icon">
              <h1 className="user-icon-title">AK</h1>
            </div>
          </div>
          <div className="user-count">+ 0</div>
          <div className="invite" id="invite"> INVITE</div>
          <div className="export" id="export" onClick={e => {
            this.showModal(e);
          }}> EXPORT</div>
          <ExportModal onClose={this.showModal} show={this.state.show}/>
        </div>
      );
  }
  }

  export default UserNav;