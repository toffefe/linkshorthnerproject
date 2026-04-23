import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignUpCTA } from "@/components/sign-up-cta";
import {
  Link,
  Zap,
  QrCode,
  BarChart3,
  Shield,
  Clock,
  Users,
} from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

  if (userId) redirect("/dashboard");

  return (
    <main className="flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-4xl">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 dark:border-zinc-800 dark:bg-zinc-900/50">
              <Zap className="size-4 text-amber-500" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Lightning-fast URL shortening
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
              Shorten URLs.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amplify Impact.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
              Turn long, unwieldy URLs into short, shareable links. Track
              analytics, customize domains, and share with confidence.
            </p>

            <div className="flex items-center justify-center gap-3 pt-4">
              <SignUpButton>
                <Button size="lg" className="gap-2">
                  Get Started Free
                  <span className="text-lg">→</span>
                </Button>
              </SignUpButton>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-200 dark:border-zinc-800"
              >
                View Demo
              </Button>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              No credit card required. Start shortening in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-200 bg-white px-6 py-20 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-950 dark:text-white">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need to manage, track, and optimize your links
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800/50">
              <div className="inline-flex rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                <Link className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                Instant URL Shortening
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Shorten any URL in seconds with a single click. Get instant
                access to your shortened link.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800/50">
              <div className="inline-flex rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
                <QrCode className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                QR Code Generation
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Automatically generate QR codes for each shortened link. Perfect
                for print and mobile.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800/50">
              <div className="inline-flex rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                <BarChart3 className="size-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                Real-time Analytics
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Track clicks, geographic data, and referrers. Understand your
                audience at a glance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800/50">
              <div className="inline-flex rounded-lg bg-orange-100 p-3 dark:bg-orange-900/30">
                <Shield className="size-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                Custom Domains
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Use your own domain for branded short links. Build trust and
                maintain brand consistency.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800/50">
              <div className="inline-flex rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
                <Clock className="size-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                Link Expiration
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Set expiration dates for temporary links. Perfect for
                time-sensitive campaigns.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800/50">
              <div className="inline-flex rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900/30">
                <Users className="size-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                Team Collaboration
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Share links with your team, manage permissions, and collaborate
                seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-950 dark:text-white">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Three simple steps to get started
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-950 dark:text-white">
                Paste Your Link
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Enter any long URL into our shortener
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-purple-100 text-lg font-bold text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-950 dark:text-white">
                Customize It
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Create custom aliases or let us generate one
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-600 dark:bg-green-900/30 dark:text-green-400">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-950 dark:text-white">
                Share & Track
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Share your link and monitor its performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-200 bg-gradient-to-b from-blue-50 to-purple-50 px-6 py-20 dark:border-zinc-800 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-zinc-950 dark:text-white">
            Ready to Shorten Your Links?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Join thousands of users who are already shortening and tracking
            their links with ease.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <SignUpButton>
              <Button size="lg" className="gap-2">
                Start For Free
                <span className="text-lg">→</span>
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </main>
  );
}
