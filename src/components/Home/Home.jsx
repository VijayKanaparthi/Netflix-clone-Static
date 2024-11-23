import Slider from "react-slick"
import { FaAngleRight } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from "react"

const card_data = [
  {
    id: "1",
    image_url: "https://wallpaperaccess.com/full/10157339.jpg",
  },
  { id: "2", image_url: "https://wallpaperaccess.com/full/10157331.jpg" },
  { id: "3", image_url: "https://wallpaperaccess.com/full/8292068.jpg" },
  { id: "4", image_url: "https://wallpaperaccess.com/full/1982557.jpg" },
  { id: "5", image_url: "https://wallpaperaccess.com/full/37959.jpg" },
  { id: "6", image_url: "https://wallpaperaccess.com/full/37969.jpg" },
  { id: "7", image_url: "https://wallpaperaccess.com/full/5198.jpg" },
  { id: "8", image_url: "https://wallpaperaccess.com/full/37961.jpg" },
  { id: "9", image_url: "https://wallpaperaccess.com/full/37956.jpg" },
  { id: "10", image_url: "https://wallpaperaccess.com/full/37955.jpg" },
  { id: "11", image_url: "https://wallpaperaccess.com/full/37954.jpg" },
  { id: "12", image_url: "https://wallpaperaccess.com/full/37951.jpg" },
  { id: "13", image_url: "https://wallpaperaccess.com/full/37945.jpg" },
  { id: "14", image_url: "https://wallpaperaccess.com/full/37961.jpg" },
  { id: "15", image_url: "https://wallpaperaccess.com/full/37956.jpg" },
  { id: "16", image_url: "https://wallpaperaccess.com/full/37955.jpg" },
  { id: "17", image_url: "https://wallpaperaccess.com/full/37954.jpg" },
  { id: "18", image_url: "https://wallpaperaccess.com/full/37951.jpg" },
  { id: "19", image_url: "https://wallpaperaccess.com/full/37945.jpg" },
  { id: "20", image_url: "https://wallpaperaccess.com/full/37954.jpg" },
  { id: "21", image_url: "https://wallpaperaccess.com/full/37951.jpg" },
  { id: "22", image_url: "https://wallpaperaccess.com/full/37945.jpg" },
  { id: "23", image_url: "https://wallpaperaccess.com/full/37961.jpg" },
  { id: "24", image_url: "https://wallpaperaccess.com/full/37956.jpg" },
  { id: "25", image_url: "https://wallpaperaccess.com/full/37955.jpg" },
  { id: "26", image_url: "https://wallpaperaccess.com/full/37954.jpg" },
  { id: "27", image_url: "https://wallpaperaccess.com/full/37951.jpg" },
  { id: "28", image_url: "https://wallpaperaccess.com/full/37945.jpg" },
]

const sliding_data = [
  {
    image_url: "https://wallpaperaccess.com/full/712404.jpg",
    heading: "Unlimited Movies, TV Shows, and More",
    paragraph:
      "Watch the latest movies, binge-watch TV shows, and enjoy a wide variety of content only on our platform.",
  },
  {
    image_url: "https://wallpaperaccess.com/full/1450647.jpg",
    heading: "Stream Anytime, Anywhere",
    paragraph:
      "With our platform, enjoy your favorite content on the go with seamless streaming across devices.",
  },
  {
    image_url: "https://wallpaperaccess.com/full/3640143.jpg",
    heading: "Exclusive Originals and Blockbusters",
    paragraph:
      "Discover our exclusive original series and films, along with the latest Hollywood blockbusters.",
  },
  {
    image_url: "https://wallpaperaccess.com/full/3640131.jpg",
    heading: "Watch in Stunning HD Quality",
    paragraph:
      "Enjoy all your favorite content in high-definition resolution, making every scene feel more real.",
  },
  {
    image_url: "https://wallpaperaccess.com/full/2660647.jpg",
    heading: "Family-Friendly Entertainment",
    paragraph:
      "Enjoy a wide range of movies and shows for the whole family to watch and enjoy together.",
  },
]

