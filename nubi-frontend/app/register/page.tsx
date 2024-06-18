"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import darkLogo from "@/public/image/logo/nubiDarkLogo.png";
import Image from "next/image";

interface IFormInput {
  fullname: string;
  username: string;
  phone: string;
  email: string;
  password: string;
  subscription_status: "inactive";
}

export default function Register() {
  const { register, handleSubmit, getValues } = useForm<IFormInput>();
  const create = useMutation({
    mutationFn: (data: IFormInput) => {
      const response = axios.post("http://localhost:3000/api/users", data);
      return response;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => console.log(err),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    create.mutate(data);
  };

  return (
    <section className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Image
          className="w-32 flex items-center mb-6 text-2xl font-semibold text-white"
          src={darkLogo}
          alt="logo"
        />
        <div className="w-full flex flex-col justify-center rounded-lg shadow border md:mt-0 sm:max-w-lg xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Buat akun baru
            </h1>
            <form
              className="space-y-4 md:space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Muhammad Iqbal"
                    {...register("fullname", { required: true })}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="iqbaladudu"
                    {...register("username", { required: true })}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="bg-gray- border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="nama@emailmu.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    WhatsApp
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+620000000000"
                    {...register("phone", { required: true })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500 dark:text-gray-300">
                    Saya menerima{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-white btn-sm  w-24" type="submit">
                  {create.isPending ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Buat Akun"
                  )}
                </button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Sudah memiliki akun?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login di sini
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
