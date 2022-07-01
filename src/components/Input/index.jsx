
import React from 'react';
import './index.scss';


const Input = ({icon, customStyles, onInputValue, value}) => {
    return (
            <div className='grouped-border' style={customStyles}>
                {icon}
                <input 
                    className='border-none' 
                    value={value}
                    //  pattern={props.pattern}
                    //  onChange={(e) => {
                    //     // setInputValue((v) => (e.target.validity.valid ? e.target.value : v))
                    //     props.onInputValue(e.target.value)
                    //  }}

                    // if(/\D/g.test(e.target.value)) {
                    //     e.target.value = e.target.value.replace(/\D/g,'')
                    // }
                    // onInputValue(e.target.value)

                    onChange={(e) => {
                        if(/\D/g.test(e.target.value)) 
                                e.target.value = e.target.value.replace(/\D/g, '')
                        
                        onInputValue(e.target.value)
                    }}
                    style={{textAlign: 'right'}} 
                    placeholder='0'
                   
                />
            </div>
        )
}

export default Input;

