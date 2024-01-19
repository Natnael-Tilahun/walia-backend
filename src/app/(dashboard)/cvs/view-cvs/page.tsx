import { DataTable } from "@/components/data-table";
import { CV, columns } from "./columns";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getData(): Promise<CV[]> {
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

export default async function CVs() {
  const data = await getData();

  return (
    <div className="px-5 lg:px-10 mx-auto space-y-6 py-10">
      <div className="flex justify-between">
        <PageTitle title="CVs" sub="View, edit, delete cvs here." />
        <Link href="/cvs/add-cvs">
          <Button>Add CVs</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
