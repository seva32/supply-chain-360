'use client'
import { useState } from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [testimonials] = useState(() => [
    {
      id: 1,
      text: 'Supply360 has transformed our delivery operations. Their same-day delivery service has helped us compete with major retailers. The real-time tracking feature gives us complete visibility and peace of mind.',
      author: 'Sarah Chen',
      role: 'E-commerce Owner',
      company: 'Urbahn Style NYC',
      image: 'https://placehold.co/48x48',
    },
    {
      id: 2,
      text: 'The temperature-controlled delivery service is perfect for our catering business. Reliable and professional every time. Their attention to detail and timely delivery has helped us maintain our food quality standards.',
      author: 'Michael Rodriguez',
      role: 'Restaurant Manager',
      company: 'Tasteh of Manhattan',
      image: 'https://placehold.co/48x48',
    },
    {
      id: 3,
      text: 'Their bulk delivery service has made our inventory management so much easier. Great communication and always on time. The dedicated account manager makes coordination seamless.',
      author: 'David Kim',
      role: 'Retail Store Owner',
      company: 'Brooklyyn Essentials',
      image: 'https://placehold.co/48x48',
    },
  ])

  return (
    <div className={styles.wrapper}>
      <div className={styles.blurCircle} />
      <div className={styles.content}>
        <h1 className={styles.heading}>Client Testimonials</h1>
        <p className={styles.subheading}>
          Join hundreds of satisfied businesses across NYC
        </p>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 21 21"
                    fill="none"
                    className="w-5 h-5"
                  >
                    <path
                      d="M9.76382 3.53419C10.0638 2.61319 11.3668 2.61319 11.6658 3.53419L12.7358 6.82619C12.8012 7.02668 12.9283 7.20137 13.0989 7.3253C13.2695 7.44922 13.4749 7.51604 13.6858 7.51619H17.1478C18.1168 7.51619 18.5188 8.75619 17.7358 9.32619L14.9358 11.3602C14.7648 11.4842 14.6375 11.6592 14.5722 11.86C14.5068 12.0609 14.5066 12.2773 14.5718 12.4782L15.6418 15.7702C15.9418 16.6912 14.8868 17.4582 14.1018 16.8882L11.3018 14.8542C11.131 14.7302 10.9254 14.6634 10.7143 14.6634C10.5033 14.6634 10.2976 14.7302 10.1268 14.8542L7.32682 16.8882C6.54282 17.4582 5.48882 16.6912 5.78782 15.7702L6.85782 12.4782C6.92299 12.2773 6.92288 12.0609 6.85748 11.86C6.79209 11.6592 6.66479 11.4842 6.49382 11.3602L3.69482 9.3272C2.91182 8.7572 3.31482 7.51719 4.28282 7.51719H7.74382C7.95487 7.51725 8.16052 7.45053 8.33134 7.32659C8.50216 7.20265 8.62939 7.02785 8.69482 6.82719L9.76482 3.53519L9.76382 3.53419Z"
                      fill="black"
                    />
                  </svg>
                ))}
              </div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.authorInfo}>
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.name}>{testimonial.author}</p>
                  <p className={styles.role}>{testimonial.role}</p>
                  <p className={styles.company}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
