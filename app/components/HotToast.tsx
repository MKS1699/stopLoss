import { Toaster } from "react-hot-toast";

const HotToast = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      toastOptions={{
        duration: 2000,
      }}
    />
  );
};

export default HotToast;
