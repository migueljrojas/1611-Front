import React from 'react';
import { motion } from 'framer-motion';
import { pathVariants, strokeVariants } from './logo.animations';

export default function Logo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532.28 398.47">
      <g>
        <motion.path
          stroke={props.fill ? props.fill : '#014B6E'}
          fill="none"
          variants={strokeVariants}
          initial="initial"
          animate="animate"
          d="M409.74,0c40.89,0,81.57,0,122.55,0c0,132.78,0,265.48,0,398.47c-40.76,0-81.51,0-122.55,0
          C409.74,265.79,409.74,133.09,409.74,0z M459.7,260.5c0,1.2,0,2.43,0,3.66c0,33.86,0,67.72,0,101.59c0,5.32,0.16,5.48,5.63,5.48
          c4.69,0,9.38-0.01,14.08-0.01c4.67,0,5.12-0.43,5.12-5.27c0.01-11.29-0.01-22.57-0.01-33.86c-0.01-35.64-0.04-71.28,0.04-106.91
          c0.01-3.24-1.02-4.7-4.34-4.61c-4.31,0.12-8.64-0.15-12.93,0.14c-1.29,0.09-3.41,1.31-3.59,2.29c-2.1,11.42-9.92,17.78-19.56,22.5
          c-2.03,1-2.8,2.18-2.74,4.36c0.12,4.44,0,8.88,0.05,13.32c0.04,3.64,1.21,4.61,4.76,3.28C450.64,264.78,454.9,262.65,459.7,260.5z
          "
        />
        <motion.path
          stroke={props.fill ? props.fill : '#014B6E'}
          fill="none"
          variants={strokeVariants}
          initial="initial"
          animate="animate"
          d="M273.39,133.94c40.94,0,81.46,0,122.26,0c0,88.21,0,176.26,0,264.54c-0.8,0.1-1.64,0.28-2.48,0.29
          c-38.8,0.01-77.6-0.04-116.39,0.06c-2.92,0.01-3.59-0.83-3.59-3.62c0.06-86.09,0.05-172.18,0.05-258.27
          C273.24,136.06,273.33,135.2,273.39,133.94z M325.14,260.58c0,2.56,0,5.21,0,7.86c0,32.72,0.03,65.45-0.04,98.17
          c-0.01,3.44,1.2,4.8,4.69,4.66c5.07-0.2,10.14-0.04,15.22-0.06c4.55-0.01,5.07-0.53,5.07-5c0-33.99,0-67.99-0.01-101.98
          c0-13.19-0.06-26.38,0.01-39.57c0.01-2.7-1.02-4.04-3.71-4.05c-4.69-0.01-9.39-0.17-14.07,0.1c-1.1,0.06-2.84,1.43-3.05,2.45
          c-2.3,11.12-9.78,17.66-19.4,22.27c-2.14,1.03-3.16,2.21-3.1,4.57c0.11,4.31,0,8.62,0.08,12.94c0.07,3.86,1.25,4.81,4.99,3.42
          C316.26,264.72,320.53,262.6,325.14,260.58z"
        />
        <motion.path
          stroke={props.fill ? props.fill : '#014B6E'}
          fill="none"
          variants={strokeVariants}
          initial="initial"
          animate="animate"
          d="M123.35,398.67c-40.86,0-81.52,0-122.6,0c-0.25-3.01-0.71-5.96-0.72-8.91C-0.01,324.33,0,258.91,0,193.49
          c0-5.94,0.39-6.38,6.44-6.39c17.88-0.03,35.75-0.05,53.63,0.01c20.77,0.07,41.55,0.22,62.32,0.34c0.23,0,0.46,0.18,0.96,0.39
          C123.35,257.89,123.35,328.06,123.35,398.67z M48.67,260.48c0.04,0.4,0.12,0.87,0.12,1.35c0,34.87,0.03,69.73-0.07,104.6
          c-0.01,3.7,1.34,4.96,4.91,4.83c5.06-0.19,10.15-0.18,15.21,0c3.46,0.12,4.7-1.2,4.68-4.67c-0.08-18.76,0.03-37.53,0.05-56.29
          c0.02-28.27-0.01-56.55,0.03-84.82c0-2.76-0.5-4.86-3.79-4.87c-4.56-0.02-9.14-0.18-13.68,0.15c-1.19,0.08-2.71,1.5-3.32,2.69
          c-1.53,2.99-2.21,6.46-3.97,9.28c-3.56,5.71-8.7,9.85-14.91,12.48c-2.55,1.08-3.68,2.62-3.53,5.48c0.23,4.17,0.02,8.37,0.09,12.55
          c0.05,3.38,1.39,4.53,4.53,3.32C39.53,264.82,43.89,262.63,48.67,260.48z"
        />
        <motion.path
          stroke={props.fill ? props.fill : '#014B6E'}
          fill="none"
          variants={strokeVariants}
          initial="initial"
          animate="animate"
          d="M137.29,100.37c40.81,0,81.35,0,122.14,0c0,99.36,0,198.62,0,298.14c-40.6,0-81.23,0-122.14,0
          C137.29,299.27,137.29,200.04,137.29,100.37z M189.54,277.57c0-10.52-0.02-20.38,0.01-30.24c0.01-4.82,2.12-7.11,6.39-7.08
          c4.38,0.02,6.41,2.22,6.44,7.05c0.03,4.18,0.01,8.37-0.01,12.55c-0.01,1.87,0.55,2.95,2.72,2.35c6.32-1.75,12.71-3.29,18.95-5.29
          c1.21-0.39,2.48-2.39,2.67-3.8c0.41-2.99,0.19-6.07,0.12-9.11c-0.26-10.57-5.36-18.22-14.43-23.31
          c-6.25-3.51-13.17-3.05-19.99-2.99c-18.12,0.15-27.79,15.19-27.52,29.17c0.63,32.71,0.19,65.43,0.26,98.15
          c0.02,8.55,3.87,15.21,10.49,20.48c8.16,6.49,17.74,6.46,27.21,5.5c14.16-1.43,23.96-12.9,23.99-27.16
          c0.03-16.23,0.04-32.46-0.03-48.7c-0.05-10.76-5.7-17.19-16.17-19.77C203.65,273.63,196.84,274.71,189.54,277.57z M189.52,322.46
          c0,6.58-0.04,13.17,0.02,19.75c0.04,4.08,2.32,6.24,6.39,6.24c4.14,0,6.41-2.05,6.43-6.2c0.07-13.29,0.09-26.59-0.01-39.88
          c-0.03-4.81-2.41-7.18-6.52-7.06c-4,0.11-6.23,2.67-6.27,7.4c-0.06,6.58-0.01,13.17-0.01,19.75
          C189.54,322.46,189.53,322.46,189.52,322.46z"
        />
      </g>
      <g>
        <motion.path
          fill={props.fill ? props.fill : '#014B6E'}
          variants={pathVariants}
          initial="initial"
          animate="animate"
          d="M409.74,0c40.89,0,81.57,0,122.55,0c0,132.78,0,265.48,0,398.47c-40.76,0-81.51,0-122.55,0
          C409.74,265.79,409.74,133.09,409.74,0z M459.7,260.5c0,1.2,0,2.43,0,3.66c0,33.86,0,67.72,0,101.59c0,5.32,0.16,5.48,5.63,5.48
          c4.69,0,9.38-0.01,14.08-0.01c4.67,0,5.12-0.43,5.12-5.27c0.01-11.29-0.01-22.57-0.01-33.86c-0.01-35.64-0.04-71.28,0.04-106.91
          c0.01-3.24-1.02-4.7-4.34-4.61c-4.31,0.12-8.64-0.15-12.93,0.14c-1.29,0.09-3.41,1.31-3.59,2.29c-2.1,11.42-9.92,17.78-19.56,22.5
          c-2.03,1-2.8,2.18-2.74,4.36c0.12,4.44,0,8.88,0.05,13.32c0.04,3.64,1.21,4.61,4.76,3.28C450.64,264.78,454.9,262.65,459.7,260.5z
          "
        />
        <motion.path
          fill={props.fill ? props.fill : '#014B6E'}
          variants={pathVariants}
          initial="initial"
          animate="animate"
          d="M273.39,133.94c40.94,0,81.46,0,122.26,0c0,88.21,0,176.26,0,264.54c-0.8,0.1-1.64,0.28-2.48,0.29
          c-38.8,0.01-77.6-0.04-116.39,0.06c-2.92,0.01-3.59-0.83-3.59-3.62c0.06-86.09,0.05-172.18,0.05-258.27
          C273.24,136.06,273.33,135.2,273.39,133.94z M325.14,260.58c0,2.56,0,5.21,0,7.86c0,32.72,0.03,65.45-0.04,98.17
          c-0.01,3.44,1.2,4.8,4.69,4.66c5.07-0.2,10.14-0.04,15.22-0.06c4.55-0.01,5.07-0.53,5.07-5c0-33.99,0-67.99-0.01-101.98
          c0-13.19-0.06-26.38,0.01-39.57c0.01-2.7-1.02-4.04-3.71-4.05c-4.69-0.01-9.39-0.17-14.07,0.1c-1.1,0.06-2.84,1.43-3.05,2.45
          c-2.3,11.12-9.78,17.66-19.4,22.27c-2.14,1.03-3.16,2.21-3.1,4.57c0.11,4.31,0,8.62,0.08,12.94c0.07,3.86,1.25,4.81,4.99,3.42
          C316.26,264.72,320.53,262.6,325.14,260.58z"
        />
        <motion.path
          fill={props.fill ? props.fill : '#014B6E'}
          variants={pathVariants}
          initial="initial"
          animate="animate"
          d="M123.35,398.67c-40.86,0-81.52,0-122.6,0c-0.25-3.01-0.71-5.96-0.72-8.91C-0.01,324.33,0,258.91,0,193.49
          c0-5.94,0.39-6.38,6.44-6.39c17.88-0.03,35.75-0.05,53.63,0.01c20.77,0.07,41.55,0.22,62.32,0.34c0.23,0,0.46,0.18,0.96,0.39
          C123.35,257.89,123.35,328.06,123.35,398.67z M48.67,260.48c0.04,0.4,0.12,0.87,0.12,1.35c0,34.87,0.03,69.73-0.07,104.6
          c-0.01,3.7,1.34,4.96,4.91,4.83c5.06-0.19,10.15-0.18,15.21,0c3.46,0.12,4.7-1.2,4.68-4.67c-0.08-18.76,0.03-37.53,0.05-56.29
          c0.02-28.27-0.01-56.55,0.03-84.82c0-2.76-0.5-4.86-3.79-4.87c-4.56-0.02-9.14-0.18-13.68,0.15c-1.19,0.08-2.71,1.5-3.32,2.69
          c-1.53,2.99-2.21,6.46-3.97,9.28c-3.56,5.71-8.7,9.85-14.91,12.48c-2.55,1.08-3.68,2.62-3.53,5.48c0.23,4.17,0.02,8.37,0.09,12.55
          c0.05,3.38,1.39,4.53,4.53,3.32C39.53,264.82,43.89,262.63,48.67,260.48z"
        />
        <motion.path
          fill={props.fill ? props.fill : '#014B6E'}
          variants={pathVariants}
          initial="initial"
          animate="animate"
          d="M137.29,100.37c40.81,0,81.35,0,122.14,0c0,99.36,0,198.62,0,298.14c-40.6,0-81.23,0-122.14,0
          C137.29,299.27,137.29,200.04,137.29,100.37z M189.54,277.57c0-10.52-0.02-20.38,0.01-30.24c0.01-4.82,2.12-7.11,6.39-7.08
          c4.38,0.02,6.41,2.22,6.44,7.05c0.03,4.18,0.01,8.37-0.01,12.55c-0.01,1.87,0.55,2.95,2.72,2.35c6.32-1.75,12.71-3.29,18.95-5.29
          c1.21-0.39,2.48-2.39,2.67-3.8c0.41-2.99,0.19-6.07,0.12-9.11c-0.26-10.57-5.36-18.22-14.43-23.31
          c-6.25-3.51-13.17-3.05-19.99-2.99c-18.12,0.15-27.79,15.19-27.52,29.17c0.63,32.71,0.19,65.43,0.26,98.15
          c0.02,8.55,3.87,15.21,10.49,20.48c8.16,6.49,17.74,6.46,27.21,5.5c14.16-1.43,23.96-12.9,23.99-27.16
          c0.03-16.23,0.04-32.46-0.03-48.7c-0.05-10.76-5.7-17.19-16.17-19.77C203.65,273.63,196.84,274.71,189.54,277.57z M189.52,322.46
          c0,6.58-0.04,13.17,0.02,19.75c0.04,4.08,2.32,6.24,6.39,6.24c4.14,0,6.41-2.05,6.43-6.2c0.07-13.29,0.09-26.59-0.01-39.88
          c-0.03-4.81-2.41-7.18-6.52-7.06c-4,0.11-6.23,2.67-6.27,7.4c-0.06,6.58-0.01,13.17-0.01,19.75
          C189.54,322.46,189.53,322.46,189.52,322.46z"
        />
      </g>
    </svg>
  );
}