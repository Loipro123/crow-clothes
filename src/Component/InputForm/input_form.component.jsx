import React from 'react';
import './input_form.styles.scss';

const InputForm = ({label, handleChange,...otherProperties}) => (
   <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProperties}/>
      {label ? 
    (<label className = {`${otherProperties.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>):
    null
    }
   </div>
);

export default InputForm;