import React from "react";
import Table from "./Components/Table";
import Reload from "./Components/Reload";
import { GlobalContext } from "../../Context";
import Popup from "./Components/Popup";
import { useParams } from "react-router-dom";

const Form = () => {
  const {
    loading,
    showData,
    filteredPacient,
    setFilteredPacient,
    inputVal,
    setInputVal,
    setCurrentPage,
  } = React.useContext(GlobalContext);
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [pacient, setPacient] = React.useState(null);
  const regexp = new RegExp(inputVal, "gi");
  const params = useParams();

  React.useEffect(() => {
    if (inputVal === "") {
      setFilteredPacient([]);
    } else {
      setFilteredPacient(
        showData.filter((item) =>
          regexp.test(item.name.first) ? filteredPacient.push(item) : ""
        )
      );
    }
  }, [inputVal]);

  function handlePacient(arr) {
    arr.filter((item) => {
      if (item.login.uuid === params.id) {
        setPacient(item);
      }
    });
  }

  function handleData(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    const month =
      date.getMonth() + 1 >= 10
        ? date.getMonth() + 1
        : `0${date.getMonth() + 1}`;
    return `${day}/${month}/${date.getFullYear()}`;
  }

  React.useEffect(() => {
    if (params.id && params.page) {
      fetch(
        `https://randomuser.me/api/?page=${params.page}&results=50&seed=abc`
      )
        .then((r) => r.json())
        .then((r) => handlePacient(r.results))
        .then(setCurrentPage(params.page));
    }
  }, [params]);

  React.useEffect(() => {
    if (pacient) setPopupOpen(true);
  }, [pacient]);

  return (
    <div className="flex justify-center">
      <Popup
        isOpen={popupOpen}
        closeModal={() => setPopupOpen(false)}
        pacient={pacient}
        handleData={handleData}
      />
      <form className="max-w-2xl pt-6">
        <label>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          harum optio debitis sequi in accusantium possimus, atque est error at
        </label>
        <div>
          <input
            type="text"
            name="name"
            onChange={(event) => setInputVal(event.target.value)}
            className="shadow-sm block w-full sm:text-sm  focus:border-gray-400 focus:ring-gray-400 border-gray-400 border-2 rounded-sm py-2 pl-4 my-8"
            placeholder="Searching"
          />
        </div>
        <Table
          handleData={handleData}
          setPopupOpen={setPopupOpen}
          setPacient={setPacient}
        />
        {loading && (
          <div className="flex justify-center mt-6">
            <Reload />
            <h3 className="ml-2">Loading more...</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
