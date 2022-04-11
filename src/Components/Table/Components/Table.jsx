import React from "react";
import { GlobalContext } from "../../../Context";
import Content from "./Content";
import HeaderTable from "./HeaderTable";

const Table = ({ setPopupOpen, setPacient, handleData }) => {
  const { showData, setCurrentPage, currentPage, filteredPacient, inputVal } =
    React.useContext(GlobalContext);

  function handleScroll(ev) {
    const element = ev.target;
    if (
      Math.ceil(element.scrollTop + element.clientHeight) >=
      element.scrollHeight
    ) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleView(pacient) {
    console.log(pacient);
    setPopupOpen(true);
    setPacient(pacient);
    console.log(pacient);
  }

  if (filteredPacient.length >= 1 && inputVal !== "")
    return (
      <div
        onScroll={(event) => handleScroll(event)}
        className="max-h-[444px] overflow-y-scroll"
        id="container"
      >
        <HeaderTable />
        <Content
          allPacients={showData}
          filteredPacients={filteredPacient}
          handleView={handleView}
          handleData={handleData}
        />
      </div>
    );
  // inputVal !== null && filteredPacients.length === 0) ? (<h1 className="text-center font-semibold text-xl leading-4">Any pacient found...</h1>)
  if (inputVal !== "" && filteredPacient.length === 0) {
    if (inputVal !== null) {
      return (
        <div
          onScroll={(event) => handleScroll(event)}
          className="max-h-[444px] overflow-y-scroll"
          id="container"
        >
          <HeaderTable />
          <h1 className="text-center font-semibold text-xl mt-8 h-8">
            Any pacient found...
          </h1>
        </div>
      );
    }
  }

  return (
    <div
      onScroll={(event) => handleScroll(event)}
      className="max-h-[444px] overflow-y-scroll"
      id="container"
    >
      <HeaderTable />
      <Content
        allPacients={showData}
        filteredPacients={false}
        handleView={handleView}
        handleData={handleData}
      />
    </div>
  );
};

const style = {
  header:
    "bg-slate-300 py-2  w-3/12 font-bold text-lg text-slate-900 border-r-2 border-y-2 border-gray-400",
  headerVariant:
    "bg-slate-300 py-2  w-4/12 font-bold text-lg text-slate-900 border-2 border-gray-400",
  content:
    "bg-white py-2  w-3/12 font-bold text-lg text-slate-900 border-r-2 border-y-2 border-gray-400",
  contentVariant:
    "bg-white py-2  w-4/12 font-bold text-lg text-slate-900 border-2 border-gray-400",
};

export default Table;
