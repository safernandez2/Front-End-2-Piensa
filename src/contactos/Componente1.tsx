import React from 'react';
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  
  const Nombres: React.FC = () => (
    
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Steven Fernandez</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Pedro Pelgarin</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Francisco Hererdia</h3>
    </div>
    
    </Carousel>
);




export default Nombres;