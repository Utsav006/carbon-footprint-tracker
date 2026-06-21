import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ArrowLeft, Leaf, AlertTriangle, CheckCircle2 } from 'lucide-react';

const Dashboard = ({ data, onBack }) => {
  // Conversion factors (approximate kg CO2e)
  const transportFactors = {
    Car: 0.192,
    Motorcycle: 0.103,
    Bus: 0.105,
    Train: 0.041,
  };

  const dietFactors = {
    Vegan: 2.9,
    Vegetarian: 3.8,
    Average: 5.6,
    'Meat-heavy': 7.2,
  };

  const energyFactor = 0.233; // kg CO2e per kWh

  // Calculate totals
  const transportKm = parseFloat(data.transportKm) || 0;
  const energyKwh = parseFloat(data.energyKwh) || 0;

  const transportFootprint = transportKm * (transportFactors[data.vehicleType] || 0);
  const energyFootprint = energyKwh * energyFactor;
  const dietFootprint = dietFactors[data.dietType] || 0;

  const totalFootprint = transportFootprint + energyFootprint + dietFootprint;

  // Chart data formatting
  const pieData = [
    { name: 'Transport', value: transportFootprint, color: '#3b82f6' }, // blue-500
    { name: 'Energy', value: energyFootprint, color: '#eab308' },      // yellow-500
    { name: 'Diet', value: dietFootprint, color: '#f97316' },          // orange-500
  ].filter(item => item.value > 0);

  const barData = [
    { name: 'Your Footprint', value: totalFootprint, fill: '#10b981' },
    { name: 'Global Average', value: 13.0, fill: '#6b7280' }, // ~13kg daily avg
  ];

  const getStatus = (total) => {
    if (total <= 6) return { text: 'Excellent! You are well below average.', icon: <CheckCircle2 className="w-8 h-8 text-primary" />, color: 'text-primary' };
    if (total <= 13) return { text: 'Good job! You are around the global average.', icon: <Leaf className="w-8 h-8 text-yellow-400" />, color: 'text-yellow-400' };
    return { text: 'High footprint. Consider ways to reduce your impact.', icon: <AlertTriangle className="w-8 h-8 text-red-500" />, color: 'text-red-500' };
  };

  const status = getStatus(totalFootprint);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-surface p-3 rounded-lg shadow-xl border border-gray-700">
          <p className="text-gray-200 font-semibold">{`${payload[0].name}`}</p>
          <p className="text-primary">{`${payload[0].value.toFixed(2)} kg CO₂`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-dark-surface/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 animate-fade-in">
      <div className="flex items-center justify-between mb-8 border-b border-gray-700/50 pb-6">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Form</span>
        </button>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
          Your Daily Footprint
        </h2>
        <div className="w-24"></div> {/* Spacer for centering */}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-dark/50 rounded-xl p-6 border border-gray-700 flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total CO₂</p>
          <p className="text-5xl font-black text-white mb-2">{totalFootprint.toFixed(1)} <span className="text-xl text-gray-500 font-normal">kg</span></p>
        </div>
        
        <div className={`col-span-1 md:col-span-2 bg-dark/50 rounded-xl p-6 border border-gray-700 flex items-center space-x-6`}>
          <div className="p-4 bg-dark rounded-full shadow-inner">
            {status.icon}
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-1 ${status.color}`}>Analysis</h3>
            <p className="text-gray-300">{status.text}</p>
          </div>
        </div>
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Breakdown Chart */}
        <div className="bg-dark/40 rounded-xl p-6 border border-gray-700/50 flex flex-col h-80">
          <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">Footprint Breakdown</h3>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            {pieData.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-dark/40 rounded-xl p-6 border border-gray-700/50 flex flex-col h-80">
          <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">Comparison</h3>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1f2937' }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
