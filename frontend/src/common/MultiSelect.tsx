import React, { useState } from 'react'
import styles from './MultiSelect.module.css'

interface MultiSelectProps {
  label?: string
  options: string[]
  selectedOptions: string[]
  onChange: (selected: string[]) => void
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  label = '',
  options,
  selectedOptions,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option))
    } else {
      onChange([...selectedOptions, option])
    }
  }

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={styles.selectBox}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={styles.selectedList}>
          {selectedOptions.map((option) => (
            <div key={option} className={styles.selectedTag}>
              <span>{option}</span>
              <span
                className={styles.removeIcon}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleOption(option)
                }}
              >
                ×
              </span>
            </div>
          ))}
        </div>
        <div className={styles.selectionFooter}>
          <span className={styles.countText}>
            {selectedOptions.length} item
            {selectedOptions.length !== 1 ? 's' : ''} selected
          </span>
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
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option}
              className={styles.option}
              onClick={() => toggleOption(option)}
            >
              <div
                className={`${styles.checkbox} ${
                  selectedOptions.includes(option) ? styles.checked : ''
                }`}
              >
                {selectedOptions.includes(option) && (
                  <svg
                    className={styles.checkIcon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                )}
              </div>
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MultiSelect
