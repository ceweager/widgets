import React, { useState, useEffect } from 'react';
import Dropdown from './dropdown';
import Convert from './convert';

const languages = [
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("")
  return (
    <div className="ui form">
      <div className="field">
        <label>Enter text</label>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
      <Dropdown labelName={"Select a language"} options={languages} selected={language} onSelectedChange={setLanguage} />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  )
};

export default Translate;

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM