function RecentBox() {
    return (
        <div>
        <h1 className="recent"> Recent</h1>
        <div className="recent-box" style={{left: '5%'}}>
          <img src="" alt="recent-project-thumbnail" className="recent-img" /> 
          <h1>File Name</h1>
        </div>
        <div className="recent-box" style={{left: '25%'}} />
        <div className="recent-box" style={{left: '45%'}} />
        <div className="recent-box" style={{left: '65%'}} />
      </div>
    );
  }

  export default RecentBox;