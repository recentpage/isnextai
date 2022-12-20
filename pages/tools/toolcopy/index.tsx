import React from "react";
import Link from "next/link";
import { CustomEditor } from "../../../components/editor/CustomEditor";

function Toolcopy() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      productname: event.target.productname.value,
      productcharacteristics: event.target.productcharacteristics.value,
    };
    console.log(data);
    alert("control j was clicked ${data}");
  };
  return (
    <main className="bg-white">
      <div className="flex-1 border-b-2">
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link className="block" href="/">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient
                  x1="28.538%"
                  y1="20.229%"
                  x2="100%"
                  y2="108.156%"
                  id="logo-a"
                >
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="88.638%"
                  y1="29.267%"
                  x2="22.42%"
                  y2="100%"
                  id="logo-b"
                >
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path
                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                fill="#4F46E5"
              />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
          </Link>
          <div className="w-96 rounded-xl ml-auto">
            <input
              id="company-name"
              className="form-input w-full"
              type="text"
              placeholder="Untitled Document"
            />
          </div>
          <div className="flex items-center justify-between ml-4">
            <button className="font-bold btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ml-auto w-full">
              Save This Response For Feature
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex">
        {/* Content */}
        <div className="w-full md:w-1/2 border-r-2 h-[calc(100vh-5.75rem)] sticky top-16 overflow-y-scroll no-scrollbar overscroll-contain">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            <div className="px-4 py-8">
              <div className="max-w-sm mx-auto">
                {/* htmlForm */}
                <form onSubmit={handleSubmit}>
                  <div className="space-y-2 mb-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="productname"
                      >
                        Product/Service Name
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="productname"
                        className="form-input w-full"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="productcharacteristics"
                      >
                        Product/Service Characteristics
                        <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="productcharacteristics"
                        className="form-input w-full"
                        rows={4}
                        cols={4}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="country"
                      >
                        Country <span className="text-rose-500">*</span>
                      </label>
                      <select id="country" className="form-select w-full">
                        <option>USA</option>
                        <option>Italy</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      id="textgenrator"
                      accessKey="j"
                      className="font-bold rounded-xl text-xl btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white ml-auto w-full"
                    >
                      Generate Copy
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex items-start px-8 mb-4 last:mb-0">
              <div className="font-bold text-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
                Sed euismod nisi porta lorem mollis. Tellus elementum sagittis
                vitae et leo duis. Viverra justo nec ultrices dui. Sed lectus
                vestibulum mattis ullamcorper velit sed. Ut sem nulla pharetra
                diam sit amet 🎁
              </div>
            </div>
            <div className="flex items-start px-8 mb-4 last:mb-0">
              <div className="font-bold text-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
                Sed euismod nisi porta lorem mollis. Tellus elementum sagittis
                vitae et leo duis. Viverra justo nec ultrices dui. Sed lectus
                vestibulum mattis ullamcorper velit sed. Ut sem nulla pharetra
                diam sit amet 🎁
              </div>
            </div>
            <div className="flex items-start px-8 mb-4 last:mb-0">
              <div className="font-bold text-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
                Sed euismod nisi porta lorem mollis. Tellus elementum sagittis
                vitae et leo duis. Viverra justo nec ultrices dui. Sed lectus
                vestibulum mattis ullamcorper velit sed. Ut sem nulla pharetra
                diam sit amet 🎁
              </div>
            </div>
            <div className="flex items-start px-8 mb-4 last:mb-0">
              <div className="font-bold text-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
                Sed euismod nisi porta lorem mollis. Tellus elementum sagittis
                vitae et leo duis. Viverra justo nec ultrices dui. Sed lectus
                vestibulum mattis ullamcorper velit sed. Ut sem nulla pharetra
                diam sit amet 🎁
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="p-2 w-full md:w-1/2 border-r-2 h-[calc(100vh-5.75rem)] sticky top-16 overflow-y-scroll no-scrollbar overscroll-contain">
          <CustomEditor />
        </div>
      </div>
    </main>
  );
}

export default Toolcopy;
