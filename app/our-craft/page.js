// pages/index.js

export default function Home() {
    return (
        <>
        <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .craft {
          font-family: "Open Sans", serif;
          font-weight: 300;
        }
        `}
      </style>
            <div className="bg-white font-roboto craft">
                {/* Section with flexible layout for desktop */}
                <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
                    {/* Left Section with text */}
                    <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                            DESIGN INSPIRATION
                        </h1>
                        <hr className="w-16 border-t-2 border-gray-400 mx-auto md:mx-0 mb-4" />
                        <p className="text-gray-700 text-xl md:text-xl leading-relaxed">
                            Discover creative inspiration for your next project. Whether you&apos;re sketching, designing, or just looking for ideas, this space is here to spark your creativity. Dive into the process and let your imagination run wild.
                        </p>
                    </div>
                    
                    {/* Right Section with image */}
                    <div className="w-full md:w-1/2">
                        <img
                            alt="A person drawing sketches of bags in a notebook with a yellow pencil"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            height="600"
                            src="https://storage.googleapis.com/a1aa/image/yrPLEKyf97UIfUMoWrn99UIPVejFf7qy92efAyQpRRFcbTV5E.jpg"
                            width="800"
                        />
                    </div>
                </div>
                
                {/* Call to Action Section */}
                <div className="text-center py-8 bg-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Ready to start your design journey?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Explore our collections, grab your inspiration, and create something amazing!
                    </p>
                    <a
                        href="/shopAll"
                        className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300"
                    >
                        Start Shopping
                    </a>
                </div>
            </div>
        </>
    );
}
