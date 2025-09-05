import React from 'react'

type ServiceTagProps = {
  children: React.ReactNode
  className?: string
}

const ServiceTag: React.FC<ServiceTagProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`text-center font-bold text-sm sm:text-base md:text-lg py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-xl border-2 w-full sm:w-auto ${className}`}
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