"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Breadcrumb from "../Common/Breadcrumb";
import PaymentMethod from "./PaymentMethod";
import Billing from "./Billing";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { useApi } from "@/services/apiServices";
import toast from "react-hot-toast";
import { useAppSelector } from "@/redux/store";
import {
  clearCartThunk,
  fetchLoggedUserThunk,
  removeAllItemsFromCart,
} from "@/redux/features/cart-slice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";

const BillingSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  address: z.string().min(1, "Billing Address is required"),
});
const Checkout = () => {
  const dispatch = useDispatch<AppDispatch>();

  // console.log("Cart items", cartItems);
  const searchParams = useSearchParams();
  const [checkoutData, setCheckoutData] = useState<any>(null);
  const { createOrder } = useApi();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    validationSchema: toFormikValidationSchema(BillingSchema),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  useEffect(() => {
    const encoded = searchParams.get("data");
    if (!encoded) return;

    try {
      const decoded = decodeURIComponent(encoded);
      const cartItems = JSON.parse(decoded);

      if (!Array.isArray(cartItems)) return;

      const transformedData = {
        items: cartItems.map((item: any) => ({
          product: item.id?.id || item.id?._id || item.id, // Handle nested structure
          productName: item.id?.name || item.name || "Unknown Product", // Extract product name
          quantity: item.quantity || 1,
          price: item.discountedPrice,
        })),
        price: {
          total: cartItems.reduce(
            (acc: number, item: any) =>
              acc + (item.discountedPrice || 0) * (item.quantity || 1),
            0
          ),
        },
      };

      setCheckoutData(transformedData);
    } catch (err) {
      console.error("Failed to decode or parse cart data:", err);
      setCheckoutData(null);
    }
  }, [searchParams]);

  const procedToCheckout = async () => {
    setLoading(true);
    try {
      const address = formik.values;
      const res = await createOrder({
        ...checkoutData,
        shippingAddress: address,
      });

      toast.success("Order Placed successfully");

      dispatch(fetchLoggedUserThunk() as any);
      dispatch(removeAllItemsFromCart());

      router.push("/");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
            {/* Left - Billing */}
            <div className="lg:max-w-[670px] w-full">
              <Billing formik={formik} />
            </div>

            {/* Right - Order summary */}
            <div className="max-w-[455px] w-full">
              <div className="bg-white shadow-1 rounded-[10px]">
                <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                  <h3 className="font-medium text-xl text-dark">Your Order</h3>
                </div>

                <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                  <div className="flex items-center justify-between py-5 border-b border-gray-3">
                    <h4 className="font-medium text-dark">Product</h4>
                    <h4 className="font-medium text-dark text-right">
                      Subtotal
                    </h4>
                  </div>

                  {checkoutData?.items?.map((item: any, index: number) => (
                    <div
                      key={item.product || index}
                      className="flex items-center justify-between py-5 border-b border-gray-3"
                    >
                      <p className="text-dark">
                        {item.productName} x {item.quantity}
                      </p>
                      <p className="text-dark text-right">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  ))}

                  <div className="flex items-center justify-between py-5 border-b border-gray-3">
                    <p className="text-dark">Shipping Fee</p>
                    <p className="text-green text-right">00.00 (Free)</p>
                  </div>

                  <div className="flex items-center justify-between pt-5">
                    <p className="font-medium text-lg text-dark">Total</p>
                    <p className="font-medium text-lg text-dark text-right">
                      ${checkoutData?.price?.total.toFixed(2) || 0}
                    </p>
                  </div>
                </div>
              </div>

              <PaymentMethod />

              <button
                onClick={procedToCheckout}
                className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
                disabled={loading}
              >
                {loading ? "Processing..." : "Process to Checkout"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
