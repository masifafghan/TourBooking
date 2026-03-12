import React from "react";


function Home() {
  return (
    <>
    {/* Nav Bar */}
    <nav className="flex flex-wrap  lg:justify-between sm:item-center bg-gray-100 p-1 lg:p-3">
        <img className="w-16 h-5 lg:w-24 lg:h-6 m-3 ps-2  ms-2 lg:ms-20 rounded" src="/asessts/Logo.png" alt="Logo" />
        <div className="text-sm lg:text-lg pt-2 flex flex wrap">
            <p className="p-1 lg:px-4 text-black hover:text-blue-500" >Destinations</p>
            <p className="p-1 lg:px-4 text-black hover:text-blue-500"  >Hotels</p>
            <p className="p-1 lg:px-4 text-black hover:text-blue-500" >tickets</p>
            <p className="p-1 lg:px-4 text-black hover:text-blue-500" >Bookings</p>
        </div>
        <div className="lg:pe-20 lg:me-15 pt-2">
            <button className="lg:mx-4 lg:p-2 lg:px-3 border-2 rounded hover:text-white hover:bg-black " >login</button>
            <button className="border-2 rounded lg:px-3 lg:p-2 hover:text-white hover:bg-black" >sign up</button>
        </div>
    </nav>
    {/* Display Page Section */}
    <section className="flex p-10 m-10 border shadow-lg rounded-3xl">
        <div >
        <p className="text-red-500 px-0 lg:px-10 lg:mx-10 mx-0 text-sm lg:text-lg ">BEST DESTINATION AROUND THE WORLD</p>
        <h1 className="md:text-3xl lg:text-5xl text-lg my-5 lg:mx-10 mx-0 font-bold font-serif px-0 lg:px-10">Travel , enjoy and live a new and full life </h1>
        <p className="px-0 lg:px-10 text-lg lg:mx-10 mx-0 my-4" >Build wicket longer more admiredo bartan vanity itself do in it.Prefered to sportman it engrossed listening . Park gate sell they west hard for the. </p>
        <button className="border rounded bg-orange-300  hover:bg-orange-400 p-1 lg:p-4 lg:px-8 text-1xl m-5 lg:mx-20 mx-0">Find out more</button>
        <button className="border rounded-2xl hover:bg-red-500  bg-red-400 p-1   text-1xl lg:p-3 lg:me-5 ">Play Demo</button>
        </div>
        <div>
            <img src="/asessts/Image.png" alt="" />
        </div>
    </section>
    {/* Service Section*/}
    <section className="justify-items-center mb-20 mt-10 m-5">
         <p className="text-lg">Category</p>
        <h1 className=" text-5xl font-bold font-serif mb-10" >We Offer Best Services</h1>
        <div className="flex  flex-wrap">
        <div className=" w-56 h-64 m-3 border shadow-lg rounded-lg overflow-hidden  flex-wrap justify-items-center">
            <img className="w-full w-48 h-32  object-cover" src="/asessts/weather.jpeg" alt="Check weather" />
            <h4 className="font-bold m-4">Calculated Weather </h4>
            <p className="text-sm px-5">Built Wicket longer admire do barton vanity itself do in it </p>
        </div>
        <div className=" w-56 m-3 h-64 border shadow-lg rounded-lg overflow-hidden  flex-wrap justify-items-center">
            <img className="w-full w-48 h-32  object-cover" src="/asessts/plane.jpeg" alt="Best Flights" />
            <h4 className="font-bold m-4"> Best Flights</h4>
            <p className="text-sm px-5">Engrossed listening<br/>Park gate sell they west hard for the</p>
        </div>
        <div className=" w-56 m-3 h-64 border shadow-lg rounded-lg overflow-hidden flex-wrap justify-items-center">
            <img className="w-full w-48 h-32  object-cover" src="/asessts/mic.jpeg" alt="mic" />
            <h4 className="font-bold m-4">Local Events</h4>
            <p className="text-sm px-5">Barton vanity itself do in it . Preferd to men it engrossed listening </p>
        </div>
        <div className=" w-56 m-3 h-64 border shadow-lg rounded-lg overflow-hidden flex-wrap justify-items-center">
            <img className="w-full w-48 h-32  object-cover" src="/asessts/gear.jpeg" alt="customization" />
            <h4 className="font-bold m-4">Customization</h4>
            <p className="text-sm px-5 wrap-break-word">We deliver otsourced for military customers</p>
        </div>
        </div>
    </section>
    {/* Destination Section */}
    <section className="justify-items-center  pt-10 m-5 pb-20" >
        <p className=" text-lg ">Top Selling</p>
        <h3 className="text-5xl font-bold font-serif mb-10">Top Destination</h3>
        <div className="flex flex-wrap">
        <div className=" w-64  h-72 m-3 border shadow-lg rounded-2xl overflow-hidden  flex-wrap justify-items-center">
            <img className="w-full w-56 h-56  object-cover" src="/asessts/uk.jpeg" alt="uk" />
            <p className="p-2"> London,Uk <span className="ps-20">$4.2k</span><br/>12 Days Trip </p>
        </div>
        <div className=" w-64 h-72  m-3 border shadow-lg rounded-2xl overflow-hidden  flex-wrap justify-items-center">
            <img className="w-full w-56 h-56  object-cover" src="/asessts/eroup.jpeg" alt="europe" />
            <p className="p-2"> Full Europe <span className="ps-20">$15k</span><br/>28 Days Trip </p>
        </div>
        <div className=" w-64 h-72  m-3 border shadow-lg rounded-2xl overflow-hidden  flex-wrap justify-items-center">
            <img className="w-full w-56 h-56  object-cover" src="/asessts/itely.jpeg" alt="itley" />
            <p className="p-2"> Rome ,Italty <span className="ps-20">$5.4k</span><br/>10 Days Trip </p>
        </div>
        </div>
    </section>
    {/* Other Section */}
    <section className="m-20 ">
        <p className="text-lg ms-20 ps-5">Easy and Fast</p>
        <h1 className="text-4xl ms-20 ps-5 font-bold w-96 font-serif text-wrap">Book Your Next Trip in 3 Easy Steps</h1>
        <div className="flex flex-wrap ">
        <div className="float-left w-88 p-5 ps-20 me-20">
            <div className="ms-2 flex w-80 text-wrap pb-3">
                <div className=" m-3 overflow-hidden  flex-wrap justify-items-center">
                <img className=" w-24 h-13 object-cover" src="/asessts/yellow.jpeg" alt="itley" />
            </div>
            <div>
                <h4 className="text-md font-bold text-gray-500 ">Choose Destination</h4>
                <p className="text-gray-500 ">lorem ipsum dolor sit amnet, consectetur adipiscing elit, Urna , tottor tempus</p>
            </div>
            </div>
            <div className="ms-2 flex w-80 text-wrap pb-3">
                <div className=" m-3 overflow-hidden  flex-wrap justify-items-center">
                <img className=" w-24 h-13 object-cover" src="/asessts/red.jpeg" alt="itley" />
                </div>
                 <div>
                <h4 className="text-md font-bold text-gray-500">Make Payment</h4>
                <p className="text-gray-500 ">lorem ipsum dolor sit amnet, consectetur adipiscing elit, Urna , tottor tempus</p>
            </div>
            </div>
            <div className="ms-2 flex w-80 text-wrap pb-3">
                <div className=" m-3 overflow-hidden  flex-wrap justify-items-center">
                <img className=" w-24 h-13 object-cover" src="/asessts/blue.jpeg" alt="itley" />
                </div>
                <div>
                <h4 className="text-md font-bold text-gray-500 ">Choose Destination</h4>
                <p className="text-gray-500 ">lorem ipsum dolor sit amnet, consectetur adipiscing elit, Urna , tottor tempus</p>
            </div>
            </div>
        </div>
        <div className="float-right w-94 h-80 border shadow-lg flex-wrap overflow-hidden  rounded-2xl mx-20">
            <img className="w-80 h-32 m-6 rounded-2xl" src="/asessts/beachpic.jpeg" alt="itley" />
            <h4 className="ms-6 mt-5 text-lg">Trip to Greece</h4>
            <p className="text-gray-400 ms-6">12-29 june| by Robbin </p>
            <p className="text-gray-400  mt-10 ms-6">24 People going </p>
            
        </div>
        </div>
    </section>
    {/* Logo Section */}
    <section className=" m-20 flex flex-wrap p-10 ">
        <img className="w-48 h-40 m-1 shadow-md rounded-2xl" src="/asessts/Airline1.jpeg" alt="itley" />
        <img className="w-48 h-40 m-1 shadow-md rounded-2xl" src="/asessts/Airline2.jpeg" alt="itley" />
        <img className="w-48 h-40 m-1 shadow-md rounded-2xl" src="/asessts/Airline3.jpeg" alt="itley" />
        <img className="w-48 h-40 m-1 shadow-md rounded-2xl" src="/asessts/Airline4.jpeg" alt="itley" />
        <img className="w-48 h-40 m-1 shadow-md rounded-2xl" src="/asessts/Airline5.jpeg" alt="itley" />
    </section>
    {/* Email Section */}
    <section className="mx-20 justify-items-center  rounded-tl-3xl rounded-lg py-8 mt-20 bg-purple-100">
        <div className="justify-items-center">
            <h1 className="text-gray-400 text-2xl ms-20 flex flex-wrap font-bold">Subscribe to get information, latest news and other intresting offers about Jadoo</h1>
            <div className="flex flex-wrap m-10">
            <input type="text" placeholder="Your email " className="h-12 w-80  ps-10 rounded-2xl"/>
             <button className="border rounded bg-orange-300 hover:bg-orange-400 p-3 px-8 text-1xl ms-5">Subscribe</button>
        </div>
        </div>
    </section>
    {/* About Section */}
    <section className="flex flex-wrap mx-20 mt-20 mb-10 ps-10">
        <div className="w-56 m-5">
            <img className="w-16h-8 m-3  rounded-2xl" src="/asessts/Logo.png" alt="Logo" />
            <p className="text-gray-400">Book your trip in minute ,get full control for much longer</p>
        </div>
        <div className="w-32 m-5">
            <h3 className="font-bold"> Company</h3>
            <p className="text-gray-400">
                About<br/>
                career<br/>
                Mobile<br/>
            </p>
        </div>
        <div className="w-32 m-5">
            <h3 className="font-bold">Contact</h3>
            <p className="text-gray-400">
                Help/FAQ<br/>
                Press<br/>
                Affilates<br/>
            </p>
        </div>
        <div className="w-32 m-5">
            <h3 className="font-bold">More</h3>
            <p className="text-gray-400">
                Airlinefees<br/>
                Airline<br/>
                Low fare tips<br/>
            </p>
        </div>
        <div>
              <img className="w-56 h-40 m-1  rounded-2xl" src="/asessts/advertisement.jpeg" alt="advestisement" />
        </div>

    </section>
    </>
  );
}


export default Home;