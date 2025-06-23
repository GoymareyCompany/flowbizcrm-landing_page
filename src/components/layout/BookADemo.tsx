"use client";

import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { BOOK_A_DEMO_MODAL_ID } from "@/constants";
import { ADD_INQUIRY_QUERY } from "../../../mutations/inquiryMutaitons";
import { useState } from "react";

interface BookADemoProps {}
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };


export function BookADemo({}: BookADemoProps) {
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle form submission logic here
    const formData = Object.fromEntries(new FormData(e.currentTarget).entries());

    const data = {
        contactName: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectScope: "Inquiry on the flowbizcrm system",
        serviceType: "Would like to book a demo for the project",
        companyName: formData.company
      }

    try {
      const response = await fetch("https://api.goymarey.com/api/graphql", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query: ADD_INQUIRY_QUERY, variables: {...data}}),
      });

      const responseData = await response.json();
      // console.log("Mutation response:", responseData.data);
      const { message, status } = responseData.data.addInquiry;

      if (status === 'Success') {
        toast.success('Success');
        const modal = document.getElementById(BOOK_A_DEMO_MODAL_ID) as HTMLDialogElement;
        modal?.close();
      } else {
        toast.error(message)
      }

    } catch (err: any) {
      console.error("GraphQL mutation error:", err);
      toast.error(err.message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog id={BOOK_A_DEMO_MODAL_ID} className="modal">
      <div className="modal-box max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Book Demo</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Company Name Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              onClick={() => {
                const modal = document.getElementById(BOOK_A_DEMO_MODAL_ID) as HTMLDialogElement;
                modal?.close();
              }}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {
                isLoading ? (
                    <div className="flex justify-center items-center h-full">
                      <PulseLoader 
                          color={'white'}
                          loading={isLoading}
                          cssOverride={override}
                          size={6}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                      />
                    </div>
                ) : "Submit"
              }
            </button>
          </div>
        </form>
      </div>
      
      {/* Modal backdrop - clicking outside closes the modal */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
