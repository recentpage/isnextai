import React from "react";
import Header from "../../components/Navbar/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Link from "next/link";

export default function index() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <main>
              <div className="lg:relative lg:flex">
                {/* Content */}
                <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
                  <div className="lg:max-w-[640px] lg:mx-auto">
                    {/* Cart items */}
                    <div className="mb-6 lg:mb-0">
                      <div className="mb-3">
                        <div className="flex text-sm font-medium text-slate-400 space-x-2">
                          <span className="text-slate-500">Review</span>
                          <span>-&gt;</span>
                          <span className="text-slate-500">Payment</span>
                          <span>-&gt;</span>
                          <span className="text-indigo-500">Confirm</span>
                        </div>
                      </div>
                      <header className="mb-6">
                        {/* Title */}
                        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                          Thank you for your order ✨
                        </h1>
                        <p>
                          You will soon receive a confirmation email with
                          details of your order and a link to download the
                          files.
                        </p>
                      </header>
                      {/* Billing Information */}
                      <div>
                        <div className="text-slate-800 font-semibold mb-4">
                          Billing Information
                        </div>
                        <form>
                          <div className="space-y-4">
                            {/* 1st row */}
                            <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-name"
                                >
                                  Name
                                </label>
                                <input
                                  id="card-name"
                                  className="form-input w-full"
                                  type="text"
                                  defaultValue="Patrick"
                                />
                              </div>
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-surname"
                                >
                                  Surname
                                </label>
                                <input
                                  id="card-surname"
                                  className="form-input w-full"
                                  type="text"
                                  defaultValue="Sullivan"
                                />
                              </div>
                            </div>
                            {/* 2nd row */}
                            <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-address"
                                >
                                  Address
                                </label>
                                <input
                                  id="card-address"
                                  className="form-input w-full"
                                  type="text"
                                />
                              </div>
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-city"
                                >
                                  Town/City
                                </label>
                                <input
                                  id="card-city"
                                  className="form-input w-full"
                                  type="text"
                                />
                              </div>
                            </div>
                            {/* 3rd row */}
                            <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-state"
                                >
                                  State/Country
                                </label>
                                <input
                                  id="card-state"
                                  className="form-input w-full"
                                  type="text"
                                />
                              </div>
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-country"
                                >
                                  Country{" "}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <select
                                  id="card-country"
                                  className="form-select w-full"
                                >
                                  <option>Italy</option>
                                  <option>USA</option>
                                  <option>United Kingdom</option>
                                </select>
                              </div>
                            </div>
                            {/* 4th row */}
                            <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-postcode"
                                >
                                  Postcode
                                </label>
                                <input
                                  id="card-postcode"
                                  className="form-input w-full"
                                  type="text"
                                />
                              </div>
                              <div className="flex-1">
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="card-vat"
                                >
                                  VAT ID
                                </label>
                                <input
                                  id="card-vat"
                                  className="form-input w-full"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="text-right">
                              <button
                                type="submit"
                                className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500"
                              >
                                Download Invoice
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* Divider */}
                      <hr className="my-6 border-t border-slate-200" />
                      {/* Billing footer */}
                      <div className="bg-white rounded border border-slate-200 p-4">
                        <div className="text-center md:text-left md:flex md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-2">
                          <div className="text-sm">
                            Enjoy a{" "}
                            <span className="font-medium text-slate-800">
                              20% OFF
                            </span>{" "}
                            discount on your next order 🎉
                          </div>
                          <div className="relative inline-flex text-center px-3 py-1 rounded bg-emerald-500">
                            <div
                              className="absolute w-3 h-3 rounded-full bg-white left-0 -translate-x-1/2 top-1/2 -translate-y-1/2"
                              aria-hidden="true"
                            />
                            <div
                              className="absolute w-3 h-3 rounded-full bg-white right-0 translate-x-1/2 top-1/2 -translate-y-1/2"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-emerald-50 font-medium uppercase">
                              XMAS22
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
      </div>
    </div>
  );
}
