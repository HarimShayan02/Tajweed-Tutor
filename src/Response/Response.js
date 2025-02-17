import { toast } from "react-toastify";
export const Error = (message) => toast.error(message);
export const Success = (message) => toast.success(message);
export const Info = (message) => toast.info(message);
