import React, { useState } from 'react';
import Label from './components/Label';
import Tips from './components/Tips';
import Input from './components/Input';
import { tips } from './consts';

import { ReactComponent as DollarIcon } from './assets/icon-dollar.svg';
import { ReactComponent as PersonIcon } from './assets/icon-person.svg';


const App = () => {
  const [tipAmount, setTipAmount] = useState('0.00')
  const [total, setTotal] = useState('0.00');
  const [inputChanger, setInputChanger] = useState(false)
  const [disable, setDisable] = useState(false);
  const [inputData, setInputData] = useState({
                                              bill: '',
                                              people: '',
                                              custom:'',
                                            })

                
const handleNumericInputs = (inputData) => {
  (inputData.bill || inputData.people || inputData.custom) ? setDisable(true): setDisable(false)
    
    if (inputData.bill && inputData.people && inputData.custom) {
        setTipAmount(Math.floor((inputData.bill / inputData.people) * inputData.custom) / 100)
        setTotal((Math.ceil((inputData.bill / inputData.people) * inputData.custom) / 100 + (inputData.bill/ inputData.people)))
    } else {
      setTipAmount('0.00')
      setTotal('0.00')
    }
}
console.log(disable);
return (
    <div className='App'>
        <div className='container'>
          <div className='container__billing'>
            <div className='container__billing__input-container'>
                <Label label='Bill'/>
                <Input  value={inputChanger ? '' : undefined}
                        icon={<DollarIcon/>}    
                        // border={false}
                        customStyles={{borderRadius: 5, padding: '0 20px', height: '30px', display: 'flex', alignItems: 'center', backgroundColor:'$veryLightGrayishCyan'}}
                        onInputValue={(value) => {
                                const currentState = {...inputData, bill:value}
                                setInputData(currentState)
                                handleNumericInputs(currentState)
                                setInputChanger(false)
                              }}
                    />
            </div>
            <div className='container__billing__input-container'>
                <Label label='Select Tip %'/>
                  <div className=' container__billing__tips-container'>
                  { tips.map(tip => <Tips key={tip.id} 
                                          tip={tip} 
                                          onPercent={(tip) => {
                                              const tipPercent = {...inputData, custom: tip.percent}
                                              setInputData(tipPercent)
                                              handleNumericInputs(tipPercent)
                                              
                                          }}
                                          onInputValue={(value) => {
                                              const customValue = {...inputData, custom: value}
                                              setInputData(customValue)
                                              handleNumericInputs(customValue)
                                              setInputChanger(false)
                                          }}
                                          value={inputChanger ? '' : undefined}
                                          disable={disable}
                                    />
                  )}
                </div>
            </div>
            <div className='container__billing__input-container'>
                <Label label='Number of people'/>
                <Input
                        value={inputChanger ? '' : undefined}
                        icon={<PersonIcon/>}
                        // border={false}
                        customStyles={{borderRadius: 5, padding: '0 20px', height: '30px', display: 'flex', alignItems: 'center', backgroundColor: '$veryLightGrayishCyan'}}
                        onInputValue={(value) => {
                          const currentState = {...inputData, people:value}
                          setInputData(currentState)
                          handleNumericInputs(currentState)
                          setInputChanger(false)
                        }}
                />
            </div>
          </div>
          <div className='container__result'>
              <div className='container__result__amount-container'>
                  <div>
                    <Label label='Tip Amount' person='/ person'/>
                  </div>
                  <span>${tipAmount}</span>
              </div>
              <div className='container__result__amount-container'>
                  <div>
                    <Label label='Total' person='/ person'/>
                  </div>
                  <span>${total}</span>
              </div>
              <button disabled={!disable}
                      className={disable ? 'container__result__btn-reset' : 'container__result__btn-disable'}
                      onClick={() => {
                        setTipAmount('0.00')
                        setTotal('0.00')  
                        setInputData({ bill: '', people: '', custom:'',})
                        setInputChanger(!inputChanger)
                        setDisable(false)
                      }}
                      >RESET</button>
          </div>
        </div>
    </div>
  );
}

export default App;
