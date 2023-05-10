import React from 'react'

const SignUp = () => {
  return (
    <div className='sign'>
      <div className="sec1">
        <h3>Welcome to your new digital reality that will rock your world.</h3>
        <p>
          Let us help you take you from zero to serious business and beyond. Our
          no-strings attached free trial lets you test our product today.
        </p>
          </div>
          <label htmlFor="signUp" className="signUpLabel">
              <input type="email" name="email 2" className='email2' />
              <input type="submit" value="Create an account" className='submit2'/>
          </label>
    </div>
  );
}

export default SignUp