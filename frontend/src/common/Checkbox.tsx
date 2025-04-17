import React from 'react'
import styles from './Checkbox.module.css'

interface CheckboxOption {
  id?: string
  label: string
  checked: boolean
  onChange: () => void
}

interface CheckboxGroupProps {
  options: CheckboxOption[]
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options }) => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        {options.map((option, index) => (
          <label key={index} className={styles.checkboxLabel}>
            <div className={styles.checkboxWrapper}>
              <input
                id={option.id}
                type="checkbox"
                checked={option.checked}
                onChange={option.onChange}
                className={styles.hiddenCheckbox}
              />
              <div
                className={`${styles.checkbox} ${
                  option.checked ? styles.checked : ''
                }`}
              >
                {option.checked && (
                  <svg
                    className={styles.checkIcon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className={styles.labelText}>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default CheckboxGroup
