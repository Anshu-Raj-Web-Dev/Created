// pages/our-story.js
export default function OurStory() {
    return (
        
<section>
<style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .story {
          font-family: "Open Sans", serif;
          font-weight: 300;
        }
        `}
      </style>
        <div className="bg-gray-50 font-roboto py-24 story">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight sm:text-6xl text-gradient">
                    Our Story
                </h1>
                <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed sm:text-2xl">
                    A journey of passion, creativity, and a relentless pursuit to turn dreams into reality. Here's how it all began.
                </p>

                <div className="space-y-16">
                    <section className="bg-white p-12 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-primary">
                            The Beginning
                        </h2>
                        <p className="text-lg text-gray-700">
                            It started in the most unlikely of places—a 9th-grade classroom. With a notebook and a pencil in hand, I began sketching designs, not knowing that this simple act would evolve into something much bigger. Every page I filled was a step towards discovering my true calling.
                        </p>
                    </section>

                    <section className="bg-white p-12 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-primary">
                            Overcoming Challenges
                        </h2>
                        <p className="text-lg text-gray-700">
                            Juggling schoolwork with my growing passion for design wasn’t easy. But every obstacle became an opportunity to learn. I spent countless late nights refining my craft, growing one step at a time. There were moments of doubt, but my drive never wavered.
                        </p>
                    </section>

                    <section className="bg-white p-12 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-primary">
                            The Leap
                        </h2>
                        <p className="text-lg text-gray-700">
                            After years of hard work and dedication, I took the leap—turning my passion into a professional pursuit. With a strong vision and a portfolio that spoke for itself, I began building something truly special. That’s when everything started to fall into place.
                        </p>
                    </section>

                    <section className="bg-white p-12 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-primary">
                            The Future
                        </h2>
                        <p className="text-lg text-gray-700">
                            Now, we are focused on the next chapter—creating designs that not only inspire but also make an impact. The journey continues, but we are more determined than ever to push the boundaries of what’s possible and build a brand that reflects who we are and what we stand for.
                        </p>
                    </section>
                </div>

                <div className="mt-16">
                    <p className="text-2xl font-medium text-gray-800">
                        Thank you for joining us on this journey. The best is yet to come.
                    </p>
                    <a href="/contact" className="mt-8 inline-block px-8 py-3 text-lg font-semibold text-red bg-primary-500 hover:bg-primary-600 rounded-lg shadow-md transition duration-300">
                        Join Us
                    </a>
                </div>
            </div>
        </div>
</section>
    );
}
