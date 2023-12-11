/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export default function CloseButton({onClick}: any) {
  return (
        <button
            onClick={onClick}
            className="text-blue-gray-500 focus:outline-none p-2 rounded-full border-none hover:bg-slate-200 transition-colors"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 scale-125"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button> 
    )
}

