import { DataTable } from "@/components/data-table";
import { Blog, columns } from "./columns";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="flex justify-between">
        <PageTitle title="Blogs" sub="View, edit, delete blogs here." />
        <Link href="/blogs/add-blogs">
          <Button>Add Blog</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
