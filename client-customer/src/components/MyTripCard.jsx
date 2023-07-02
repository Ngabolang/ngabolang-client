function MyTripCard(){
    return(
        <div className="my-4 flex flex-col w-[180vh] h-80 overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row ">
        <div className="relative lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
            alt="Persons talking in a work setting."
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase bg-purple-200 rounded-full">
              Craft and build
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Trip ke Lembang
          </h5>
          <p className="py-5 mb-5 text-gray-800">
            <span className="font-bold">Our Platform</span> will help you craft and
            build your next idea. Utilize our drag and drop components to build
            the application of your dreams.
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Group Chat
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center text-lg underline transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Ke Halaman Trip
              <svg
                className="inline-block w-2 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
}

export default MyTripCard