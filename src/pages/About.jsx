"use client";

import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Hero Map */}
      <div className="w-full py-5">
        <i
          className="mt-5 ri-arrow-left-line text-4xl text-zinc-500 hover:text-[#6552cd] duration-300 font-bo"
          onClick={() => navigate(-1)}
        ></i>
      </div>
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-xs font-semibold leading-normal md:text-sm">
            About the Movie App
          </p>
        </div>
        <p className="text-3xl font-bold text-gray-300 md:text-5xl md:leading-10">
          Made with love, right here in India
        </p>
        <p className="max-w-4xl text-base text-gray-300 md:text-xl">
          TMDB Movie App is a movie application to Watch Trailer of the Latest
          and upcomming movies. A user can get All information Related to
          Particular.
        </p>
      </div>
      {/* <div className="w-full space-y-4">
        <img
          className="h-[200px] w-full rounded-xl object-cover md:h-full"
          src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
          alt=""
        />
      </div> */}
      {/* locations */}
      <hr className="mt-10" />
      {/* greetings */}
      <div className="mt-1 flex items-center">
        {/* <div className="space-y-6 md:w-3/4">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">
              Join Us &rarr;
            </p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-4xl">
            Meet our team
          </p>
          <p className="max-w-4xl text-base text-gray-700 md:text-xl">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <div></div>
        </div> */}
      </div>
      {/* TEAM */}
      {/* <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <div className="rounded-md border" key={user.name}>
            <img
              src={user.image}
              alt={user.name}
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              {user.name}
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              {user.position}
            </p>
          </div>
        ))}
      </div> */}
      {/* Hiring Banner */}
      <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row text-zinc-200">
        <div className="space-y-6">
          <p className="text-sm font-semibold md:text-base">
            Join our team &rarr;
          </p>
          <p className="text-3xl font-bold md:text-4xl">
            We&apos;re just getting started
          </p>
          <p className="text-base text-gray-300 md:text-lg">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Join Now
          </button>
        </div>
        <div className="md:mt-o mt-10 w-full">
          <img
            src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Getting Started"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
