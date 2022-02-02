import Head from "next/head";
import LineH from "../components/recharts/LineH";

import Scatte from "../components/recharts/Scatte";
export default function Indicador_anual() {
  return (
    <>
      <div className="content-wrapper">
        <div className="bg-inherit-100 aspect-square">
          <div className="content-header">
            <div className="container-fluid">
              <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap flex-grow mt-2">
                <div className="w-full md:w-2/3 xl:w-2/4 p-6">
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h className="font-bold uppercase text-gray-600">Graph</h>
                    </div>
                    <div className="p-6">
                      <Scatte />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
