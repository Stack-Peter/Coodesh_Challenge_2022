import React from "react";

const HeaderTable = () => {
  return (
    <div className="flex text-center">
      <div className={`${style.headerVariant}`}>Name</div>
      <div className={`${style.header}`}>Gender</div>
      <div className={`${style.header}`}>Birth</div>
      <div className={`${style.header}`}>Actions</div>
    </div>
  );
};

const style = {
  header:
    "bg-slate-300 py-2  w-3/12 font-bold text-lg text-slate-900 border-r-2 border-y-2 border-gray-400",
  headerVariant:
    "bg-slate-300 py-2  w-4/12 font-bold text-lg text-slate-900 border-2 border-gray-400",
};

export default HeaderTable;
