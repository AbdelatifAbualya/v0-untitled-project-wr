import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-white" />
          <span className="font-medium text-lg">Your360AGI</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium text-gray-400 hover:text-white">
            Domain
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-400 hover:text-white">
            About
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:flex border-white/10 text-white hover:bg-white/5">
          Contact
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-screen flex items-center justify-center bg-black text-white relative">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="space-y-6 text-center">
                <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm border border-white/5">
                  Premium Domain
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Benefits of Your360AGI.com</h1>

                <div className="max-w-2xl mx-auto mt-6 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                    This is a rare domain, our plan to sell it is not to convince people that its what we say, our plan
                    is to sell by just letting them know that is available.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 text-base h-11 px-6">
                    Secure This Domain <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/10 text-white hover:bg-white/5 text-base h-11 px-6"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="relative w-full max-w-3xl mx-auto aspect-video">
                {/* Simple, elegant visualization */}
                <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[600px] h-[600px] border border-white/10 rounded-full absolute"></div>
                    <div className="w-[400px] h-[400px] border border-white/10 rounded-full absolute"></div>
                    <div className="w-[200px] h-[200px] border border-white/10 rounded-full absolute"></div>

                    <div className="relative z-10 text-center space-y-2">
                      <div className="text-3xl font-light">Your360AGI.com</div>
                      <div className="text-sm text-white/60">A rare opportunity</div>
                    </div>
                  </div>

                  {/* Subtle animated dots */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-100"></div>
                  <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-200"></div>
                  <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-24 bg-black text-white border-t border-white/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-medium mb-8">About the Domain Owner</h2>

              <p className="text-white/80 leading-relaxed mb-8">
                I'm an AWS Certified Machine Learning – Specialty professional with hands-on experience in AI
                surveillance technologies. During my training and certification with Axis Communications and Milestone
                XProtect, I was exposed to cutting-edge surveillance systems capable of detailed tracking and predictive
                analytics. These experiences have solidified my belief in the transformative power of AGI in security
                monitoring.
              </p>

              <form className="space-y-4">
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="w-full md:w-auto bg-white text-black hover:bg-white/90">Contact About Domain</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full px-4 md:px-6 border-t border-white/5 bg-black">
        <div className="container flex flex-col gap-2 sm:flex-row items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-white/40" />
            <p className="text-xs text-white/40">© {new Date().getFullYear()} Your360AGI. All rights reserved.</p>
          </div>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs text-white/40 hover:text-white">
              Domain Info
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
