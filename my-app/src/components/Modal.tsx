import React from 'react';

interface ModalProps {
  onClose: () => void;
  onGenerate: () => void;
  response: string;
  onInsert: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onGenerate, response, onInsert }) => {
  const handleClickOutside = (event: React.MouseEvent) => {
    if ((event.target as Element).id === 'modal') {
      onClose();
    }
  };

  return (
    <div 
      id="modal" 
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50" 
      onClick={handleClickOutside}
    >
      <div className="bg-white p-6 rounded-lg w-80">
        <input 
          type="text" 
          placeholder="Enter your command" 
          className="border p-2 w-full mb-4"
        />
        <button 
          onClick={onGenerate} 
          className="bg-blue-500 text-white p-2 rounded w-full mb-2"
        >
          Generate
        </button>
        <button 
          disabled 
          className="bg-gray-300 text-gray-500 p-2 rounded w-full mb-4"
        >
          Regenerate
        </button>
        {response && (
          <div className="text-gray-700">{response}</div>
        )}
        <button 
          onClick={onInsert} 
          className="bg-green-500 text-white p-2 rounded w-full"
        >
          Insert
        </button>
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
