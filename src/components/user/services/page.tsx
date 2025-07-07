"use client";

function Card({ title, description }: { title: string, description: string }) {
  return <>
    <div className="bg-gray-200 rounded-2xl">
      <div className="bg-gray-100 w-[50px] h-[50px] rounded-br-2xl relative">
        <div className="w-[24px] h-[24px] absolute top-[-8px] -right-[16px] bg-transparent rounded-tl-full border-t-[8px] border-l-[8px] border-gray-100"></div>
        <div className="w-[24px] h-[24px] absolute bottom-[-16px] -left-[8px] bg-transparent rounded-tl-full border-t-[8px] border-l-[8px] border-gray-100"></div>
      </div>
      <div className="p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </>;
}

export default function Services() {
  let data = [
    {
      title: "Web Development",
      description: "Building responsive and dynamic websites."
    },
    {
      title: "Mobile App Development",
      description: "Creating user-friendly mobile applications."
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences."
    },
    {
      title: "Cloud Solutions",
      description: "Implementing scalable cloud-based solutions."
    },
    {
      title: "DevOps Services",
      description: "Streamlining development and operations."
    },
    {
      title: "IOT Solutions",
      description: "Designing and implementing IoT solutions."
    },
    {
      title: "Maintenance Services",
      description: "Providing ongoing maintenance and support."
    }
  ]
  return (
    <>
      <div className="mx-auto w-full px-[50px] py-10">
        <h1 className="text-black text-4xl font-bold mb-4 text-center">
          Services
        </h1>

        <div className="grid grid-cols-4 gap-6 p-6">
            {data.map((item, index) => {
              return <Card title={item.title} description={item.description} key={index} />
            })}
        </div>
      </div>
    </>
  );
}
