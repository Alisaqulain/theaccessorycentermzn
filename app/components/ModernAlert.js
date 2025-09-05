'use client'
import { useState, useEffect } from 'react'

export default function ModernAlert() {
  const [alerts, setAlerts] = useState([])

  const showAlert = (message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random()
    const newAlert = {
      id,
      message,
      type,
      duration
    }
    
    setAlerts(prev => [...prev, newAlert])
    
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== id))
    }, duration)
  }

  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id))
  }

  // Make showAlert available globally
  useEffect(() => {
    window.showModernAlert = showAlert
    return () => {
      delete window.showModernAlert
    }
  }, [])

  const getAlertStyles = (type) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-600',
          border: 'border-green-500',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )
        }
      case 'error':
        return {
          bg: 'bg-red-600',
          border: 'border-red-500',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )
        }
      case 'warning':
        return {
          bg: 'bg-yellow-600',
          border: 'border-yellow-500',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          )
        }
      default:
        return {
          bg: 'bg-blue-600',
          border: 'border-blue-500',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
    }
  }

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2">
      {alerts.map((alert) => {
        const styles = getAlertStyles(alert.type)
        return (
          <div
            key={alert.id}
            className={`
              ${styles.bg} ${styles.border} border-2
              glass-dark rounded-xl p-4 shadow-2xl
              transform transition-all duration-500 ease-out
              animate-slide-in-right
              max-w-sm w-full
            `}
            style={{
              animation: 'slideInRight 0.5s ease-out forwards'
            }}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 text-white animate-pulse">
                {styles.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium leading-relaxed whitespace-pre-line">
                  {alert.message}
                </p>
              </div>
              <button
                onClick={() => removeAlert(alert.id)}
                className="flex-shrink-0 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Progress bar */}
            <div className="mt-3 w-full bg-black/20 rounded-full h-1">
              <div 
                className="bg-white h-1 rounded-full transition-all ease-linear"
                style={{
                  width: '100%',
                  animation: `shrink ${alert.duration}ms linear forwards`
                }}
              />
            </div>
          </div>
        )
      })}
      
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  )
}

// Helper functions for easy use
export const showSuccess = (message, duration = 4000) => {
  if (window.showModernAlert) {
    window.showModernAlert(message, 'success', duration)
  }
}

export const showError = (message, duration = 4000) => {
  if (window.showModernAlert) {
    window.showModernAlert(message, 'error', duration)
  }
}

export const showWarning = (message, duration = 4000) => {
  if (window.showModernAlert) {
    window.showModernAlert(message, 'warning', duration)
  }
}

export const showInfo = (message, duration = 4000) => {
  if (window.showModernAlert) {
    window.showModernAlert(message, 'info', duration)
  }
}
