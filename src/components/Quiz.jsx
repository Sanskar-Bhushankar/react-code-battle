import './Quiz.css';
import SplitPane from 'react-split-pane';
import CodeEditor from './CodeEditor';
import OutputPreview from './OutputPreview';
import { useCallback } from 'react';
import debounce from 'lodash.debounce';

const Quiz = ({ question, userCode, setUserCode, isCorrect, setIsCorrect, onNext }) => {
  // Debounce the code changes to prevent too frequent updates
  const handleCodeChange = useCallback(
    debounce((value) => {
      setUserCode(value);
      setIsCorrect(false);
    }, 300),
    [setUserCode, setIsCorrect]
  );

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="question-header">
          <div className="question-title">
            <span className="question-number">Question {question.id}</span>
            <h1>{question.text}</h1>
          </div>
          {isCorrect && (
            <button onClick={onNext} className="next-button">
              Next Question <span>→</span>
            </button>
          )}
        </div>
        <pre className="question-description">{question.description}</pre>
      </div>
      <div className="editor-preview-container">
        <SplitPane 
          split="vertical" 
          defaultSize="50%"
          className="split-pane-container"
        >
          <div className="editor-container">
            <h2>💻 Code Editor</h2>
            <CodeEditor 
              code={userCode} 
              onChange={handleCodeChange}
            />
          </div>
          <div className="preview-container">
            <h2>🔍 Output Preview</h2>
            <OutputPreview
              code={userCode}
              expectedOutput={question.expectedOutput}
              setIsCorrect={setIsCorrect}
            />
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default Quiz;