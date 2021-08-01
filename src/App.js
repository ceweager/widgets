import React from 'react';
// import Accordion from './components/accordion';
import Search from './components/search';

const items = [
  {
    title: "What is react",
    content: "react is front end JS library"
  },
  {
    title: "Why use react",
    content: "react is a favourite JS library amongst engineers"
  },
  {
    title: "How do you use react",
    content: "we use react by creating components"
  }
]

export default () => {
  return (
    // <div><Accordion items={items} /></div>
    <div><Search /></div>
  )
};