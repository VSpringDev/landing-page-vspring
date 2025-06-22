"use client"

import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const router = useRouter();

  const handleLogin = async () => {
    let valid = true;
    const newErrors: typeof errors = {};

    if (!username) {
      newErrors.username = "Please enter your username";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Please enter your password";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post("/auth/login", { username, password });
      const token = res.data.token;
      const auth = res.data.auth;

      localStorage.setItem("token", token);
      localStorage.setItem("auth", JSON.stringify(auth));
      document.cookie = `token=${token}; path=/`;
      document.cookie = `auth=${encodeURIComponent(JSON.stringify(auth))}; path=/`;

      if (auth.role === "Admin") {
        router.push("/admin/");
      } else {
        router.push("/user/hero");
      }
    } catch (err) {
      window.alert("Login gagal. Pastikan username & password benar.");
    }
  };

    
    return(
        <>
        <div className="relative w-screen h-screen">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg1.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
  </div>

  <div className="relative z-10 flex justify-center items-center w-full h-full">
    <div className="w-full max-w-3xl rounded-xl bg-white h-[500px] shadow-xl overflow-hidden grid grid-cols-2">
      {/* Left Info Section */}
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/bg1.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 p-8 text-white">
          <h1 className="text-[2rem] mb-2 line-clamp-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, reiciendis.</h1>
          <p className="text-justify text-sm line-clamp-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi deleniti quod libero aliquid aperiam hic possimus, eum maiores voluptas quaerat ullam, modi tempore iusto facilis, id sint ea itaque? Explicabo sint provident modi iusto doloribus quidem unde maxime mollitia alias.</p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex justify-center py-16 px-8 text-black bg-white">
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {/* Logo */}
          <div className="flex justify-center items-center gap-4">
            <img src="/Logo.png" alt="logo" className="w-12 h-12" />
            <h1 className="font-bold text-black text-[1.5rem] ">V-Spring Dev</h1>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="masukkan username"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 px-4 py-2 rounded mt-1 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="masukkan password"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer top-4 right-3 text-gray-500"
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="mt-4 bg-gray-400 duration-300 text-white py-2 px-6 rounded hover:bg-gray-800 transition hover:cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}