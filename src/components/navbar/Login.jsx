import React from 'react'


const Login = () => {
    const {register, handleSubmit , formState:{errors}} = useForm()

  return (
    <div>
        <div>
      <label htmlFor="contect"></label>
      <input type="number" name="contect" id="contect" />
       {errors.contect && <p style={{ color: 'red' }}>{errors.contect.message}</p>}
      </div>
    </div>
  )
}

export default Login
