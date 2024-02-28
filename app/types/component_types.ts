export interface StyledComponent {
  className?: string;
}

export interface FieldPropsTypes extends StyledComponent {
  slice: "login" | "signUp" | "password";
}
