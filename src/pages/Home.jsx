import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useAuth } from "../context";
import LandingPageImg from "../assets/home-landing.png";

const Home = () => {
  const { authenticateWithGitHub } = useAuth();
  return (
    <div>
      <nav className="flex justify-between px-8 pt-6 items-center">
        <h1 className="text-2xl font-bold">
          Pro<span className="text-button">Stack</span>
        </h1>
        <a
          href="https://github.com/parthpandyappp/Prostack/tree/dev"
          className="font-medium boder-button border-b-4 hover:border-b-blue-500"
        >
          GitHub
        </a>
      </nav>
      <main>
        <img
          src={LandingPageImg}
          alt="landing-img"
          className="m-auto w-[28rem]"
        />
        <div className="text-2xl font-bold text-center mb-6 md:text-4xl">
          <p>
            Find interesting <span className="text-button">side projects</span>
          </p>
          <p>and collaborate with people.</p>
        </div>
        <button
          className="bg-black mx-auto text-xl text-white flex items-center gap-2 px-8 py-2 rounded hover:opacity-90"
          onClick={authenticateWithGitHub}
        >
          <AiFillGithub /> Sign in with Github
        </button>
      </main>
    </div>
  );
};

export { Home };
