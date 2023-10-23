import { DataTable } from "@/components/data-table";
import { User, columns } from "./columns";

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

export default async function Users() {
  const data = await getData();

  return (
    <div className="px-5 lg:px-16 mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}