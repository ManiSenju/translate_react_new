import React from 'react';
import ColorContext from '../context/ColorContext';
import LanguageContext from '../context/LanguageContext';


class Button extends React.Component{
    render(){
        return (
            <ColorContext.Consumer>
            {(color)=> <button className={`ui button ${color}`}>
               <LanguageContext.Consumer>{(value)=>{return value.language === 'english' ? 'Submit' : 'Vootleggen'}}</LanguageContext.Consumer>
           </button>}
            </ColorContext.Consumer>
           
        )
    }
}

export default Button;