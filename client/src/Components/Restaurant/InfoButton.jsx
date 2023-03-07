import classnames from 'classnames'
import React from 'react'
const InfoButton = ({ children, ...props }) => {
    return (
        <button
            className={classnames(
                "flex items-center gap-3 border px-4 py-2 border-black rounded-lg hover:scale-[1.01]",
                {
                    "bg-zomato-300 text-white border-none ": props.isActive,
                }
            )}
        >
            {children}
        </button>
    )
}

export default InfoButton