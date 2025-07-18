import { apiMethod } from "@/utils/apiMethod";

const signIN = async (body: any) => {
  return apiMethod(`api/v1/users/sign-in/`, "post", body);
};

const forgerPassword = async (body: any) => {
  return apiMethod(`api/v1/users/forget-password/`, "post", body);
};

const resetPassword = async (body: any, token: any) => {
  return apiMethod(`api/v1/users/reset-password/${token}`, "patch", body);
};

const signUp = async (body: any) => {
  return apiMethod(`api/v1/users/sign-up/`, "post", body);
};
const verifyOTP = async (body: any) => {
  return apiMethod(`api/v1/users/verify-email/`, "post", body);
};

const changePassword = async (body: any) => {
  return apiMethod(`api/v1/users/change-password/`, "patch", body, true);
};
const getLoggedUser = async () => {
  return apiMethod(`api/v1/users/me/`, "get", {}, true);
};
const getAllProducts = async (page = 1, limit = 10, name = "") => {
  const query = `page=${page}&limit=${limit}${
    name ? `&name=${encodeURIComponent(name)}` : ""
  }`;
  return apiMethod(`api/v1/products?${query}`, "get", {});
};
const deleteProduct = async (id: string) => {
  return apiMethod(`api/v1/products/${id}`, "delete", {}, true);
};
const createProduct = async (body: any) => {
  return apiMethod(`api/v1/products/`, "post", body, true);
};

const updateProduct = async (id: string, body: any) => {
  return apiMethod(`api/v1/products/${id}`, "patch", body, true);
};
const getProductById = async (id: string) => {
  return apiMethod(`api/v1/products/${id}`, "get", {});
};

const getUser = async () => {
  return apiMethod(`api/v1/users`, "get", {}, true);
};
const updateUser = async (id: string, body: any) => {
  return apiMethod(`api/v1/users/${id}`, "patch", body, true);
};
const getAllUser = async (page = 1, limit = 10, name = "") => {
  const query = `page=${page}&limit=${limit}${
    name ? `&name=${encodeURIComponent(name)}` : ""
  }`;
  return apiMethod(`api/v1/users?${query}`, "get", {}, true);
};
const deleteUser = async (id: string) => {
  return apiMethod(`api/v1/users/${id}`, "delete", {}, true);
};
const createOrder = async (body: any) => {
  return apiMethod(
    `api/v1/orders`,
    "post",
    { ...body, status: "processing" },
    true
  );
};

const getOrders = async () => {
  return apiMethod(`api/v1/orders`, "get", {}, true);
};
const getAllOdersAdmin = async (page = 1, limit = 10, name = "") => {
  const query = `page=${page}&limit=${limit}${
    name ? `&name=${encodeURIComponent(name)}` : ""
  }`;
  return apiMethod(`api/v1/orders/admin?${query}`, "get", {}, true);
};
export const useApi = () => ({
  signIN,
  forgerPassword,
  resetPassword,
  signUp,
  verifyOTP,
  changePassword,
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductById,
  getLoggedUser,
  getUser,
  updateUser,
  getAllUser,
  deleteUser,
  createOrder,
  getOrders,
  getAllOdersAdmin,
});
