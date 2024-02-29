import { Bounce, ToastOptions, toast } from "react-toastify";

const topRightOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
  style: {
    fontSize: "14px",
  },
};

export const showError = (message: string) =>
  toast.error(message, topRightOptions);

export const showWarn = (message: string) =>
  toast.warn(message, topRightOptions);

export const showSuccess = (message: string) =>
  toast.success(message, topRightOptions);
