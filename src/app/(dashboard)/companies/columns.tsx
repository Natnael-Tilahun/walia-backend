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

export type Company = {
  id: string;
  name: string;
  rating: string;
  reviews: string;
  companyType: string;
  headOffice: string;
  companyLogo: string;
  employeeNumber: string;
  mainService: string;
  about: string;
  jobs: string[];
  benefits: {
    InternationalRelocation: boolean;
    FreeTransport: boolean;
    ChildCare: boolean;
    Gymnasium: boolean;
    Cafeteria: boolean;
    WorkFromHome: boolean;
    FreeFood: boolean;
    TeamOutings: boolean;
    EducationAssistance: boolean;
    SoftSkillTraining: boolean;
    HealthInsurance: boolean;
    JobTraining: boolean;
    _id: string;
  };
  userReview: string[];
};

export const columns: ColumnDef<Company>[] = [
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
    cell: ({ row }) => {
      return <span className="">{generateExcerpt(row.getValue("id"), 5)}</span>;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rating" />
    ),
  },
  {
    accessorKey: "reviews",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reviews" />
    ),
  },
  {
    accessorKey: "companyType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Type" />
    ),
  },
  {
    accessorKey: "headOffice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Head Office" />
    ),
  },
  {
    accessorKey: "companyLogo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Logo" />
    ),
    cell: ({ row }) => {
      return (
        <span className="">
          {generateExcerpt(row.getValue("companyLogo"), 15)}
        </span>
      );
    },
  },
  {
    accessorKey: "employeeNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Employee Number" />
    ),
  },
  {
    accessorKey: "mainService",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Main Service" />
    ),
  },
  {
    accessorKey: "about",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="About" />
    ),
    cell: ({ row }) => {
      return (
        <span className="">{generateExcerpt(row.getValue("about"), 15)}</span>
      );
    },
  },
  {
    accessorKey: "jobs",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jobs" />
    ),
    cell: ({ row }: { row: any }) => {
      return <span>{generateExcerpt(row.getValue("jobs")[0], 5)}</span>;
    },
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
              Copy Company ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem> Edit Company</DropdownMenuItem>
            <DropdownMenuItem>Delete Company</DropdownMenuItem>
            <DropdownMenuItem>View Company Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
