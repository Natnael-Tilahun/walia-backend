"use client";

import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generateExcerpt } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type Job = {
  id: string;
  title: string;
  rating: number;
  companyName: string;
  companyType: string;
  jobType: string;
  workMode: string;
  department: string;
  experience: number;
  description: string;
  location: string;
  jobTags: string[];
  role: string;
  education: string[];
  responsiblities: string[];
  requirements: string[];
  preferredSkills: string[];
  closingDate: string;
  review: number;
  salary: string;
  applicants: number;
  postedBy: string;
  img: string;
  jobPostDate: string;
};

export const columns: ColumnDef<Job>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select row"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
    // cell: ({ row }) => {
    //   return <span className="">{generateExcerpt(row.getValue("id"), 3)}</span>;
    // },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "companyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
  },
  {
    accessorKey: "jobType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Type" />
    ),
    
    // cell: ({ row }) =>
    //   (
    //     <div className="lowercase bg-slate-600 max-w-[210px] truncate">
    //       {row.getValue("email")}
    //     </div>
    //   ),
  
  },
  {
    accessorKey: "workMode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Work Mode" />
    ),
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dep" />
    ),
  },
  {
    accessorKey: "experience",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exp" />
    ),
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
  },
  {
    accessorKey: "closingDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Closing Date" />
    ),
    cell: ({ row }) => {
      return (
        <span>
          {new Date(row.getValue("closingDate")).toLocaleDateString()}
        </span>
      );
    },
  },
  {
    accessorKey: "salary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salary" />
    ),
  },
  {
    accessorKey: "applicants",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Applicants" />
    ),
  },
  {
    accessorKey: "postedBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Posted By" />
    ),
  },
  {
    accessorKey: "jobPostDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Post Date" />
    ),
    cell: ({ row }) => {
      return (
        <span>
          {new Date(row.getValue("jobPostDate")).toLocaleDateString()}
        </span>
      );
    },
  },
  {
    accessorKey: "education",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Education" />
    ),
    // cell: ({ row }: { row: any }) => {
    //   return <span>{generateExcerpt(row.getValue("education")[0], 15)}</span>;
    // },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    // cell: ({ row }: { row: any }) => {
    //   return <span>{generateExcerpt(row.getValue("description"), 15)}</span>;
    // },
  },
  {
    accessorKey: "responsiblities",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Responsiblities" />
    ),
    // cell: ({ row }: { row: any }) => {
    //   return (
    //     <span>{generateExcerpt(row.getValue("responsiblities")[0], 15)}</span>
    //   );
    // },
  },
  {
    accessorKey: "jobTags",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Tags" />
    ),
    // cell: ({ row }: { row: any }) => {
    //   return <span>{generateExcerpt(row.getValue("jobTags")[0], 15)}</span>;
    // },
  },
  {
    accessorKey: "requirements",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requirements" />
    ),
    // cell: ({ row }: { row: any }) => {
    //   return (
    //     <span>{generateExcerpt(row.getValue("requirements")[0], 15)}</span>
    //   );
    // },
  },
  {
    accessorKey: "preferredSkills",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Preferred Skills" />
    ),
    // cell: ({ row }: { row: any }) => {
    //   return (
    //     <span>{generateExcerpt(row.getValue("preferredSkills")[0], 15)}</span>
    //   );
    // },
  },
  {
    accessorKey: "img",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Img" />
    ),
    // cell: ({ row }) => {
    //   return <span>{generateExcerpt(row.getValue("img"), 10)}</span>;
    // },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy Job ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem> Edit Job</DropdownMenuItem>
            <DropdownMenuItem>Delete Job</DropdownMenuItem>
            <DropdownMenuItem>View Job Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
