"use client";

function Card({ title, description }: { title: string, description: string }) {
  return <>
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
    </div>
  </>;
}

export default function Services() {
  return (
    <>
      <div className="mx-auto w-full px-[50px] py-10">
        <h1 className="text-black text-4xl font-bold mb-4 text-center">
          Services
        </h1>

        <div className="grid grid-cols-4 gap-6 p-6">
          <Card title="Web Development" description="Building responsive and dynamic websites." />
          <Card title="Mobile App Development" description="Creating user-friendly mobile applications." />
          <Card title="UI/UX Design" description="Designing intuitive user interfaces and experiences." />
          <Card title="Cloud Solutions" description="Implementing scalable cloud-based solutions." />
          <Card title="DevOps Services" description="Streamlining development and operations." />
          <Card title="IOT Solutions" description="Designing and implementing IoT solutions." />
          <Card title="Maintenance Services" description="Providing ongoing maintenance and support." />
        </div>
      </div>
    </>
  );
}
