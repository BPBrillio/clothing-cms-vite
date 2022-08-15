import {
  BaseButtonContainer,
  GoogleSignInButtonContainer,
  InvertedButtonContainer,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButtonContainer,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButtonContainer,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButtonContainer,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton type="button" {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
