export default function MyGames() {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="mb-10">
                    <h1 className="font-bold text-5xl leading-tight text-[#45f882]">My Games</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Card Title</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Button
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Card Title</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Button
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Card Title</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
