import { useEffect } from 'react';
import * as Babel from '@babel/standalone';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './OutputPreview.css';

const OutputPreview = ({ code, expectedOutput, setIsCorrect }) => {
  useEffect(() => {
    let root;
    const outputContainer = document.getElementById('preview-container');
    const previewContent = document.createElement('div');
    previewContent.className = 'preview-result';
    
    const updatePreview = () => {
      try {
        // Transform JSX to JavaScript
        const transformedCode = Babel.transform(code, {
          presets: ['react'],
          filename: 'preview.jsx',
        }).code;

        // Create a function from the transformed code
        const executeCode = new Function('React', 'ReactDOM', `
          const { useState, useEffect, useRef } = React;
          ${transformedCode}
          return Preview;
        `)(React, { createRoot });

        // Clear previous content and create new root if needed
        if (!root) {
          outputContainer.innerHTML = '';
          outputContainer.appendChild(previewContent);
          root = createRoot(previewContent);
        }

        // Render the component
        root.render(React.createElement(executeCode));

        // Check if output matches expected output
        setTimeout(() => {
          const currentOutput = previewContent.textContent.trim();
          const isOutputCorrect = currentOutput === expectedOutput;
          setIsCorrect(isOutputCorrect);

          // Remove any existing messages
          const existingMessages = outputContainer.querySelectorAll('.success-message, .error-message');
          existingMessages.forEach(msg => msg.remove());

          if (isOutputCorrect) {
            const successElement = document.createElement('div');
            successElement.className = 'success-message';
            successElement.innerHTML = `
              <span>✨ Excellent Work!</span>
              <p>You've solved this challenge successfully. Click the "Next Question" button to continue!</p>
            `;
            outputContainer.appendChild(successElement);
          }
        }, 100);

      } catch (error) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerHTML = `
          <span>⚠️ Error:</span>
          <pre>${error.message.split('\n')[0]}</pre>
        `;
        outputContainer.innerHTML = '';
        outputContainer.appendChild(previewContent);
        outputContainer.appendChild(errorElement);
        setIsCorrect(false);
      }
    };

    updatePreview();

    return () => {
      if (root) {
        root.unmount();
      }
    };
  }, [code, expectedOutput, setIsCorrect]);

  return (
    <div className="output-preview">
      <div className="expected-output">
        Expected: <code>{expectedOutput}</code>
      </div>
      <div id="preview-container" className="preview-content"></div>
    </div>
  );
};

export default OutputPreview;