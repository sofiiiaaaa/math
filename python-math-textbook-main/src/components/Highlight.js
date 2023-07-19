import React from 'react';

const Highlight = ({ children, color }) => (
  <div
    style={{
      // backgroundColor: color,
      // color: '#000',
      padding: '10px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'var(--ifm-font-color-base)',
      borderRadius: '5px',
      margin: '10px 0',
    }}
  >
    {children}
  </div>
);

export default Highlight;
