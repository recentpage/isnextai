import React from "react";
import Link from "next/link";

function JobListItem(props:any) {
  return (
    <div
      className={`shadow-lg rounded-sm border px-5 py-4 ${
        props.type === "Featured"
          ? "bg-amber-50 border-amber-300"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2">
        {/* Left side */}
        <div className="flex items-start space-x-3 md:space-x-4">
          <div className="w-9 h-9 shrink-0 mt-1">
            <img
              className="w-9 h-9 rounded-full"
              src={props.image}
              width="36"
              height="36"
              alt={props.company}
            />
          </div>
          <div>
            <Link
              className="inline-flex font-semibold text-slate-800"
              href={props.link}
            >
              {props.role}
            </Link>
            <div className="text-sm">{props.details}</div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center space-x-4 pl-10 md:pl-0">
          <div className="text-sm text-slate-500 italic whitespace-nowrap">
            {props.date}
          </div>
          {props.type && (
            <div
              className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${
                props.type === "Featured"
                  ? "bg-amber-100 text-amber-600"
                  : "bg-emerald-100 text-emerald-600"
              }`}
            >
              {props.type}
            </div>
          )}
          <button
            className={`${
              props.fav
                ? "text-amber-500"
                : "text-slate-300 hover:text-slate-400"
            }`}
          >
            <span className="sr-only">Bookmark</span>
            <svg
              className="w-3 h-4 fill-current"
              width="12"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobListItem;
