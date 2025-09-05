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
      {/* SP: 傾きを強めて平行四辺形感を強化（帯 -16deg / 文字 +16deg） */}
      <div className={`relative inline-block md:hidden ${className || ''}`}>
        <div className={`${bgClassName} transform skew-x-[-16deg] rounded opacity-90 px-3 py-4 inline-block`}>
          <div className="transform skew-x-[16deg] inline-block w-full text-center">{children}</div>
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


