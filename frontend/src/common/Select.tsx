import React, { useState } from 'react'
import styles from './Select.module.css'

interface SingleSelectProps {
  label?: string // Optional label for the select field
  options: string[] // List of available options
  selectedOption: string // Currently selected option
  onChange: (option: string) => void // Callback to handle option selection
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  label,
  options,
  selectedOption,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: string) => {
    onChange(option) // Notify parent component of the selected option
    setIsOpen(false) // Close the dropdown
  }

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={styles.selectBox}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedOption}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option}
              className={`${styles.option} ${
                option === selectedOption ? styles.selected : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SingleSelect
