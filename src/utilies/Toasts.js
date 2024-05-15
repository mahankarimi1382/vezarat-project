import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Eror = (a = "خطا") =>
  toast.error(a, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
export const success = (a="موفقیت") =>
  toast.success(a, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
