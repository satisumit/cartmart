import React from "react";
import { Flame, Lightbulb } from "lucide-react";
interface CardProps {
  property?: string;
  // imgurl : string;
  // title: string;
  // desc:string;
}
const Card: React.FC<CardProps> = ({ property }) => {
  return (
    <>
      <article
        className={`w-[min(100%,250px)] relative after:w-[6.20rem] after:h-[1.5rem] after:rounded-bl-3xl dark:after:shadow-[-35px_35px_0px_30px_rgba(15,23,42,1)] dark:after:shadow-slate-900 after:shadow-slate-200 after:shadow-[-35px_35px_0px_30px_rgba(226,232,240,1)] after:bg-transparent after:-z-10 z-10 after:absolute after:top-[1.05rem] after:right-6 rounded-3xl `}
      >
        {property === "popular" && (
          <center className="absolute w-28 h-8 bg-slate-200 dark:bg-slate-900 top-0 right-0 rounded-3xl dark:text-slate-100 text-slate-900 flex items-center justify-center border-2 border-slate-500">
            <Flame className="text-orange-600" /> <strong>Popular</strong>{" "}
          </center>
        )}
        {property === "new" && (
          <center className="absolute w-28 h-8 bg-slate-200 dark:bg-slate-900 top-0 right-0 rounded-3xl   flex items-center justify-center border-2 border-slate-500 dark:text-slate-200">
            <Lightbulb className="h-6 w-6 text-green-700 dark:text-green-300" />{" "}
            <strong>NEW</strong>
          </center>
        )}
        <div
          className={`author w-32 rounded-t-3xl pt-2 pr-8 dark:bg-slate-900 bg-slate-200  border-2 border-b-0 border-r-0 border-slate-400 shadow-[-1.5px_3px_0px_1.5px_rgba(234,88,12,0)] ${
            property === "popular" && "shadow-orange-500"
          } ${property === "new" && "shadow-teal-400"}`}
        >
          <img
            src="./img/logo.png"
            alt="logo"
            className=" dark:filter-none invert"
          />
        </div>
        <div
          className={`rounded-3xl rounded-tl-none shadow-[0px_3px_0px_3px_rgba(234,88,12,0)] ${
            property === "popular" && "shadow-orange-500"
          } 
            ${property === "new" && "shadow-teal-500"}`}
        >
          <div className="image bg-slate-200 dark:bg-slate-900 w-full p-5 rounded-tr-3xl border-2 border-slate-400 border-y-0">
            <img src="./img/mac.png" alt="mac" className="w-5/6" />
          </div>
          <div className="content bg-slate-200 dark:bg-slate-900 dark:text-slate-200 text-slate-950 p-4 border-2 border-slate-400 border-y-0">
            <h2 className="text-lg">MacBook Air</h2>
            <p className="text-xs">
              MacBook by Apple with windows 12 installed
            </p>
          </div>
          <div className="options bg-slate-200 dark:bg-slate-900 h-4 flex gap-1 justify-end px-4 pb-6 items-center rounded-b-3xl border-2 border-slate-400 border-t-0">
            <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <span className="w-4 h-4 bg-rose-500 rounded-full"></span>
            <span className="w-4 h-4 bg-slate-800 rounded-full"></span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
