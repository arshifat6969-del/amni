import { useState, KeyboardEvent } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [name, setName] = useState('');
  const [processedName, setProcessedName] = useState('');

  const handleProcess = () => {
    setProcessedName(name);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleProcess();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Text Processing Engine
          </h1>
          <p className="text-sm text-gray-500">
            Enter a name and click process
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name-input" className="text-sm font-medium text-gray-700 block">
              Name
            </label>
            <div className="flex gap-2">
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <button
                onClick={handleProcess}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
              >
                Process
              </button>
            </div>
          </div>

          {processedName && (
            <motion.div 
              key={processedName}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-blue-50 rounded-xl border border-blue-100"
            >
              <p className="text-sm font-medium text-blue-600 mb-1">Output:</p>
              <p className="text-xl font-mono text-blue-900 break-all">
                balo hoye ja {processedName}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
