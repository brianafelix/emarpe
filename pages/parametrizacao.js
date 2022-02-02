import Head from "next/head";

export default function Exemplo() {
  return (
    <>
      <div className="content-wrapper">
        <div class="bg-sky-100 aspect-square">
          <div className="content-header">
            <div className="container-fluid"></div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
               
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                        </div>
                        <div className="p-5">
                            <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                                new Chart(document.getElementById("chartjs-0"), {
                                    "type"= "line",
                                    "data"={
                                        "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                        "datasets": [{
                                            "label": "Views",
                                            "data": [65, 59, 80, 81, 56, 55, 40],
                                            "fill": false,
                                            "borderColor": "rgb(75, 192, 192)",
                                            "lineTension": 0.1
                                        }]
                                    },
                                    "options"= {}
                                });
                            </script>
                        </div>
                    </div>
                   
                </div>





        </div>
      </div>
    </>
  );
}
