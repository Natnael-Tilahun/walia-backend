import { DataTable } from "@/components/data-table";
import { Blog, columns } from "./columns";

async function getData(): Promise<Blog[]> {
  return [
    {
      id: "65299de3c6773259db14ee09",
      title: "5 Best carrier tips for young people",
      blogCategory: "tips",
      author: "Yosef Teshome",
      description:
        "I made a lot of mistakes at the beginning of my career. I didn’t have a mentor or anyone to show me the ropes, so I was left to do what I thought was right. But in many cases, what I thought was a great choice ended up not being the best option. Everything worked out in the end, but I could have saved myself some headaches and stress if I had listened to quality career advice.",
      createdBy: "Admin",
      img: "https://res.cloudinary.com/dz7lxjqrg/image/upload/v1697226210/llf4n4abpxzgudsmpdq6.webp",
    },
    {
      id: "65299de3c6773259db14ee09",
      title: "5 Best carrier tips for young people",
      blogCategory: "tips",
      author: "Yosef Teshome",
      description:
        "I made a lot of mistakes at the beginning of my career. I didn’t have a mentor or anyone to show me the ropes, so I was left to do what I thought was right. But in many cases, what I thought was a great choice ended up not being the best option. Everything worked out in the end, but I could have saved myself some headaches and stress if I had listened to quality career advice.",
      createdBy: "Admin",
      img: "https://res.cloudinary.com/dz7lxjqrg/image/upload/v1697226210/llf4n4abpxzgudsmpdq6.webp",
    },
  ];
}

export default async function Blogs() {
  const data = await getData();

  return (
    <div className="px-5 lg:px-10 space-y-6 mx-auto py-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of your blogs!
        </p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
