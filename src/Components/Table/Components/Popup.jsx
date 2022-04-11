import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { GlobalContext } from "../../../Context";

export default function Popup({ isOpen = false, closeModal, pacient, handleData }) {

  const { suaURL } = React.useContext(GlobalContext)

  function handleClick(pacient) {
    let copyText = "";
    copyText = document.getElementById("clipboard");
    copyText.value = `${suaURL}${pacient.page}/${pacient.login.uuid}`;
    navigator.clipboard.writeText(copyText.value);
    alert("Link copied to clipboard! - " + copyText.value);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-primary-100 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-transparent"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Content */}
              <div></div>
              <div className="grid mt-4" />
              {pacient && (
                <form>
                  <div>
                    <div className="grid relative bg-white">
                      <div className="justify-self-center mt-[-6.5rem]">
                        {pacient && (
                          <img
                            src={pacient.picture.large}
                            className="rounded-full border-4"
                          />
                        )}
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <p className="text-center mt-4">
                          {pacient &&
                            `${pacient.name.title} ${pacient.name.first} ${pacient.name.last}`}
                        </p>
                        <p><strong>Email - </strong>{pacient.email}</p>
                        <p><strong>Gender - </strong>{pacient.gender}</p>
                        <p><strong>Date of birth - </strong>{handleData(pacient.dob.date)}</p>
                        <p><strong>Cellphone - </strong>{pacient.cell}</p>
                        <p><strong>nationality - </strong>{pacient.nat}</p>
                        <p><strong>Adress - </strong>{`${pacient.location.state}, ${pacient.location.city}, ${pacient.location.street.name}, ${pacient.location.street.number}.`}</p>
                        <p><strong>ID - </strong>{pacient.login.uuid}</p>
                        <button
                          id="clipboard"
                          className="rounded-md bg-slate-400 hover:bg-slate-500"
                          onClick={(e) => (
                            e.preventDefault(), handleClick(pacient)
                          )}
                        >
                          Link
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end"></div>
                  </div>
                </form>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
