import React, { useState } from "react";
import axios from "axios";

const AddStore = ({ fetchStores }) => {
  const [showModal, setShowModal] = useState(false);
  const [storesdata, setStoresData] = useState({
    name: "",
    address: "",
    cost: "",
    sell: "",
  });

  const addStore = async (e) => {
    e.preventDefault();
    console.log(storesdata);
    try {
      const res = await axios.post("https://stock-mate-0uuk.onrender.com/stores", storesdata);
      console.log(res);
      setShowModal(false);
      setStoresData({ name: "", address: "", cost: "", sell: "" });
      fetchStores();
      alert("successful insert");
    } catch (error) {
      alert(error.response.data.error);

      console.log(error);
    }
  };

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (e.target.tagName === "INPUT") {
      setStoresData({ ...storesdata, [name]: value });
    } else if (e.target.tagName === "TEXTAREA") {
      setStoresData({ ...storesdata, [name]: value });
    }
  };

  return (
    <>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Store
      </button>
      {showModal ? (
        <>
          <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full h-full max-w-md md:h-auto">
              <div className="relative bg-white rounded-lg shadow ">
                <section className="bg-white">
                  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-10">
                    <div className="flex justify-between">
                      <h2 className="mb-4 text-xl font-bold text-gray-900">
                        Add product
                      </h2>
                      <button
                        type="button"
                        className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => setShowModal(false)}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <form action="#">
                      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Store Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            value={storesdata.name}
                            onChange={handleInputs}
                            placeholder="Type store name here"
                            required
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            value={storesdata.address}
                            onChange={handleInputs}
                            placeholder="Type store address here"
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Cost Price
                          </label>
                          <input
                            type="number"
                            name="cost"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            value={storesdata.cost}
                            onChange={handleInputs}
                            placeholder="0"
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Selling Price
                          </label>
                          <input
                            type="number"
                            name="sell"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            value={storesdata.sell}
                            onChange={handleInputs}
                            placeholder="0"
                            required
                          />
                        </div>
                        {/* <div>
                          <label
                            for="manufacturer"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            manufacturer
                          </label>
                          <select
                            id="manufacturer"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          >
                            <option selected="">Electronics</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                          </select>
                        </div>
                        <div>
                          <label
                            for="item-weight"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Quantity
                          </label>
                          <input
                            type="number"
                            name="item-weight"
                            id="item-weight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                            value="15"
                            placeholder="Ex. 12"
                            required
                          />
                        </div> */}
                        {/* <div className="sm:col-span-2">
                          <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            rows="8"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Write a product description here..."
                            value={storesdata.description}
                            name="description"
                            onChange={handleInputs}
                          ></textarea>
                        </div> */}
                      </div>
                      <div className="flex items-center justify-center space-x-4">
                        {/* <button
                          type="button"
                          className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          <svg
                            className="w-5 h-5 mr-1 -ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Discard
                        </button> */}
                        <button
                          type="submit"
                          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          onClick={addStore}
                        >
                          Add Store
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddStore;
