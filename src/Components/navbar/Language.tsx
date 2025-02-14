// import { useEffect, useState } from "react"
import EnSvg from "./Svg/EngSvg"
import FrSvg from "./Svg/FranceSvg"
import { useTranslation } from "react-i18next"



const languageData = [{
  shortcode : 'en-US',
  code: 'English',
  component: <EnSvg />
},{
  shortcode: 'fr-Fr',
  code: 'Francais',
  component: <FrSvg/>
}]
const Language: React.FC = () => {
  const {i18n} = useTranslation();
  const changeLanguage = (lng: string) => {
    console.log( i18n.languages)
    i18n.changeLanguage(lng);
  };  
    return (
<>
{
languageData.map((langue)=> (
  <a  onClick={() => changeLanguage(langue.shortcode)}>
  <span>
 {
   langue.component
 }
 <p>{langue.code}</p>
</span>
 </a> 
))   
}
</>
    ) 
}
export default Language