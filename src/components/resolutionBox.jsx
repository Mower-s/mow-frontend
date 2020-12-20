function ResolutionBox() {
    return (
        <div>
        <div className="resolution-box" style={{left: '15%'}}>
          <svg id="resolution-box-icon" width={120} height={68} viewBox="0 0 120 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x={1} y={1} width={118} height={66} rx={6} stroke="#66676C" strokeWidth={2} />
            <path d="M0 5C0 2.23858 2.23858 0 5 0H18V68H5C2.23858 68 0 65.7614 0 63V5Z" fill="#66676C" />
            <path d="M102 0H115C117.761 0 120 2.23858 120 5V63C120 65.7614 117.761 68 115 68H102V0Z" fill="#66676C" />
            <rect x={4} y={3} width={10} height={9} fill="#28282D" />
            <rect x={106} y={3} width={10} height={9} fill="#28282D" />
            <rect x={4} y={20} width={10} height={10} fill="#28282D" />
            <rect x={106} y={20} width={10} height={10} fill="#28282D" />
            <rect x={4} y={37} width={10} height={10} fill="#28282D" />
            <rect x={106} y={37} width={10} height={10} fill="#28282D" />
            <rect x={4} y={55} width={10} height={10} fill="#28282D" />
            <rect x={106} y={55} width={10} height={10} fill="#28282D" />
          </svg>
          <span className="resolution">1920 x 1080</span>
          <span className="resolution-box-title">For Cinematic reels</span>
        </div>
        <div className="resolution-box" style={{left: '35%'}}>
          <svg id="resolution-box-icon" style={{left: '30%'}} width={89} height={80} viewBox="0 0 89 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x={1} y={1} width={87} height={66} rx={6} stroke="#66676C" strokeWidth={2} />
            <rect x={1} y={59} width={87} height={8} rx={4} fill="#66676C" stroke="#66676C" strokeWidth={2} />
            <rect x={-1} y={1} width={6} height={10} rx={1} transform="matrix(-1 0 0 1 46 65)" fill="#66676C" stroke="#66676C" strokeWidth={2} />
            <rect x={-1} y={1} width={20} height={2} rx={1} transform="matrix(-1 0 0 1 53 76)" fill="#66676C" stroke="#66676C" strokeWidth={2} />
          </svg>            
          <span className="resolution" style={{right: '15%'}}>1600 x 1200</span>
          {/* <span class="resolution-box-title">For Desktop</span> */}
        </div>
        <div className="resolution-box" style={{left: '55%'}} />
        <div className="resolution-box" style={{left: '75%'}} />
      </div>
    );
  }

  export default ResolutionBox;