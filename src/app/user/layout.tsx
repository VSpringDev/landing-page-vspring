import Footer from "@/components/footer/page"
import Navbar from "@/components/navbar/page"
import Floating from "@/components/floating/page"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <Floating />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}