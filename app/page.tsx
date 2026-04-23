import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId) redirect("/dashboard");

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
      <section className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white px-8 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Clerk setup
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {userId ? "You are signed in." : "You are signed out."}
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {userId
            ? "Use the profile button in the header to manage your account, then start building protected routes and user-aware flows."
            : "Use the sign in and sign up buttons in the header to create your first test user."}
        </p>
      </section>
    </main>
  );
}
