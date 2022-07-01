
// import Input from '../Input';

import{ React , useState}from 'react';
import './index.scss';


const Tips = ({tip, onInputValue, onPercent, value, disable}) => {
  const [placeholder, setPlaceholder] = useState(true)
  const [tipColor, setTipColor] = useState(true)
  

   
  
  
 return (
    <div>
        { tip.isCustom ? (
            <div className='custom-tip__container'>
                {/* <Input type='string' placeholder='Custom' className='basic-input'/> */}
                <input type='text'
                       placeholder={placeholder ? 'Custom' : ''} 
                       className='basic-input'
                       onChange={(e) => {
                            if(/\D/g.test(e.target.value)) 
                            e.target.value = e.target.value.replace(/\D/g, '')
                            onInputValue(e.target.value)
                       }}
                       value={value}
                       onFocus={() => setPlaceholder(!placeholder)}
                       onBlur={() => setPlaceholder(!placeholder)}
                       
                />
                
            </div>
        ) : (
            <label>
                <div className={tipColor || !disable  ? 'basic-tip__container' : 'basic-tip__color'}
                    onClick={() => {
                      onPercent(tip)
                      setTipColor(!tipColor)
                      
                    }
                    }>
                    {tip.percent}%
                </div>
            </label>
        ) }
    </div>
  )
}

export default Tips;

