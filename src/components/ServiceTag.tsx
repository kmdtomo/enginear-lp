import React from 'react'

type ServiceTagProps = {
  children: React.ReactNode
  className?: string
}

const ServiceTag: React.FC<ServiceTagProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`text-center font-bold text-lg py-4 px-8 rounded-xl border-2 ${className}`}
      style={{ 
        backgroundColor: '#E8EBFC',
        borderColor: '#2911E2',
        color: '#2911E2'
      }}
    >
      {children}
    </div>
  )
}

export default ServiceTag