import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import type { FormEvent } from "react";

import AdminLayout from "@src/layouts/AdminLayout";
import { cn } from "@src/lib/utils";
import { useMutation } from "@tanstack/react-query";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { accessToken } = await context.req.cookies;
    if (accessToken) {
      return {
        redirect: {
          destination: "/admin/dashboard",
          permanent: false,
        },
      };
    }
    return {
      props: {},
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default function Admin() {
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (body: { username: string; password: string }) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return response.json();
    },
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { username, password } = e.target as HTMLFormElement;
    if (!username || !password) return;
    const body = {
      username: username.value,
      password: password.value,
    };

    const result = await mutateAsync(body);

    if (result?.isAuthenticated) {
      router.replace("/admin/dashboard");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "isolate bg-white/20 shadow-lg",
        "h-[37.5rem] w-[27.5rem] rounded-2xl",
        "backdrop-blur-xs p-5 flex flex-col gap-5 border-4",
        "border-[rgba(255,255,255,0.1)] shadow-[0_0_40px_white/10]",
        "flex flex-col"
      )}
    >
      <h1 className="mx-auto font-semibold text-4xl font-sans">Login</h1>
      <div className="flex flex-col gap-2 mt-8">
        <label
          htmlFor="username"
          className="text-base font-medium hover:underline"
        >
          Username
        </label>
        <input
          required
          id="username"
          className={cn(
            "border-[rgba(255,255,255,0.1)] h-14 w-full ",
            "bg-[rgba(255,255,255,0.23)] p-2 ring-0 ring-offset-0",
            "outline-none rounded-md shadow-[0_0_40px_white/10]",
            "focus:border-white/90 focus:border"
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-base font-medium hover:underline"
        >
          Password
        </label>
        <input
          required
          id="password"
          type="password"
          className={cn(
            "border-[rgba(255,255,255,0.1)] h-14 w-full ",
            "bg-[rgba(255,255,255,0.23)] p-2 ring-0 ring-offset-0",
            "outline-none rounded-md shadow-[0_0_40px_white/10]",
            "focus:border-white/90 focus:border"
          )}
        />
      </div>

      <button
        type="submit"
        className={cn(
          "mt-5 mx-auto w-32 bg-white/20 px-4 py-2 cursor-pointer",
          "border-[0.0625rem] border-white/90 rounded-md",
          "hover:bg-white/30 hover:border-white tex-sm"
        )}
      >
        Login
      </button>
    </form>
  );
}

Admin.layout = AdminLayout;
