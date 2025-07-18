import React from "react";
const Billing = ({ formik }: { formik: any }) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5"
    >
      <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
        Billing details
      </h2>
      <div className="flex flex-col gap-1 mb-5">
        <label htmlFor="name" className="block mb-2.5">
          Name <span className="text-red">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Jhon"
          className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red text-sm mt-1">{formik.errors.name}</div>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="phone" className="block mb-2.5">
          Phone <span className="text-red">*</span>
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red text-sm mt-1">{formik.errors.phone}</div>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="address" className="block mb-2.5">
          billing Address
          <span className="text-red">*</span>
        </label>
        <textarea
          name="address"
          id="address"
          placeholder="House number and street name"
          className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          rows={3}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address && (
          <div className="text-red text-sm mt-1">{formik.errors.address}</div>
        )}
      </div>
    </form>
  );
};

export default Billing;
