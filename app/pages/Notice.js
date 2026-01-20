'use client'
import React from 'react'

export default function Notice() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#dc2626',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '8px 16px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px',
          animation: 'marquee 20s linear infinite',
        }}
      >
        📢 Important Notice: New course materials, updated model papers, and assignments are now available.
        | Exam schedule update soon | Download latest syllabus
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (min-width: 640px) {
          div div {
            font-size: 16px;
          }
        }

        @media (min-width: 1024px) {
          div div {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  )
}
