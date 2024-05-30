import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './App.css'
import { useState } from 'react';

function App() {

  const [mass, setMass] = useState(0);
  const [height, setHeight] = useState(0);

  const [bmi, setBmi] = useState(0);
  const [status , setStatus] = useState("status");

  const [isMass, setisMass] = useState(false);
  const [isHeight, setisHeight] = useState(false);

  const calculate = () => {
    var bmi = mass / ((height / 100) * (height / 100));
    var result = parseFloat(bmi).toFixed(2);
    
    if (mass > 0 && height > 0) {

      setBmi(result);

      if (result <= 18.5) {
        //underwight
        colorfeedback.classList.add('text-warning')
        setStatus("underwight")
      }
      else if (result > 18.5 && result <= 25) {
        //normal
        colorfeedback.classList.add('text-success')
        setStatus("normal")
      }
      else if (result > 25 && result < 30) {
        //overWeight
        colorfeedback.classList.add('text-danger')
        setStatus("overWeight")

      }
      else {
        //obesity
        colorfeedback.classList.add('text-danger')
        setStatus("obesity")

      }

    }

    else{
      alert("invalid range of data")
      
    }

  }

  const reset = () => {
    setBmi(0);
    setHeight(0);
    setMass(0);
    setStatus("status")
    colorfeedback.classList.remove('text-warning');
    colorfeedback.classList.remove('text-success');
    colorfeedback.classList.remove('text-danger');



  }
  return (
    <>
      <div className=' d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>

        <div  className=''>
          <h2 className='text-center'>BodyMassIndex </h2>
          <hr />
          <div className='m-3 text-center'>
            <h4 id='colorfeedback'>{status==="status" ? "" : status}</h4>
            <h3 id='' className=''>{bmi===0 ? "" : bmi}</h3>
            </div>
          <form action="" className='form d-flex justify-content-center align-items-center flex-column'>
            <div className='d-flex justify-content-center align-items-center flex-row'>
              <TextField id="outlined-basic" type='number' className='mt-3 me-1 w-25' label="mass (kg)" variant="outlined" value={mass || ""} onChange={(e) => setMass(e.target.value)} />

              <TextField id="outlined-basic" type='number' className='mt-3 ms-1 w-50' label="height (cm)" variant="outlined" value={height || ""} onChange={(e) => setHeight(e.target.value)} />
            </div>

            <div className='d-flex justify-content-center align-items-center w-100'>
              <Button variant="contained" className='mt-3 me-1 w-25' size="large" color='error' onClick={reset}>⟳ </Button>
              <Button variant="contained" className='mt-3 ms-1 w-50' size="large" color='success' onClick={calculate} disabled={isMass && isHeight ? true : false}>Calculate</Button>
            </div>







          </form>
        </div>

      </div>
    </>
  )
}

export default App
