import React from 'react'
import './FormModal.css'
import{Button} from 'react-bootstrap'
function FormModal({closeform}) {
  return (
    <div className='formbackground'>
        <div className='formcontainer'>
            
            <div className='body-1'>
            <div className='formclosebutton'>
                <button onClick={() => closeform(false)}>x</button>
            </div>
                <form className='submission-form'>
                   
                    <label> Given Name </label>
                    <input type= "text" placeholder='firstname' className='form1' />
                   
                    <label>Family Name </label>
                    <input type="text" placeholder='familyname'/>
                    <label>Address </label>
                    <input type="text" placeholder='Customer addresss '/>
                   
                    <label>Date of Birth </label>
                    <input type="date"/>
                   
                    <label for='email'>Email</label>
                        <input type="email" placeholder='email' id='email'/>
                    
                    <label>Upload file</label>
                    <input type="file" id="myFile" name="filename"/>
                    <label>Mobile Number
                        <input type="number" placeholder="Phone number"/>
                    </label>
                    <br></br>
                    <Button variant='primary' type="submit" className='sndbtn'>submit</Button>
                </form>
            </div>
        </div>
     
    </div>
  )
}

export default FormModal
