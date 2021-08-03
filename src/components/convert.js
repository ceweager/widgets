import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
  const [output, setOutput] = useState("")
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await fetch(`https://translation.googleapis.com/language/translate/v2?q=${text}&target=${language}&key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`)
      setOutput(data.data.translations[0].translatedText)
    }
    doTranslation();
  }, [language, text]);

  return <div>{output}</div>
}

export default Convert;