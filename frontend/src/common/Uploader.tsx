import React from 'react'
import styles from './Uploader.module.css'

interface FileUploaderProps {
  dragOver?: boolean;
  uploadProgress?: number;
  fileList?: Array<File>;
}

const FileUploader: React.FC<FileUploaderProps> = ({ dragOver, uploadProgress, fileList = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <label className={styles.label}>Upload Files</label>
        <div
          style={{ background: dragOver ? '#F8FAFC' : '#FFF' }}
          className={styles.dropArea}
        >
          <div className={styles.iconContainer}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <div className={styles.helperText}>Drag and drop files here or</div>
          <button type="button" className={styles.button}>
            Choose Files
          </button>

          {fileList.length > 0 && (
            <div className={styles.uploadWrapper}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <div className={styles.progressInfo}>
                <span className={styles.uploadingText}>Uploading...</span>
                <span className={styles.percentageText}>{uploadProgress}%</span>
              </div>
              <div className={styles.fileDetails}>
                <svg
                  className={styles.fileIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>document.pdf</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FileUploader
