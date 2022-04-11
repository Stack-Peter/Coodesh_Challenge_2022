import React from "react";
import { GlobalContext } from "../../../Context";

const Content = ({ allPacients, filteredPacients, handleView, handleData }) => {
  const { inputVal } = React.useContext(GlobalContext);
  let pacientsToShow;
  filteredPacients.length >= 1
    ? (pacientsToShow = filteredPacients)
    : (pacientsToShow = allPacients);

  return (
    <>
      {pacientsToShow &&
        pacientsToShow.map((pacient, index) => (
          <div
            key={index + pacient.name.first}
            className="flex text-center h-[3rem] mt-[-4px]"
          >
            <div className={`${style.contentVariant}`}>
              {`${pacient.name.first || ""} ${pacient.name.last || ""}`}
            </div>
            <div className={style.content}>{pacient.gender || ""}</div>
            <div className={style.content}>
              {handleData(pacient.dob.date) || ""}
            </div>
            <div className={style.content}>
              <button
                onClick={(e) => (e.preventDefault(), handleView(pacient))}
                className="bg-gray-500 rounded-md px-3 text-white font-semibold hover:bg-slate-600"
              >
                View
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
const style = {
  content:
    "bg-white py-2  w-3/12 font-bold text-lg text-slate-900 border-r-2 border-y-2 border-gray-400",
  contentVariant:
    "bg-white py-2  w-4/12 font-bold text-lg text-slate-900 border-2 border-gray-400",
};

export default Content;
