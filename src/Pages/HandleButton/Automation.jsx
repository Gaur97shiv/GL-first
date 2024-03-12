import React from 'react';

const Automation = () => {
  const linkToPresentation = "https://docs.google.com/presentation/d/1oy1UIjqVA_g25OVlYRuQBpzvgf_TBYQm/embed?start=false&loop=false&delayms=3000";
  
  return (
    <div>
      <h2>Embedded Google Slides Presentation</h2>
      <iframe
        title="Google Slides Presentation"
        src={linkToPresentation}
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Automation;
