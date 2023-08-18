import React from 'react';

const StepTwoForm = (props) => {
    const { isReadable, formData, handleFileUpload, handleInputChange, handleSubmitFormStep2 } = props;
    return (
        <>
            <form onSubmit={handleSubmitFormStep2} id="formStep2" className="w-1/2">
                <h2 className="mb-4 text-center text-lg font-bold">
                    Step 2: Showing all the input values of step one
                </h2>

                <div className="mb-4">
                    <label htmlFor="projectName" className="block mb-2 text-gray-900">
                        Project Name
                    </label>
                    <input
                        type="text"
                        value={formData.projectName}
                        id="projectName"
                        name="projectName"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="projectDescription"
                        className="block mb-2 text-gray-900"
                    >
                        Project Description
                    </label>
                    <input
                        type="text"
                        value={formData.projectDescription}
                        id="projectDescription"
                        name="projectDescription"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="client" className="block mb-2 text-gray-900">
                        Client
                    </label>
                    <input
                        type="text"
                        value={formData.client}
                        id="client"
                        name="client"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contractor" className="block mb-2 text-gray-900">
                        Contractor
                    </label>
                    <input
                        type="text"
                        value={formData.contractor}
                        id="contractor"
                        name="contractor"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        readOnly
                    />
                </div>

                <div>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor="csvFile"
                    >
                        Upload file
                    </label>
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        id="csvFile"
                        accept=".csv"
                        className="block w-full rounded-lg cursor-pointer text-sm border border-gray-300 text-gray-900 file:mr-4 file:py-2 file:px-4 file:border-0  file:bg-cyan-500 file:text-white hover:file:bg-cyan-900"
                    />
                </div>

                <div>
                    <label htmlFor="max_X">Max X:</label>
                    <input
                        type="number"
                        value={formData.max_X}
                        readOnly={isReadable}
                        onChange={handleInputChange}
                        id="max_X"
                        name="max_X"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label htmlFor="min_X">Min X:</label>
                    <input
                        type="number"
                        value={formData.min_X}
                        readOnly={isReadable}
                        onChange={handleInputChange}
                        id="min_X"
                        name="min_X"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label htmlFor="max_Y">Max Y:</label>
                    <input
                        type="number"
                        value={formData.max_Y}
                        readOnly={isReadable}
                        onChange={handleInputChange}
                        id="max_Y"
                        name="max_Y"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label htmlFor="min_Y">Min Y:</label>
                    <input
                        type="number"
                        value={formData.min_Y}
                        readOnly={isReadable}
                        onChange={handleInputChange}
                        id="min_Y"
                        name="min_Y"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label htmlFor="max_Z">Max Z:</label>
                    <input
                        type="number"
                        value={formData.max_Z}
                        readOnly={isReadable}
                        onChange={handleInputChange}
                        id="max_Z"
                        name="max_Z"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label htmlFor="min_Z">Min Z:</label>
                    <input
                        type="number"
                        value={formData.min_Z}
                        readOnly={isReadable}
                        onChange={handleInputChange}
                        id="min_Z"
                        name="min_Z"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <button type="submit" className="rounded-full bg-cyan-300 px-6 py-2 border-cyan-700" >Submit</button>
            </form>
        </>
    );
};

export default StepTwoForm;