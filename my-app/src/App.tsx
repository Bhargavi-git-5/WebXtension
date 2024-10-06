import React, { useState } from 'react';
import AIIcon from './components/AIICON';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = useState('');

  const handleGenerate = () => {
    const dummyResponse = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
    setResponse(dummyResponse);
  };

  const handleInsert = () => {
    const messageInput = document.querySelector('div[role="textbox"]') as HTMLDivElement;
    if (messageInput && response) {
      messageInput.innerText = response; // Insert response into the LinkedIn message input
      messageInput.focus();
    }
  };

  return (
    <div>
      <AIIcon onClick={() => setModalVisible(true)} />
      {modalVisible && (
        <Modal 
          onClose={() => setModalVisible(false)} 
          onGenerate={handleGenerate} 
          response={response} 
          onInsert={handleInsert}
        />
      )}
    </div>
  );
};

export default App;
