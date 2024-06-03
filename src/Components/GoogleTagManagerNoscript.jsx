import React from 'react';

const GoogleTagManagerNoscript = ({ id }) => {
  return (
    <noscript>
      <iframe
        title='skyblossom'
        src={'https://www.googletagmanager.com/ns.html?id=GTM-5X7MZ7RK'}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  );
};

export default GoogleTagManagerNoscript;
