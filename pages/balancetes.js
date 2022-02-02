import Head from "next/head";
import Scatte from "../components/recharts/Scatte";
export default function Balancetes() {
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
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h className="font-bold uppercase text-gray-600">Graph</h>
                    </div>
                    <div className="p-5">
                      <canvas
                        id="chartjs-7"
                        className="chartjs"
                        width="undefined"
                        height="undefined"
                      ></canvas>
                      <script></script>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h2 className="font-bold uppercase text-gray-600">
                        Graph
                      </h2>
                    </div>
                    <div className="p-5">
                      <canvas
                        id="chartjs-0"
                        className="chartjs"
                        width="undefined"
                        height="undefined"
                      ></canvas>
                      <script>
                        <Scatte />
                      </script>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h2 className="font-bold uppercase text-gray-600">
                        Graph
                      </h2>
                    </div>
                    <div className="p-5">
                      <canvas
                        id="chartjs-1"
                        className="chartjs"
                        width="undefined"
                        height="undefined"
                      ></canvas>
                      <script>
                        <Scatte />
                      </script>
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
