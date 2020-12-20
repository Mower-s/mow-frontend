function RecentBox() {
    return (
        <div>
        <h1 className="recent"> Recent</h1>
        <div className="recent-box" style={{left: '5%'}}>
          <img src="no-photo.jpg" className="recent-img" /> 
          <h1>File Name</h1>
        </div>
        <div className="recent-box" style={{left: '25%'}} />
        <div className="recent-box" style={{left: '45%'}} />
        <div className="recent-box" style={{left: '65%'}} />
      </div>
    );
  }

  export default RecentBox;