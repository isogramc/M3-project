import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Import the string from the .env with URL of the API/server - http://localhost:5005
// const API_URL = import.meta.env.VITE_API_URL;

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

function HomePage() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blog
        </a>
      </Typography>
     
    </ul>
  );
  
  return (
  <>
    <div className="-m-6 min-h-screen w-[calc(100%+48px)]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Party Games Inc.
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span> <Link to="/login">Login</Link></span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span><Link to="/signup">Sign up</Link></span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="-m-3 h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-m-3 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>

      <div className="flex flex-col justify-between mx-auto max-w-screen-md py-12">
        <Card className="mb-12">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://res.cloudinary.com/dwyipecoa/image/upload/v1744401338/grouptalking_fr4g38.png"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
        Welcome to Party Games Inc.!
        </Typography>
        <Typography color="gray" className="font-normal">
        <p>Let us manage your event (birthday/cocktail party) on your behalf!</p>
        <p>We specialize in scripted event based games that we stage for you at a time and a place of your choosing</p>
        <p>The quoted price includes venue hire and snacks and we arrange an open bar made available on the evening at the standard prices</p>
        <p>Each guest is given a character sheet and a goal. They are provided with a full event brief in their inbox well in advance</p>
        <p>Each guest is expected to arrive as their character on the evening (costumes and props is their own responsibility even though suggestions are provided in the brief sheet)</p>
        <p>Party Games Inc. takes care of the whole event and the scripted party storyline which allows you to enjoy your special evening free of care!</p>
        </Typography>
      </div>
    </div>
    <Footer />
  </>
   
  );
}

export default HomePage;
