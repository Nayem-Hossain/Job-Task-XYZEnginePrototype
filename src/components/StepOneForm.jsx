import { useState } from "react";

function StepOneForm(props) {
    const {formData, handleInputChange, handleSubmitFormStep1}=props;
    return (
        <>
            <form onSubmit={handleSubmitFormStep1} id="formStep1" className="w-1/2">
                <div>
                <h1 className="mb-12 text-center text-3xl font-bold">
                    This is XYZ Engine Prototype
                </h1>
                <h2 className="mb-4 text-center text-lg font-bold">
                    Step 1: Project Information
                </h2>
                </div>
                <div className="mb-4">
                    <label htmlFor="projectName" className="block mb-2 text-gray-900">
                        Project Name
                    </label>
                    <input
                        value={formData.projectName}
                        onChange={handleInputChange}
                        type="text"
                        id="projectName"
                        name="projectName"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
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
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        type="text"
                        id="projectDescription"
                        name="projectDescription"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="client" className="block mb-2 text-gray-900">
                        Client
                    </label>
                    <input
                        value={formData.client}
                        onChange={handleInputChange}
                        type="text"
                        id="client"
                        name="client"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contractor" className="block mb-2 text-gray-900">
                        Contractor
                    </label>
                    <input
                        value={formData.contractor}
                        onChange={handleInputChange}
                        type="text"
                        id="contractor"
                        name="contractor"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mb-4 rounded-full bg-cyan-300 px-6 py-2 border border-cyan-800"
                >
                    Next
                </button>
            </form>
        </>
    );
}

export default StepOneForm;
