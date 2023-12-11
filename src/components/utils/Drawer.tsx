/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CloseButton from "../CloseButton";

export default function Drawer({children}: any) {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
     {React.cloneElement(children, {onClick: openDrawer})}
      <div
        className={`fixed inset-0 overflow-hidden z-50 transition-opacity top-[53px] flex justify-end ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>

          <div
            className="relative bg-stone-50 max-w-sm animate-fade-left w-full overflow-y-auto h-full shadow-sm rounded-l-lg"
          >
            <div className="pt-4 px-5 w-[380px]" >
              <div className="mb-6 flex items-center justify-between ">
              
            <span className="block font-extrabold text-xl ">Para negócios</span>
               <CloseButton onClick={closeDrawer}/>
              </div>

            
            </div>
            <div className="p-6 pt-2">
              <span className="block font-extrabold text-lg py-[1rem] border rounded-t-md text-center">Conheça mais soluções do LinkedIn</span>
              <span className="flex font-light text-sm py-[1rem] border rounded-md text-center p-2">
                teste
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
