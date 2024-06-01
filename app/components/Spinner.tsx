import { ImSpinner9 } from "react-icons/im";
import { StyledComponent } from "../types/component_types";
interface SpinnerPropsTypes extends StyledComponent {}

const Spinner = ({ className }: StyledComponent) => {
  return <ImSpinner9 className={`animate-spinner ${className}`} />;
};

export default Spinner;
