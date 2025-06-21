"use client";

import { BOOK_A_DEMO_MODAL_ID } from "@/constants";
import { FaArrowRight } from "react-icons/fa";

interface BookADemoButtonProps {

}

export function BookADemoButton({}:BookADemoButtonProps){
   return (
     <button
       className="btn btn-primary w-fit lg:py-4 px-10 rounded-lg"
       onClick={() => {
         const bookAdemoDialog = document?.getElementById?.(
           BOOK_A_DEMO_MODAL_ID
         ) as HTMLDialogElement;
         bookAdemoDialog?.showModal();
       }}>
       Try Flowbiz free <FaArrowRight className="inline-block ml-2" />
     </button>
   );
}
export function ScheduleADemoButton({}:BookADemoButtonProps){
   return (
     <button
       className="btn btn-outline border-white text-white hover:bg-white/20"
       onClick={() => {
         const bookAdemoDialog = document?.getElementById?.(
           BOOK_A_DEMO_MODAL_ID
         ) as HTMLDialogElement;
         bookAdemoDialog?.showModal();
       }}>
         Schedule a Demo
     </button>
   );
}
