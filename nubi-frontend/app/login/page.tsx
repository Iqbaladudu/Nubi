"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { setCookie } from "nookies";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import darkLogo from "@/public/image/logo/nubiDarkLogo.png";
import Image from "next/image";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
  rememberPassword: boolean;
}

export default function Login() {
  const { register, handleSubmit, getValues } = useForm<IFormInput>();
  const login = useMutation({
    mutationFn: (data: Pick<IFormInput, "email" | "password">) => {
      const response = axios.post(
        "http://localhost:3000/api/users/login",
        data
      );
      return response;
    },
    onSuccess: (data) => {
      if (getValues().rememberPassword) {
        setCookie(null, "token", `${data.data?.token}`, {
          maxAge: data.data?.exp,
          path: "/",
        });
      }
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    login.mutate({ email: data.email, password: data.password });
  };

  return (
    <section className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <Image className="w-32" src={darkLogo} alt="logo" />
        </a>
        <div className="w-full flex flex-col justify-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Masuk sekarang
            </h1>
            <form
              className="space-y-4 md:space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="nama@emailmu.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="••••••••"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-white">
                    Ingat kata sandi
                  </span>
                  <input
                    type="checkbox"
                    className="toggle"
                    {...register("rememberPassword")}
                  />
                </label>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-white btn-sm  w-24" type="submit">
                  {login.isPending ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Buat Akun"
                  )}
                </button>
              </div>
              <p className="text-sm font-light text-gray-400">
                Belum memiliki akun?{" "}
                <Link
                  href="/register"
                  className="font-medium hover:underline text-primary-500"
                >
                  Daftar di sini
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
