import React, { useState } from 'react';
// import Accordion from './components/accordion';
import Search from './components/search';
import Dropdown from './components/dropdown'

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

const options = [
  {
    label: "red",
    value: "red"
  },
  {
    label: "blue",
    value: "blue"
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropdown] = useState(true);
  return (
    // <div><Accordion items={items} /></div>
    // <div><Search /></div>
    <div>
      <button onClick={() => setShowDropdown(!showDropDown)}>Toggle Drop down </button>
      {showDropDown ? (
        <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />) : null
      }
    </div>
  )
};