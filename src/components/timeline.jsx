function Timeline() {
    return (
        <div className="timeline">
        <div className="scale">
          <div>
            <span className="time-unit" style={{left: '2%'}}>0s</span>
            <span className="unit-line" style={{left: '2.5%'}}>-</span>
            <span className="time-unit" style={{left: '12%'}}>0.5s</span>
            <span className="unit-line" style={{left: '12.5%'}}>-</span>
            <span className="time-unit" style={{left: '22%'}}>1s</span>
            <span className="unit-line" style={{left: '22.5%'}}>-</span>
            <span className="time-unit" style={{left: '32%'}}>1.5s</span>
            <span className="unit-line" style={{left: '32.5%'}}>-</span>
            <span className="time-unit" style={{left: '42%'}}>2s</span>
            <span className="unit-line" style={{left: '42.5%'}}>-</span>
            <span className="time-unit" style={{left: '52%'}}>2.5s</span>
            <span className="unit-line" style={{left: '52.5%'}}>-</span>
            <span className="time-unit" style={{left: '62%'}}>3s</span>
            <span className="unit-line" style={{left: '62.5%'}}>-</span>
            <span className="time-unit" style={{left: '72%'}}>3.5s</span>
            <span className="unit-line" style={{left: '72.5%'}}>-</span>
            <span className="time-unit" style={{left: '82%'}}>4s</span>
            <span className="unit-line" style={{left: '82.5%'}}>-</span>
            <span className="time-unit" style={{left: '92%'}}>4.5s</span>
            <span className="unit-line" style={{left: '92.5%'}}>-</span>
            {/* <span class="time-unit" style="left: 630px;">5s</span>
                <span class="unit-line" style="left: 637px;">-</span> */}
          </div>
        </div>
        <div className="slider" />
      </div>
    );
  }

  export default Timeline;