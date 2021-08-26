import React from 'react'

export const CardHelp = () => {
    return (
        <div className="w-72 bg-white text-gray-700 dark:bg-blueGray dark:text-white p-6 rounded flex flex-col justify-center shadow hover:shadow-lg transition duration-200">
            <h2 className="font-extrabold text-xl pb-4 text-center">📖 How it works ?📖 </h2>
            <p className="text-center text-sm">
                The package.json block on the right represent your project configurations updated after each change. 
            </p>
            <p className="text-center text-sm">
                Change your project configuration by navigating between the different pages thanks to the menu on the left, you can for example add new packages in the packages page.
                Once everything is ready you simply need to push the 'create' button.
            </p>
        </div>
    )
}