const Home = () => {
  const [cardOne, setCardOne] = useState(false)
  const [cardtwo, setCardTwo] = useState(false)
  const [cardThree, setCardThree] = useState(false)
  const [cardFour, setCardFour] = useState(false)

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  }
  var properties = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  }

  const clickedOne = () => {
    setCardOne((prev) => !prev)
  }

  const clickedTwo = () => {
    setCardTwo((prev) => !prev)
  }

  const clickedThree = () => {
    setCardThree((prev) => !prev)
  }

  const clickedFour = () => {
    setCardFour((prev) => !prev)
  }

  return (
    <div className=" flex flex-col justify-center items-center box-border text-white bg-gradient-to-b opacity-0.69 bg-black/50  from-red-600 via-red-300 to-black backdrop-blur-lg shadow-lg h-full b">
      <div className="w-full h-full  bg-black/50 opacity-0.69">
        {/* Navbar */}
        <div className="flex justify-between items-center w-full h-24 pt-0 pl-10 pr-10 bg-gradient-to-b from-black ">
          <div>
            <img
              src="/images/logo.png"
              alt="netflix logo"
              className="w-16 h-18 md:w-32 md:h-32 lg:w-44 lg:h-44"
            />
          </div>
          <div className="gap-1 flex">
            <select
              name="English"
              value="Hindi"
              id="English"
              className="text-black border-2 rounded-full border-black p-1 w-11 text-xs md:w-24 md:h-11"
            >
              <option value="Hindi">नमस्ते</option>
              <option value="English">English</option>
            </select>
            <button className="bg-white border-2 border-solid border-black rounded-full text-black cursor-pointer p-1 w-16 font-medium text-xs md:w-24 md:h-11 md:text-xl">
              Sign In
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <ul className="w-full h-96 p-5 self-center md:h-3/5 lg:w-11/12 lg:pl-28">
          <Slider {...settings}>
            {sliding_data.map((each) => (
              <li key={each.heading} className="w-full h-full p-5">
                <img
                  src={each.image_url}
                  alt="movies"
                  className="w-full h-full object-cover rounded-xl border-t-4 border-l-4 border-white"
                />
                <h1 className="lg:text-3xl md:w-1/3 lg:w-96 pl-1 font-semibold">
                  {each.heading}
                </h1>
                <p className="text-xs md:w-3/5 lg:w-96 pl-1 ">
                  {each.paragraph}
                </p>
              </li>
            ))}
          </Slider>
        </ul>
        <p className="pl-3 pr-3 text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col pt-2 p-10 gap-2 lg:flex lg:w-full lg:flex-row lg:justify-center">
          <input
            type="text"
            placeholder="Email Address"
            className="bg-black/50 p-4 rounded-full lg:w-80"
          />
          <div className="flex bg-red-500  text-center justify-center items-center lg:w-80 rounded-full">
            <button className="text-xs p-5 lg:text-lg">Get Started</button>
            <FaAngleRight />
          </div>
        </div>
        {/* Movie Cards One */}
        <div className="flex flex-col pl-5 lg:pl-32 lg:pr-40">
          <h1 className="font-semibold mb-1 text-2xl lg:text-3xl">Trending</h1>
          <ul className="flex overflow-scroll gap-5 w-11/12 lg:w-full scrollbar-hide p-2">
            {card_data.map((each) => (
              <img
                key={each.id}
                src={each.image_url}
                alt="movie"
                className="w-40 h-44 lg:h-60 lg:w-48 bg-cover rounded-2xl"
              />
            ))}
          </ul>
        </div>
        {/* Movie Cards Two */}
        <div className="flex flex-col pl-5 lg:pl-32 lg:pr-40">
          <h1 className="font-semibold mb-1 lg:text-3xl text-2xl">
            Only on Netflix
          </h1>
          <ul className="flex overflow-scroll gap-5 w-11/12 lg:w-full scrollbar-hide p-2">
            {card_data.map((each) => (
              <img
                key={each.id}
                src={each.image_url}
                alt="movie"
                className="w-40 h-44 lg:h-60 lg:w-48 bg-cover rounded-2xl"
              />
            ))}
          </ul>
        </div>
        <h1 className="pl-7 text-2xl font-semibold lg:pl-28">
          More reasons to join
        </h1>
        <div className="flex flex-col mt-2 lg:flex lg:flex-row md:w-11/12 lg:w-10/12 lg:pl-28">
          <div className=" mb-3 bg-zinc-900 rounded-lg pl-2 pr-2 flex justify-between items-center w-10/12  md:w-full lg:w-full p-1 ml-5 mr-5">
            <div>
              <p className="text-xs md:text-lg">
                Stories tailored to your taste
              </p>
            </div>
            <div>
              <img src="/images/star.png" alt="" className="w-14 h-14" />
            </div>
          </div>
          <div className="mb-3 bg-zinc-900 rounded-lg pl-2 pr-2 flex justify-between items-center w-10/12 md:w-full lg:w-full p-1 ml-5 mr-5">
            <div>
              <p className="text-xs md:text-lg">
                Cance or switch plans anytime
              </p>
            </div>
            <div>
              <img src="/images/hand.png" alt="" className="w-14 h-14" />
            </div>
          </div>
          <div className="mb-3 bg-zinc-900 rounded-lg pl-2 pr-2 flex justify-between items-center w-10/12 md:w-full lg:w-full p-1 ml-5 mr-5">
            <div>
              <p className="text-xs md:text-lg">A Place just for a kids</p>
            </div>
            <div>
              <img src="/images/heart.png" alt="" className="w-14 h-14" />
            </div>
          </div>
          <div className="mb-3 bg-zinc-900 rounded-lg pl-2 pr-2 flex justify-between items-center w-10/12 md:w-full lg:w-full p-1 ml-5 mr-5">
            <div>
              <p className="text-xs md:text-lg">
                For your Phone, tablet, laptop and TV
              </p>
            </div>
            <div>
              <img src="/images/TV.png" alt="" className="w-14 h-14" />
            </div>
          </div>
        </div>
        <h1 className="ml-5 font-semibold mb-5 lg:ml-28 text-2xl md:text-3xl">
          Frequently Asked Questions
        </h1>
        <div
          onClick={clickedOne}
          className="mb-2 bg-zinc-900 w-10/12 md:w-11/12 lg:w-10/12 lg:ml-28  rounded-lg flex justify-between pl-2 pr-2 ml-5 mr-7  cursor-pointer text-white p-3 md:p-5"
        >
          <h1>What is Netflix?</h1>
          <FaPlus />
        </div>
        <div
          className={`${
            cardOne ? "block" : "hidden"
          } bg-zinc-900 flex justify-center items-center p-5 w-10/12 md:w-11/12 lg:w-10/12 lg:ml-28 ml-5 mt-3 mb-3  rounded-lg `}
        >
          <p>
            Netflix is a global streaming service that provides on-demand video
            content, including movies, TV shows, documentaries, and original
            programming. It has revolutionized the way people consume
            entertainment by allowing them to watch content anytime, anywhere,
            and on a wide range of devices.
          </p>
        </div>

        <div
          onClick={clickedTwo}
          className="mb-2 bg-zinc-900 w-10/12 md:w-11/12 lg:w-10/12 lg:ml-28  rounded-lg flex justify-between pl-2 pr-2 ml-5 mr-7  cursor-pointer text-white p-3 md:p-5"
        >
          <h1>How much Netflix Cost?</h1>
          <FaPlus />
        </div>
        <div
          className={`${
            cardtwo ? "block" : "hidden"
          } bg-zinc-900 flex justify-center items-center p-5 w-10/12 md:w-11/12 lg:w-10/12 lg:ml-28 ml-5 mt-3 mb-3  rounded-lg `}
        >
          <p>
            Netflix is a global streaming service that provides on-demand video
            content, including movies, TV shows, documentaries, and original
            programming. It has revolutionized the way people consume
            entertainment by allowing them to watch content anytime, anywhere,
            and on a wide range of devices.
          </p>
        </div>

        <div
          onClick={clickedThree}
          className="mb-2 bg-zinc-900 w-10/12 md:w-11/12 lg:w-10/12 lg:ml-28  rounded-lg flex justify-between pl-2 pr-2 ml-5 mr-7  cursor-pointer text-white p-3 md:p-5"
        >
          <h1>Where can i watch?</h1>
          <FaPlus />
        </div>
        <div
          className={`${
            cardThree ? "block" : "hidden"
          } bg-zinc-900 flex justify-center items-center p-5 w-10/12 md:w-11/12 lg:w-10/12 lg:ml-28 ml-5 mt-3 mb-3  rounded-lg `}
        >
          <p>
            Netflix is a global streaming service that provides on-demand video
            content, including movies, TV shows, documentaries, and original
            programming. It has revolutionized the way people consume
            entertainment by allowing them to watch content anytime, anywhere,
            and on a wide range of devices.
          </p>
        </div>

        <div
          onClick={clickedFour}
          className="mb-2 bg-zinc-900 w-10/12 md:w-11/12 lg:w-10/12 lg:ml-28  rounded-lg flex justify-between pl-2 pr-2 ml-5 mr-7  cursor-pointer text-white p-3 md:p-5"
        >
          <h1>How do i Cancel?</h1>
          <FaPlus />
        </div>
        <div
          className={`${
            cardFour ? "block" : "hidden"
          } bg-zinc-900 flex justify-center items-center p-5 w-10/12 md:w-11/12 lg:w-10/12 lg:ml-28 ml-5 mt-3 mb-3  rounded-lg `}
        >
          <p>
            Netflix is a global streaming service that provides on-demand video
            content, including movies, TV shows, documentaries, and original
            programming. It has revolutionized the way people consume
            entertainment by allowing them to watch content anytime, anywhere,
            and on a wide range of devices.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <button className="cursor-pointer bg-red-700 text-white rounded-full p-2 shadow-md shadow-red-600 text-center ">
            Get Started
          </button>
          <p>Create or restart your membership</p>
        </div>
        <p className="pl-5 md:pl-25 mt-3 mb-2 lg:pl-28 text-xs lg:text-2xl">
          Questions? Call 000-800-919-1694
        </p>

        <div className="flex flex-col text-white underline bg-black/25 md:flex md:flex-row md:justify-between p-8 md:p-16 lg:pl-28 lg:pr-28">
          <div>
            <p>FAQ</p>
            <p>Invest Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preference</p>
            <p>Legal Notice</p>
          </div>
          <div>
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate information</p>
            <p>only Netflix</p>
          </div>
          <div>
            <p>Media</p>
            <p>Terms of Use</p>
            <p>Contact US</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
