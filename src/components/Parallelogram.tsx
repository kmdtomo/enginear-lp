import React from 'react'

type ParallelogramProps = {
  children: React.ReactNode
  className?: string
  bgClassName?: string
}

const Parallelogram: React.FC<ParallelogramProps> = ({
  children,
  className,
  bgClassName = 'bg-white',
}) => {
  return (
    <div className={`relative inline-block ${className || ''}`}>
      <div className={`${bgClassName} px-8 py-3 transform skew-x-[-20deg] rounded opacity-90`}>
        <div className="transform skew-x-[20deg]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Parallelogram


