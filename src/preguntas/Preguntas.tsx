import React from 'react';
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  
  const App: React.FC = () => (
    
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Steven FDZ</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Pedro PGN</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Francisco HRD</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Project Piensa</h3>
    </div>
    </Carousel>
);




export default App;