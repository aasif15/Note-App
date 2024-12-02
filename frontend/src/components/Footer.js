import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Format the time for Canada Eastern Time Zone
  const options = {
    timeZone: 'America/Toronto', // Eastern Time Zone
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // Use 12-hour format with AM/PM
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedTime = new Intl.DateTimeFormat('en-CA', options).format(currentTime);

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>{formattedTime}</p>
    </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#343a40',
  color: 'white',
  textAlign: 'center',
  padding: '5px 0',
  boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
};

const textStyle = {
  margin: 0,
  fontSize: '13px',
};

export default Footer;
