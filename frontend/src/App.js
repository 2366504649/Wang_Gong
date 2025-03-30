// import React, { useState } from 'react';
// import DreamForm from './DreamForm';
// // import Result from './Result';
// import './App.css';
//
// function App() {
//   const [interpretation, setInterpretation] = useState(null);
//   const [showModal, setShowModal] = useState(false); // 控制弹窗
//
//   const handleDreamSubmit = async (description) => {
//     try {
//       const response = await fetch('http://localhost:8000/submit_dream', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ description }),
//       });
//
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//
//       const result = await response.json();
//       setInterpretation(result.interpretation);
//       setShowModal(true); // 显示弹窗
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };
//
//   return (
//     <div className="App">
//       <DreamForm onSubmit={handleDreamSubmit} />
//
//       {/* 弹窗组件 */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">Dream Result</h2>
//             <p className="text-gray-700">{interpretation}</p>
//             <button
//               className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//
// export default App;
import React, { useState } from "react";
import DreamForm from "./DreamForm";
import Modal from "react-modal";
import { motion } from "framer-motion";
import "./App.css";

Modal.setAppElement("#root"); // 避免无障碍警告

function App() {
  const [interpretation, setInterpretation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDreamSubmit = async (description) => {
    try {
      const response = await fetch("http://localhost:8000/submit_dream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });
      const result = await response.json();
      setInterpretation(result.interpretation);
      setIsModalOpen(true); // 打开弹窗
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <DreamForm onSubmit={handleDreamSubmit} />

      {/* 梦幻弹窗 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="modal-box"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Dream Interpretation</h2>
          <p className="text-white">{interpretation}</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 px-4 py-2 bg-white text-purple-700 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Close
          </button>
        </motion.div>
      </Modal>
    </div>
  );
}

export default App;
