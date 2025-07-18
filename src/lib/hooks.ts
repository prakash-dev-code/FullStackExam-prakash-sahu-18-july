import { useQuery, useMutation, useQueryClient } from "react-query";
import api from "./axios";

export const useProduct = (id: string) =>
  useQuery(
    ["product", id],
    async () => (await api.get(`/api/v1/products/${id}`)).data.data.doc,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newProduct: FormData) =>
      api.post("/api/v1/products/", newProduct, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries("products"),
    }
  );
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, data }: { id: string; data: FormData }) =>
      api.patch(`/api/v1/products/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries("products"),
    }
  );
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => api.delete(`/api/v1/products/${id}`), {
    onSuccess: () => queryClient.invalidateQueries("products"),
  });
};
