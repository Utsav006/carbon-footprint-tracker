import React, { useState } from 'react';
import { Car, Zap, Utensils, Send } from 'lucide-react';

const CarbonForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    transportKm: '',
    vehicleType: 'Car',
    energyKwh: '',
    dietType: 'Average',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-300 mb-8 text-center">
        Log Your Daily Footprint
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Transport Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-emerald-600">
            <Car className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-gray-200">Transport</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Distance Driven (km)</label>
              <input
                type="number"
                name="transportKm"
                value={formData.transportKm}
                onChange={handleChange}
                placeholder="e.g. 15"
                min="0"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Vehicle Type</label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none text-white appearance-none"
              >
                <option value="Car">Car</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
              </select>
            </div>
          </div>
        </div>

        {/* Energy Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-yellow-500">
            <Zap className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-gray-200">Energy</h3>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Electricity Consumed (kWh)</label>
            <input
              type="number"
              name="energyKwh"
              value={formData.energyKwh}
              onChange={handleChange}
              placeholder="e.g. 5.5"
              min="0"
              step="0.1"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Diet Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-orange-500">
            <Utensils className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-gray-200">Diet</h3>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Dietary Preference</label>
            <select
              name="dietType"
              value={formData.dietType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none text-white appearance-none"
            >
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Average">Average (Mixed)</option>
              <option value="Meat-heavy">Meat-heavy</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 mt-8 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-600 hover:to-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-500/30 flex items-center justify-center space-x-2 transition-transform transform hover:-translate-y-1"
        >
          <span>Calculate Footprint</span>
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default CarbonForm;
