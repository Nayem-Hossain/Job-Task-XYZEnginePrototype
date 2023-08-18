import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DataVisualization from "./DataVisualization";

const ShowResults = ({ results, columnKP, columnX }) => {
    const handleSaveAsPDF = async () => {
        const contentContainer = document.getElementById("pdf-content"); // this ID is my content container
        try {
            // Create a canvas from the content container
            const canvas = await html2canvas(contentContainer);

            // Convert the canvas to a base64 image data URL
            const imgData = canvas.toDataURL("image/png");

            // Initialize a new PDF document
            const pdf = new jsPDF("p", "mm", "a4"); // Portrait, millimeters, A4 size

            const pageMargin = 10;
            // Get the image properties
            const imgProps = pdf.getImageProperties(imgData);

            // Calculate the dimensions for the PDF page
            const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * pageMargin;
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            // Add the image to the PDF document
            pdf.addImage(imgData, "PNG", pageMargin, pageMargin, pdfWidth, pdfHeight);

            // Save the PDF with a specified filename
            pdf.save("Results_Page.pdf");
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };

    return (
        <div id="pdf-content" className="mx-16 mt-10">
            <div className=" bg-cyan-600 rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-white text-blueGray-700">
                            Results Table
                        </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button
                            onClick={handleSaveAsPDF}
                            className="bg-indigo-950 text-white active:bg-indigo-950 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                            Save as pdf
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg">
                <table
                    id="table-results"
                    className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                    <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Project Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Project Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Client
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contractor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CSV File
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Max Of X
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Min Of X
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Max Of Y
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Min Of Y
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Max Of Z
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Min Of Z
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {results.projectName}
                            </th>
                            <td className="px-6 py-4">{results.projectDescription}</td>
                            <td className="px-6 py-4">{results.client}</td>
                            <td className="px-6 py-4">{results.contractor}</td>
                            <td className="px-6 py-4">{results.csvFile.name}</td>
                            <td className="px-6 py-4">{results.max_X}</td>
                            <td className="px-6 py-4">{results.min_X}</td>
                            <td className="px-6 py-4">{results.max_Y}</td>
                            <td className="px-6 py-4">{results.min_Y}</td>
                            <td className="px-6 py-4">{results.max_Z}</td>
                            <td className="px-6 py-4">{results.min_Z}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <DataVisualization columnKP={columnKP} columnX={columnX}/>
        </div>
    );
};

export default ShowResults;
