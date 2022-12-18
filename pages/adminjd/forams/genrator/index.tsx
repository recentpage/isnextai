import { useRouter } from "next/router";
import React from "react";
import Header from "../../../../components/admin/Navbar/Header";
import Sidebar from "../../../../components/admin/Sidebar/Sidebar";

export default function Fieldgen() {
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      fieldname: event.target.fieldname.value,
      fieldplaceholder: event.target.fieldplaceholder.value,
      fieldtype: event.target.fieldtype.value,
      textrows: event.target.textrows.value,
      textcols: event.target.textcols.value,
    };
    console.log(data);
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);

    const endpoint = "/api/fields";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    if (result.status === 1) {
      router.push("/adminjd/forams");
      console.log(result);
      return;
    } else if (result.status === 0) {
      alert("please fill all fields");
    }
  };
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
                      {/* Billing Information */}
                      <div>
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-4">
                            <div className="flex-1">
                              <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="fieldname"
                              >
                                Field Name
                              </label>
                              <input
                                id="fieldname"
                                className="form-input w-full"
                                type="text"
                              />
                            </div>
                            <div className="flex-1">
                              <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="fieldplaceholder"
                              >
                                Placeholder
                              </label>
                              <input
                                id="fieldplaceholder"
                                className="form-input w-full"
                                type="text"
                              />
                            </div>
                            <div className="flex-1">
                              <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="fieldtype"
                              >
                                Field Type
                              </label>
                              <input
                                id="fieldtype"
                                className="form-input w-full"
                                type="text"
                              />
                            </div>
                            <div className="flex-1">
                              <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="textcols"
                              >
                                Text Cols
                              </label>
                              <input
                                id="textcols"
                                className="form-input w-full"
                                type="text"
                              />
                            </div>
                            <div className="flex-1">
                              <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="textrows"
                              >
                                Text Rows
                              </label>
                              <input
                                id="textrows"
                                className="form-input w-full"
                                type="text"
                              />
                            </div>
                            <div className="text-right">
                              <button
                                type="submit"
                                className="btn bg-white border-blue-200 hover:border-slate-300 text-indigo-500"
                              >
                                Submiit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* Divider */}
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
