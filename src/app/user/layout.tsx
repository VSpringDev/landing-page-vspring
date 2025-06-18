import Navbar from "@/components/navbar/page"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-primary-100">
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  )
}