import React from 'react'

interface TabButtonProps {
    active: boolean
    selectTab: () => void
    children: React.ReactNode
    
}

const TabButton = (props: TabButtonProps) => {
  const buttonClasses = props.active
    ? 'text-white border-b-2 border-[#0047D4]'
    : 'text-[#d4dce2] hover:text-white'
  return (
    <button onClick={props.selectTab}>
      <p className={`mr-3 font-semibold hover-text-white ${buttonClasses}`}>
        {props.children}
      </p>
    </button>
  )
}

export default TabButton