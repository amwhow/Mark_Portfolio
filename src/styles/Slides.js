import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./styles.css";

const slides = [
  {
    id: 0,
    url:
      "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/Mark_bw.jpeg",
  },
  {
    id: 1,
    url:
      "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/Marathon.JPG",
  },
  {
    id: 2,
    url:
      "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/MarkSelfie.JPG",
  },
];

const Slides = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 3), 3000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ));
};

export default Slides;

// import { render } from 'react-dom'
// import React, { useState, useEffect } from 'react'
// import { useTransition, animated, config } from 'react-spring'
// import './styles.css'

// const slides = [
//   { id: 0, url: '../assets/Mark_bw.jpeg' },
//   { id: 1, url: '../assets/Marathon.JPG' },
//   { id: 2, url: '../assets/MarkSelfie.JPG' },
// ]

// const Slides = () => {
//   const [index, set] = useState(0)
//   const transitions = useTransition(slides[index], item => item.id, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: config.molasses,
//   })
//   useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
//   return transitions.map(({ item, props, key }) => (
//     <animated.div
//       key={key}
//       class="bg"
//       style={{ ...props, backgroundImage: `url(${item.url})` }}
//     />
//   ))
// }

// export default Slides
