import React from 'react'
import styles from './Radio.module.css'

interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  options: RadioOption[]
  selectedOption: string
  onChange: (value: string) => void
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.fieldGroup}>
        <div className={styles.options}>
          {options.map((option) => (
            <label key={option.value} className={styles.optionLabel}>
              <div
                className={`${styles.radio} ${
                  selectedOption === option.value ? styles.checked : ''
                }`}
                onClick={() => onChange(option.value)}
              >
                {selectedOption === option.value && (
                  <div className={styles.radioDot} />
                )}
              </div>
              <span className={styles.optionText}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RadioGroup
