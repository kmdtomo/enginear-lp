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
    <>
      {/* SP: clip-path方式（テキスト歪まない・中央揃え安定） */}
      <div className={`relative inline-block md:hidden ${className || ''}`}>
        <div
          className={`${bgClassName} rounded opacity-90 px-4 py-2 flex items-center`}
          style={{ clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' }}
        >
          <div className="w-full flex items-center justify-start">{children}</div>
        </div>
      </div>

      {/* MD+: 既存のskew方式（PCデザインをそのまま維持） */}
      <div className={`relative hidden md:inline-block ${className || ''}`}>
        <div className={`${bgClassName} transform skew-x-[-20deg] rounded opacity-90 px-8 py-3 block`}>
          <div className="transform skew-x-[20deg] w-full block">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Parallelogram


