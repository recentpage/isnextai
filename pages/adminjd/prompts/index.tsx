import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React from "react";
import Header from "../../../components/admin/Navbar/Header";
import JobListItem from "../../../components/partials/JobListItem";
import PaginationNumeric from "../../../components/partials/PaginationNumeric";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";

export default function Forms({ allfields }: any) {
  const router = useRouter();

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/");
    return;
  }
  const fields = allfields;
  console.log(fields);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Search For Your Fields ✨
                </h1>
              </div>

              {/* Post a job button */}
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Post A Job</span>
              </button>
            </div>

            {/* Page content */}
            <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
              {/* Sidebar */}
              {/* <JobSidebar /> */}

              {/* Content */}
              <div className="w-full">
                {/* Search form */}
                <div className="mb-5">
                  <form className="relative">
                    <label htmlFor="job-search" className="sr-only">
                      Search
                    </label>
                    <input
                      id="job-search"
                      className="form-input w-full pl-9 focus:border-slate-300"
                      type="search"
                      placeholder="Search job title or keyword…"
                    />
                    <button
                      className="absolute inset-0 right-auto group"
                      type="submit"
                      aria-label="Search"
                    >
                      <svg
                        className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                        <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                      </svg>
                    </button>
                  </form>
                </div>

                {/* Jobs header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-slate-500 italic">
                    Showing 289 Jobs
                  </div>
                  {/* Sort */}
                  <div className="text-sm"></div>
                </div>

                {/* Jobs list */}
                <div className="space-y-2">
                  {fields.map((field: any) => {
                    return (
                      <JobListItem
                        key={field.id}
                        id={field.id}
                        // image={field.image}
                        name={field.name}
                        link={field.type}
                        email={field.placeholder}
                        date={field.fieldclass}
                        type={field.type}
                        fav={field.name}
                      />
                    );
                  })}
                </div>

                {/* Pagination */}
                <div className="mt-6">
                  <PaginationNumeric />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  // READ all notes from DB
  const allfields = await prisma?.fields.findMany({
    select: {
      id: true,
      name: true,
      placeholder: true,
      type: true,
      fieldid: true,
      fieldclass: true,
    },
  });

  return {
    props: {
      allfields,
    },
  };
};
