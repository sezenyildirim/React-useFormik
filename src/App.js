import './App.css';
import { useFormik } from 'formik';

function App() {
  const {handleSubmit, handleChange,values} = useFormik({
    initialValues: {
      firstName: 'sezen',
        lastName: 'yıldırım',
        email: '',
        gender:'female',
        hobies:[],
        country:"",
    },
    onSubmit: values => {
      console.log(values);
    },
  });





  return (
    <div className="App">
       <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}> 
    <label htmlFor="firstName">First Name</label>
    <input name='firstName' value={values.firstName} onChange={handleChange} ></input>
<br/>
<br/>
    <label htmlFor="lastName">Last Name</label>
    <input name='lastName' value={values.lastName} onChange={handleChange} ></input>
  
    <br/>
    <br/>

    <label htmlFor="email">Email</label>
    <input name='email' onChange={handleChange} ></input>
  
    <br/>
    <br/>
 
    <span>Male</span>
    <input type='radio' name='gender' value={"male"} onChange={handleChange} checked = {values.gender === "male"} ></input>
    <span>Female</span>
    <input type='radio' name='gender' value={"female"} onChange={handleChange} checked = {values.gender === "female"}></input>
    <br/>
    <br/>
    <div>
    Drawing
    <input type='checkbox' name='hobies' value="Drawing" onChange={handleChange}></input>
    </div>

    <div>
    Swimming
    <input type='checkbox' name='hobies' value="Swimming" onChange={handleChange}></input>
    </div>

    <div>
    Reading
    <input type='checkbox' name='hobies' value="Reading" onChange={handleChange}></input>
    </div>

    <br/>
    <br/>
<select name='country' onChange={handleChange}>
  <option value="TR">Türkiye</option>
  <option value="USA">America</option>
  <option value="ENG">England</option>
</select>

    <br/>
    <br/>
    <button type="submit">Submit</button>

    <br/>
    <br/>
    {JSON.stringify(values)}
  </form>
    </div>
  );
}

export default App;
