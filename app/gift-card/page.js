// pages/gift-card.js

export default function GiftCard() {
    return (
        <>
        <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .gift {
          font-family: "Open Sans", serif;
          font-weight: 300;
        }
        `}
      </style>
            <div className=" py-16 gift">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-8">
                        Gift Cards
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Looking for the perfect gift? Our gift cards are a great way to let your loved ones choose exactly what they want from our collection. Whether it&apos;s for a birthday, anniversary, or just because, our gift cards are always a thoughtful choice.
                    </p>
                    <a
                        href="#"
                        className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-700 hover:to-green-800 transition duration-300 mb-12 inline-block text-lg"
                    >
                        Get Your Gift Card Now
                    </a>

                    {/* Gift Card Options Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* $25 Gift Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">$25</h3>
                            <p className="text-gray-500 mb-6">A thoughtful gift for anyone on your list. Perfect for small surprises or token gestures.</p>
                            <a
                                href="#"
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 transition duration-300"
                            >
                                Buy Now
                            </a>
                        </div>

                        {/* $50 Gift Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">$50</h3>
                            <p className="text-gray-500 mb-6">Perfect for those special occasions. Give your loved ones the freedom to choose.</p>
                            <a
                                href="#"
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 transition duration-300"
                            >
                                Buy Now
                            </a>
                        </div>

                        {/* $100 Gift Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">$100</h3>
                            <p className="text-gray-500 mb-6">A generous gift to treat someone amazing. Make their day unforgettable.</p>
                            <a
                                href="#"
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 transition duration-300"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>

                    {/* Small Note Section */}
                    <div className="mt-16 max-w-lg mx-auto text-lg text-gray-600">
                        <p>
                            Can&apos;t decide on an amount? No problem! Our gift cards are available in any denomination. Just choose a custom amount at checkout, and you&apos;re all set.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
