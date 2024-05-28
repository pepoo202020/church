"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const SlidedHeader = () => {
  const [dialyVerse, setDialyVerse] = useState(
    "لأن الرب هو قاضينا ، والرب هو ناموسنا ، والرب ملكنا. هو الذي سيخلصنا. - إشعياء 33:22 (NIV)"
  );

  const getDailyVerse = async () => {
    try {
      const response = await fetch("https://beta.ourmanna.com/api/v1/get", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      const text = await response.text();
      return text; // Returning the response text
    } catch (err) {
      console.error(err);
      return ""; // Return an empty string or handle the error accordingly
    }
  };
  const translateToArabic = async (text: string) => {
    const url =
      "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=ar&api-version=3.0&profanityAction=NoAction&textType=plain";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "46bba281cdmshd13b5f6ee4c8682p139405jsn5d3fe5c3c54b",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      body: JSON.stringify([{ Text: text }]),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse response as JSON
      // Check if 'translations' property exists in the result
      if (
        result &&
        result[0] &&
        result[0].translations &&
        result[0].translations[0]
      ) {
        // Set translated verse
        setDialyVerse(result[0].translations[0].text);
      } else {
        console.error("Error: Translations property not found in response.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  getDailyVerse().then(translateToArabic);

  console.log(dialyVerse);

  return (
    <div className="w-screen max-w-[100vw] p-5 h-[410px] flex flex-col lg:flex-row  items-center justify-center lg:gap-[172px]">
      <div className="flex flex-col items-center justify-center gap-[15px]  h-full p-2">
        <h5
          className="text-white  text-[18px] lg:text-[25px] font-bold leading-5 px-8"
          style={{ fontFamily: "Lemonada" }}
        >
          المناسبة الكنسية الحالية
        </h5>
        <motion.div
          className="image_container h-[200px] lg:h-full w-full rounded-lg overflow-hidden flex items-center justify-center relative cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className=" h-full w-full absolute z-0 top-0">
            <Image
              className="image h-full w-full cover"
              src="/Images/currentChurchOccation.jpg"
              alt="Current Church Occation"
              width={200}
              height={200}
            />
          </div>
          <div className="h-full w-full absolute gap-2 bg-black/25 top-0 z-10 flex flex-col items-center justify-center px-5">
            <h1
              className="text-[34px] leading-10 font-bold"
              style={{ fontFamily: "Gulzar" }}
            >
              الخمسين المقدسة
            </h1>
            <div className="line bg-white h-1 w-5 rounded"></div>
            <p className="font-normal leading-6 text-[15px] text-center">
              متابعة روحية لعيد القيامة المجيد والخمسين المقدسة
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="w-fit h-full  px-4 py-4 lg:py-12 flex flex-col items-start justify-start gap-2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h1
          className="font-medium text-[25px] leading-5 mb-2"
          style={{ fontFamily: "Gulzar" }}
        >
          آية اليوم
        </h1>
        {dialyVerse && dialyVerse.length > 0 && (
          <div
            className="flex flex-col items-start justify-start gap-3"
            style={{ fontFamily: "Alexandria" }}
          >
            <p>{dialyVerse.split("-")[0]}</p>
            <p>{dialyVerse.split("-")[1].split("(NIV)")[0]}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
