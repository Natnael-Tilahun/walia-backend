import { DataTable } from "@/components/data-table";
import { User, columns } from "./columns";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getData(): Promise<User[]> {
  return [
    {
      id: "728ed52f",
      email: "anatnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "bnatnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "cnatnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "dnatnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "natnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "natnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "natnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "natnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "yosefteshome@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "abebekebed@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "natnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
    {
      id: "728ed52f",
      email: "natnaeltilahun97@gmail.com",
      phone: "0933654654",
      fullName: "Natnael Tilahun",
      status: "user",
    },
  ];
}

export default async function ViewUsers() {
  const data = await getData();

  return (
    <div className="px-5 lg:px-10 mx-auto space-y-6 py-10">
      <div className="flex justify-between">
        <PageTitle
          title="Users"
          sub="  View, update, delete a list of your users!"
        />

        <Link href="/users/add-users">
          <Button>Add User</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
