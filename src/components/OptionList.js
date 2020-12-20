import React from 'react'
import Option from './Option'
const OptionList =({options, setOptions,  
    setInputText}) =>{
    return (
        <div>
            <ul>
                {
                    options.map((option) =>{
                        return (<Option
                        option={option}
                        count={option.count}
                        id={option.id}
                        setOptions={setOptions}
                        options={options}
                        text={option.text}
                        key={option.id}
                        setInputText={setInputText}
                        ></Option>)
                    })
                }
            </ul>
        </div>
    )
}

export default OptionList