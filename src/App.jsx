import React, { useState } from 'react';
import CarbonForm from './components/CarbonForm';

function App() {
  const [footprintData, setFootprintData] = useState(null);

  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
    setFootprintData(data);
    // In Milestone 3, we will pass this to the Dashboard component.
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background blur elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Carbon <span className="text-primary">Tracker</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Take control of your environmental impact. Log your daily activities and see how small changes can make a big difference for our planet.
          </p>
        </header>
        
        <main className="w-full">
          <CarbonForm onSubmit={handleFormSubmit} />
          
          {footprintData && (
            <div className="mt-8 max-w-2xl mx-auto p-4 bg-primary/10 border border-primary/20 rounded-xl text-center">
              <p className="text-primary font-medium">Data submitted successfully! (Dashboard coming in Milestone 3)</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
