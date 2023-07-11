"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import "./style.css";
export default function Menu() {
  const targetDate = new Date("2023-07-22T00:00:00").getTime();
  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="wrapper">
      <div className="top_navbar">
        <div className="hamburger">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>

      <div className="sidebar">
        <ul className="font-md">
          <li>
            <a href="#inicio" className="active">
              <span className="icon">
                <i>
                  <Image
                    src={"/img/icons/cronometro.png"}
                    width={25}
                    height={0}
                    alt="icon cronometro"></Image>
                </i>
              </span>
              <span className="title font-boogaloo tracking-tighter">
                Cuenta regresiva
              </span>
            </a>
          </li>
          <li>
            <a href="#comprar-entrada" className="">
              <span className="icon">
                <i>
                  <Image
                    src={"/img/icons/entrada.png"}
                    width={25}
                    height={0}
                    alt="icon cronometro"></Image>
                </i>
              </span>
              <span className="title font-boogaloo tracking-tighter">
                Comprar entrada
              </span>
            </a>
          </li>
          <li>
            <a href="#ubicacion" className="">
              <span className="icon">
                <i>
                  <Image
                    src={"/img/icons/mapa.png"}
                    width={25}
                    height={0}
                    alt="icon ubicación"></Image>
                </i>
              </span>
              <span className="title font-boogaloo tracking-tighter">
                Ubicación
              </span>
            </a>
          </li>
          <li>
            <a href="#sugar-mijirrito" className="">
              <span className="icon">
                <i>
                  <Image
                    src={"/img/icons/sugar-mijirrito.png"}
                    width={25}
                    height={0}
                    alt="icon cronometro"></Image>
                </i>
              </span>
              <span className="title font-boogaloo tracking-tighter">
                Sugar Mijirrito
              </span>
            </a>
          </li>
          <li>
            <span className="icon">
              <i className="">
                <Image
                  src={"/img/fecha-mijipollada.jpg"}
                  width={220}
                  height={0}
                  alt="img fecha-mijipollada"></Image>
              </i>
            </span>
          </li>
        </ul>
      </div>

      <div className="main_container ">
        <div
          id="inicio"
          className="item inicio justify-center items-end text-center flex text-pink-400 ">
          <div>
            <Image
              className="logo-mijipollada w-100 mb-10"
              src={"/img/miji-pollada-logoo.png"}
              width={550}
              height={0}
              alt="img miji pollada"></Image>
            {/*   <div className="hora">
              <Image
                className=""
                src={"/img/hora-miji-pollada2.png"}
                width={550}
                height={0}
                alt="img miji pollada"></Image>
            </div> */}
            <div className="mb-12">
              <div
                id="fecha"
                className="font-bungee md:text-[52px] text-[48px] tracking-tighter md:pb-7 pb-7">
                {countdown.days} Días - {countdown.hours} Hor.
              </div>
              <div
                id="fecha2"
                className="font-bungee md:text-[52px] text-[48px] tracking-tighter md:pb-8 pb-12">
                {countdown.minutes} Min. - {countdown.seconds} Seg.
              </div>
            </div>
            <Image
              className="diversion-mijipollada"
              src="/img/diversion-miji-pollada.png"
              width={550}
              height={0}
              alt="img diversion pollada"></Image>
          </div>
        </div>
        <div id="comprar-entrada" className="item"></div>
        <div id="ubicacion" className="item"></div>
        <div id="sugar-mijirrito" className="item"></div>
      </div>
      <Script src="/Menu/script.js" defer></Script>
    </div>
  );
}
