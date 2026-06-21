import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import CarbonForm from './components/CarbonForm';
import Dashboard from './components/Dashboard';

function App() {
  const [footprintData, setFootprintData] = useState(null);

  const handleFormSubmit = async (data) => {
    try {
      // Save data to Firestore
      const docRef = await addDoc(collection(db, "footprintLogs"), {
        ...data,
        timestamp: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
      
      // Update local state to show Dashboard
      setFootprintData(data);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to save data to Firebase. Please check your console/configuration.");
      // Still show dashboard locally even if firebase fails? Or maybe not.
      setFootprintData(data);
    }
  };

  const handleBack = () => {
    setFootprintData(null);
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background blur elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {!footprintData && (
          <header className="mb-12 text-center animate-fade-in">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">
              Carbon <span className="text-primary">Tracker</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Take control of your environmental impact. Log your daily activities and see how small changes can make a big difference for our planet.
            </p>
          </header>
        )}
        
        <main className="w-full transition-all duration-500 ease-in-out">
          {!footprintData ? (
            <CarbonForm onSubmit={handleFormSubmit} />
          ) : (
            <Dashboard data={footprintData} onBack={handleBack} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
