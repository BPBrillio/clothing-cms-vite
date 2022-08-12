import { useState } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      //Now we have to add the displayName inside the user manually unlike google's oauth
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      console.log(userDocRef);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("Error in user creation:", err);
      }
      resetFormFields();
    }
  };
  const handleChange = (e) => {
    // console.log(formFields);
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  const resetFormFields = (e) => {
    // console.log(formFields);
    setFormFields(defaultFormFields);
  };
  return (
    <>
    <h2>Don't have account?</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput type="text"
          label="Display Name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button buttonType="google" type="submit">Sign Up</Button>
      </form>
    </>
  );
};

export default SignUpForm;
