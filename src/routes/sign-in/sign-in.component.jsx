import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //   useEffect(
  //     () => async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     },
  //     []
  //   );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <p>Sign In</p>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Account Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
