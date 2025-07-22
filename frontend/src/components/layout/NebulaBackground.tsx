import React from 'react';

interface NebulaBackgroundProps {
  variant?: 'purple' | 'blue' | 'green' | 'red' | 'multicolor';
  className?: string;
}

const NebulaBackground: React.FC<NebulaBackgroundProps> = ({ variant = 'multicolor', className = '' }) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'purple':
        return 'from-purple-900 via-[#C63A89] to-black';
      case 'blue':
        return 'from-blue-900 via-[#00A1FF] to-black';
      case 'green':
        return 'from-green-900 via-[#009E60] to-black';
      case 'red':
        return 'from-red-900 via-[#C64545] to-black';
      case 'multicolor':
      default:
        return 'from-[#A96827] via-[#C63A89] via-[#00A1FF] to-[#009E60]';
    }
  };

  const getNebulaColors = () => {
    switch (variant) {
      case 'purple':
        return {
          primary: '#C63A89',
          secondary: '#A96827',
          accent: '#8B5CF6'
        };
      case 'blue':
        return {
          primary: '#00A1FF',
          secondary: '#C63A89',
          accent: '#06B6D4'
        };
      case 'green':
        return {
          primary: '#009E60',
          secondary: '#00A1FF',
          accent: '#10B981'
        };
      case 'red':
        return {
          primary: '#C64545',
          secondary: '#FF6B6B',
          accent: '#A96827'
        };
      case 'multicolor':
      default:
        return {
          primary: '#C63A89',
          secondary: '#00A1FF',
          accent: '#009E60',
          quaternary: '#C64545',
          quinary: '#A96827'
        };
    }
  };

  const colors = getNebulaColors();

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()}`}></div>
      
      {/* Nebula clouds */}
      <div className="absolute inset-0">
        {/* Large nebula clouds */}
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: `${colors.primary}30` }}
        ></div>
        <div 
          className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: `${colors.secondary}25`, animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse" 
          style={{ backgroundColor: `${colors.accent}20`, animationDelay: '2s' }}
        ></div>
        {variant === 'multicolor' && (
          <>
            <div 
              className="absolute bottom-20 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse" 
              style={{ backgroundColor: `${colors.quaternary}25`, animationDelay: '3s' }}
            ></div>
            <div 
              className="absolute top-1/3 left-1/3 w-56 h-56 rounded-full blur-3xl animate-pulse" 
              style={{ backgroundColor: `${colors.quinary}20`, animationDelay: '4s' }}
            ></div>
          </>
        )}
        
        {/* Medium nebula clouds */}
        <div 
          className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full blur-2xl animate-pulse" 
          style={{ backgroundColor: `${colors.primary}20`, animationDelay: '0.5s' }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-0 w-56 h-56 rounded-full blur-2xl animate-pulse" 
          style={{ backgroundColor: `${colors.secondary}15`, animationDelay: '1.5s' }}
        ></div>
        <div 
          className="absolute top-1/2 right-0 w-40 h-40 rounded-full blur-2xl animate-pulse" 
          style={{ backgroundColor: `${colors.accent}20`, animationDelay: '2.5s' }}
        ></div>
        
        {/* Small nebula particles */}
        <div 
          className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full blur-xl animate-pulse" 
          style={{ backgroundColor: `${colors.primary}15`, animationDelay: '0.8s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full blur-xl animate-pulse" 
          style={{ backgroundColor: `${colors.secondary}10`, animationDelay: '1.8s' }}
        ></div>
        <div 
          className="absolute top-3/4 left-1/4 w-28 h-28 rounded-full blur-xl animate-pulse" 
          style={{ backgroundColor: `${colors.accent}15`, animationDelay: '2.8s' }}
        ></div>
      </div>
      
      {/* Overlay gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
    </div>
  );
};

export default NebulaBackground;