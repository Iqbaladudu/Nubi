import PopupVideo from "@/components/shared/popup/PopupVideo";
import HreoName from "@/components/shared/section-names/HreoName";
import Image from "next/image";
import React from "react";
import videoImage from "@/assets/images/herobanner/herobanner__video.jpg";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BookImage from "@/components/shared/animaited-images/BookImage";
import GlobImage from "@/components/shared/animaited-images/GlobImage";
import AppleImage from "@/components/shared/animaited-images/AppleImage";
import BalbImage from "@/components/shared/animaited-images/BalbImage";
import TriangleImage from "@/components/shared/animaited-images/TriangleImage";
const Hero5 = () => {
  return (
    <section data-aos="fade-up">
      {/* banner section */}
      <div className="hero bg-lightGrey11 dark:bg-lightGrey11-dark relative z-0 overflow-hidden py-50px md:py-100px lg:pb-150px lg:pt-100px 2xl:pb-40">
        {/* animated icons */}

        <div>
          {/* <BookImage />
          <GlobImage />
          <BalbImage />
          <AppleImage />
          <TriangleImage /> */}
        </div>

        <div className="container 2xl:container-secondary-md relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-30px">
            {/* banner Left */}
            <div data-aos="fade-up" className="lg:col-start-1 lg:col-span-7">
              <div className="3xl:pr-135px z-50">
                <HreoName>INVESTASI BERHARGA UNTUK MASA DEPAN</HreoName>
                <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-90 leading-42px md:leading-18 lg:leading-15 2xl:leading-24 text-blackColor dark:text-blackColor-dark md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                  Tambah Pengetahuan, Kuasai Skill Baru
                </h1>
                <p className="text-size-15md:text-lg text-blackColor dark:text-blackColor-dark font-medium">
                  Tumbuh bersama Nubi Academy
                  <br />
                </p>

                <div className="mt-30px space-x-30px">
                  <ButtonPrimary path="/courses">Lihat Kursus</ButtonPrimary>
                  <ButtonPrimary color="secondary" path="/courses">
                    Selengkapnya
                  </ButtonPrimary>
                </div>
              </div>
            </div>
            {/* banner right */}
            <div data-aos="fade-up" className="lg:col-start-8 lg:col-span-5">
              <div className="relative">
                <Image
                  src={videoImage}
                  alt=""
                  className="w-full rounded-lg2"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;