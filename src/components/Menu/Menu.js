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

  const handleButtonClick = () => {
    const audio = document.getElementById("myAudio");
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="wrapper">
      <div className="top_navbar">
        <div className="hamburger">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>

      <div id="movil" className="w-full h-16 hidden">
        <div id="menu-movil" className="h-14 mb-3 hidden fixed px-7">
          <ul className="flex items-center justify-between pt-2">
            <li>
              <a href="#inicio" className="active">
                <span className="icon">
                  <i>
                    <Image
                      src={"/img/icons/cronometro.png"}
                      width={35}
                      height={0}
                      alt="icon cronometro"></Image>
                  </i>
                </span>
              </a>
            </li>

            <li>
              <a href="#comprar-entrada" className="">
                <span className="icon">
                  <i>
                    <Image
                      src={"/img/icons/entrada.png"}
                      width={35}
                      height={0}
                      alt="icon cronometro"></Image>
                  </i>
                </span>
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="">
                <span className="icon">
                  <i>
                    <Image
                      src={"/img/icons/mapa.png"}
                      width={35}
                      height={0}
                      alt="icon ubicación"></Image>
                  </i>
                </span>
              </a>
            </li>

            <li>
              <span className="icon">
                <i className="">
                  <button id="myButton" onClick={handleButtonClick}>
                    <Image
                      src={"/img/fecha-mijipollada.jpg"}
                      width={100}
                      height={0}
                      alt="img fecha-mijipollada"></Image>
                  </button>
                  <audio id="myAudio" src="/audio/momentoWTF.mp3"></audio>
                </i>
              </span>
            </li>
          </ul>
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
            <span className="icon">
              <i className="">
                <button id="myButton" onClick={handleButtonClick}>
                  <Image
                    src={"/img/fecha-mijipollada.jpg"}
                    width={220}
                    height={0}
                    alt="img fecha-mijipollada"></Image>
                </button>
                <audio id="myAudio" src="/audio/momentoWTF.mp3"></audio>
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
            <div className="mb-12 ">
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
              <div
                id="fecha3"
                className="font-bungee md:text-[52px] text-[48px] tracking-tighter md:pb-7 pb-7 hidden">
                {countdown.days} Días.<br></br> {countdown.hours} Hor.
              </div>
              <div
                id="fecha4"
                className="font-bungee md:text-[52px] text-[48px] tracking-tighter md:pb-8 pb-12 hidden">
                {countdown.minutes} Min. <br></br> {countdown.seconds} Seg.
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
        <div id="comprar-entrada" className="item">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center mt-24 sm:mt-0">
            <Image
              className="m-auto"
              src={"/img/precios.png"}
              width={500}
              height={0}
              alt="img entradas"></Image>
            <div>
              <a
                href="https://www.joinnus.com/events/festivales/lima-miji-pollada-bailable-ioa-55382"
                target="_blank">
                <Image
                  className="h-20 pl-5 m-auto mt-0 md:mt-10"
                  src={"/img/btn-comprar.png"}
                  width={400}
                  height={5}
                  alt="img entradas"></Image>
              </a>
              <Image
                className="mt-5 w-0 h-40 pl-5 m-auto md:w-40"
                src={"/img/pinky-bear.png"}
                width={500}
                height={5}
                alt="img entradas"></Image>
            </div>
          </div>
        </div>
        <div id="ubicacion" className="item"></div>
      </div>
      <Script src="/Menu/script.js" defer></Script>
    </div>
  );
}
