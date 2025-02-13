import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Apple, Eye, Monitor, Phone } from "lucide-react"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-500 p-6 relative flex-col items-center justify-center text-white">
        <div className="max-w-xl mx-auto text-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-13%20134858-r5GqAq1XLkLxSbWJi1ajFZY4Q23mII.png"
            alt="Billing illustration"
            className="w-96 h-96 object-contain mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">Custom Billing, Unmatched Flexibility</h1>
          <p className="text-lg opacity-90 mb-8">
            Customize every detail of your invoices with dynamic templates and seamless product management.
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-6 border-0 shadow-none">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-500 w-8 h-8 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-semibold">Invoicify</span>
            </div>
            <h2 className="text-2xl font-semibold">Log In</h2>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600" htmlFor="username">
                Username
              </label>
              <Input id="username" type="text" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Input id="password" type="password" />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3 hover:bg-transparent">
                  <Eye className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </div>

            <div className="text-right">
              <Button variant="link" className="text-emerald-500 p-0 h-auto font-normal">
                Forgot Password?
              </Button>
            </div>

            <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Log In</Button>

            <div className="relative my-6">
              <Separator />
              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                Or
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Apple className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Monitor className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Phone className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Do not have an account?{" "}
              <Button variant="link" className="text-emerald-500 p-0 h-auto font-normal">
                Sign Up here
              </Button>
            </p>
          </form>
        </Card>
      </div>
    </main>
  )
}

