import { useEffect, useState } from "react"
import EnSvg from "./Svg/EngSvg"
import FrSvg from "./Svg/FranceSvg"

type LanguageProps = {
    shortcode : String
}

const Language: React.FC<LanguageProps> = ({shortcode}) => {
  const [language, setLanguage] = useState({
    shortcode : 'en',
    code: 'English',
    component: <EnSvg />
  })
  useEffect(() => {
    switch(shortcode){
      case 'fr' : 
      setLanguage({
        shortcode: 'fr',
        code: 'Francais',
        component: <FrSvg/>
      })
    }
  })

    return <span>
    {
      language.component
    }
    <p>{language.code}</p>
  </span>
}

export default Language