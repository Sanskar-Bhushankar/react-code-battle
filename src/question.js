export const questions = [
    {
      id: 1,
      text: 'Create a div element that displays "Hello World"',
      description: `
Task: Create a div that displays the text "Hello World"

Requirements:
- Use a simple <div> element
- The text should be exactly "Hello World"
- No additional styling needed

Example output: Hello World
    `,
      initialCode: `function Preview() {
  return (
    // Write your code here
    
  );
}`,
      expectedOutput: 'Hello World'
    },
    {
      id: 2,
      text: 'Create a button element',
      description: `
Task: Create a button that displays "Click Me"

Requirements:
- Use the <button> element
- The text should be exactly "Click Me"
- No event handlers needed

Example output: Click Me
    `,
      initialCode: `function Preview() {
  return (
    // Write your code here
    
  );
}`,
      expectedOutput: 'Click Me'
    },
    {
      id: 3,
      text: 'Create a heading (h1) that says "Welcome"',
      description: `
Task: Create a heading that displays "Welcome"

Requirements:
- Use the <h1> element
- The text should be exactly "Welcome"
- No additional styling needed

Example output: Welcome
    `,
      initialCode: `function Preview() {
  return (
    // Write your code here
    
  );
}`,
      expectedOutput: 'Welcome'
    },
    {
      id: 4,
      text: 'Create a Counter Component',
      description: `
Task: Create a counter that increases when clicking a button

Requirements:
- Use the useState hook
- Display the current count
- Add a button that increases the count by 1
- Initial count should be 0
- The count should be displayed before the button

Example output: 0 Increment
    `,
      initialCode: `function Preview() {
  // Add your state here
  
  return (
    // Write your code here
    
  );
}`,
      expectedOutput: '0 Increment'
    },
    {
      id: 5,
      text: 'Create a Toggle Component',
      description: `
Task: Create a component that toggles text between "ON" and "OFF"

Requirements:
- Use useState hook
- Initial state should show "OFF"
- Clicking the button should toggle between "ON" and "OFF"
- Display the current state followed by the button
- Button should say "Toggle"

Example output: OFF Toggle
    `,
      initialCode: `function Preview() {
  // Add your state here
  
  return (
    <div>
      {/* Write your code here */}
      
    </div>
  );
}`,
      expectedOutput: 'OFF Toggle'
    },
    {
      id: 6,
      text: 'Create a Todo Input',
      description: `
Task: Create a todo input that displays what user types

Requirements:
- Use useState for input management
- Show an input field
- Display the current input value below the input
- Input should have placeholder "Type here..."
- Display "Current input: " before the value
- If input is empty, display "Current input: No input yet"

Example output: Current input: No input yet
    `,
      initialCode: `function Preview() {
  // Add your state here
  
  return (
    <div>
      {/* Add input and display elements here */}
      
    </div>
  );
}`,
      expectedOutput: 'Current input: No input yet'
    }
  ];