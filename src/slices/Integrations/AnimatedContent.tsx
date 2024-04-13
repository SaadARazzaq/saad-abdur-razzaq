"use client";

import { Content } from "@prismicio/client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks1/usePrefersReducedMotion";
import StylizedLogoMark from "./StylizedLogoMark";
import clsx from "clsx";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { LuBrainCircuit } from "react-icons/lu";
import { BsRainbow, BsTools } from "react-icons/bs";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiPlotly } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { BsRegex } from "react-icons/bs";
import { SiScikitlearn } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { SiJupyter } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { RxVercelLogo } from "react-icons/rx";
import { SiHeroku } from "react-icons/si";


import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
  FaHtml5,
  FaCss3,
  FaReact,
  FaFlask,
  FaPython,
} from "react-icons/fa6";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.IntegrationsSlice;
}) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const icons = {
    Django: <SiDjango />,
    FastAPI: <SiFastapi />,
    FLASK: <SiFlask />,
    Streamlit: <SiStreamlit />,
    HTML: <FaHtml5 />,
    CSS: <SiCss3 />,
    ReactJS: <FaReact />,
    NextJS: <TbBrandNextjs />,
    tensorflow: <SiTensorflow />,
    keras: <SiKeras />,
    opencv: <SiOpencv />,
    plotly: <SiPlotly />,
    pandas: <SiPandas />,
    numpy: <SiNumpy />,
    regex: <BsRegex />,
    sklearn: <SiScikitlearn />,
    python: <IoLogoPython />,
    postgres: <BiLogoPostgresql />,
    vscode: <TbBrandVscode />,
    notebook: <SiJupyter />,
    docker: <IoLogoDocker />,
    github: <FaGithub />,
    vercel: <RxVercelLogo />,
    heroku: <SiHeroku />,
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <div
      className="mt-20 flex flex-col items-center md:flex-row"
      ref={container}
    >
      {slice.items.map((item, index) => (
        <React.Fragment key={index}>
          {index === Math.floor(slice.items.length / 2) && (
            <>
              <StylizedLogoMark />
              {/* <LuBrainCircuit style={{ fontSize: '55px', opacity: '0.35' }} /> */}
              <div className="signal-line rotate-180 bg-gradient-to-t" />
            </>
          )}
          <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
            {item.icon && icons[item.icon]}
          </div>
          {index !== slice.items.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(slice.items.length / 2)
                  ? "rotate-180"
                  : "rotate-0",
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
