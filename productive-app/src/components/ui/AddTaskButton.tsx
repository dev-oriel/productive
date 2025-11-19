"use client";
/**NEW TASK BUTTON */
import React from 'react';

const NewTaskButton = () => {
  const buttonStyle = {
    // Main Button Styling
    backgroundColor: '#2AB77C', // Your requested color
    color: '#FFFFFF',           // White text
    padding: '8px 15px',
    border: 'none',
    cursor: 'pointer',
    
    // Text Style
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    
    // Rounded Corners
    borderRadius: '6px', 
    
    // Key Effect 1: Outer Blue Glow/Border (box-shadow)
    // In React, multiple shadows are specified in a comma-separated string
    boxShadow: '0 0 5px rgba(158, 161, 163, 0.32), 0 0 10px rgba(158, 164, 167, 0.4)',    
    // Key Effect 2: Text Shading/Glow (text-shadow)
    textShadow: '0 1px 0 rgba(0, 0, 0, 0.4), 0 0 3px rgba(255, 255, 255, 0.5)',
    
    // Key Effect 3: Inner White Border/Highlight (Using outline properties)
    outline: '1px solid rgba(255, 255, 255, 0.3)',
    outlineOffset: '-1px',
    
    // Standard button layout
    display: 'inline-block',
    textAlign: 'center',
    transition: 'background-color 0.3s, box-shadow 0.3s', // For hover effect
  };

  // Note: Handling `:hover` and `:active` pseudo-classes requires
  // using state or a dedicated CSS file/Styled Components for a clean implementation.
  // For basic inline styles, we just provide the default look.

  return (
    <button 
      style={buttonStyle}
      onClick={() => alert('New Task Button Clicked!')}
    >
      + New Task
    </button>
  );
};

export default NewTaskButton;