import React, { useEffect, useState } from "react";
import SingleOrder from "./SingleOrder";
// import ordersData from "./ordersData";
import { useApi } from "@/services/apiServices";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

const Orders = () => {
  const { getOrders } = useApi();
  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useQuery<any>("orders", getOrders, {
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,

    onError: (err: any) => {
      console.error("Fetch products error:", err.message);
      toast.error(
        err.response?.data?.message || err.message || "Failed to fetch products"
      );
    },
  });
  const ordersData = orders.data?.doc || [];

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[770px]">
          {/* <!-- order item --> */}
          {ordersData.length > 0 && (
            <div className="items-center justify-between py-4.5 px-7.5 hidden md:flex ">
              <div className="min-w-[111px]">
                <p className="text-custom-sm text-dark">Order Id</p>
              </div>

              <div className="min-w-[128px]">
                <p className="text-custom-sm text-dark">Status</p>
              </div>

              <div className="min-w-[213px]">
                <p className="text-custom-sm text-dark">Name</p>
              </div>

              <div className="min-w-[113px]">
                <p className="text-custom-sm text-dark">Total</p>
              </div>

              <div className="min-w-[113px]">
                <p className="text-custom-sm text-dark">Action</p>
              </div>
            </div>
          )}
          {ordersData.length > 0 ? (
            ordersData.map((orderItem: any, key: any) => (
              <SingleOrder key={key} orderItem={orderItem} smallView={false} />
            ))
          ) : (
            <p className="py-9.5 px-4 sm:px-7.5 xl:px-10">
              You don&apos;t have any orders!
            </p>
          )}
        </div>

        {ordersData.length > 0 &&
          ordersData.map((orderItem: any, key: any) => (
            <SingleOrder key={key} orderItem={orderItem} smallView={true} />
          ))}
      </div>
    </>
  );
};

export default Orders;
