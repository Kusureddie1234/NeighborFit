import React from 'react';

interface PreferenceSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  description?: string;
  icon?: React.ReactNode;
}

const PreferenceSlider: React.FC<PreferenceSliderProps> = ({
  label,
  value,
  onChange,
  description,
  icon
}) => {
  const getSliderColor = (value: number) => {
    if (value === 0) return 'bg-gray-200';
    if (value <= 2) return 'bg-red-400';
    if (value <= 3) return 'bg-yellow-400';
    if (value <= 4) return 'bg-blue-400';
    return 'bg-green-400';
  };

  const getValueLabel = (value: number) => {
    if (value === 0) return 'Not Important';
    if (value === 1) return 'Low Priority';
    if (value === 2) return 'Somewhat Important';
    if (value === 3) return 'Important';
    if (value === 4) return 'Very Important';
    return 'Essential';
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          {icon && <div className="text-blue-600">{icon}</div>}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-800">{value}</div>
          <div className="text-xs text-gray-500">{getValueLabel(value)}</div>
        </div>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min="0"
          max="5"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, ${getSliderColor(value)} 0%, ${getSliderColor(value)} ${(value / 5) * 100}%, #e5e7eb ${(value / 5) * 100}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default PreferenceSlider;