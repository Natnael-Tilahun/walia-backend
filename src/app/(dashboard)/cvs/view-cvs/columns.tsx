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
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export type CV = {
  id: string;
  title: string;
  author: string;
  blogCategory: string;
  description: string;
  createdBy: string;
  img: string;
};

export const columns: ColumnDef<CV>[] = [
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
    //   return <span className="">{generateExcerpt(row.getValue("id"), 7)}</span>;
    // },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author" />
    ),
  },
  {
    accessorKey: "blogCategory",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Blog Category" />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    // cell: ({ row }) => {
    //   return (
    //     <span className="">
    //       {generateExcerpt(row.getValue("description"), 15)}
    //     </span>
    //   );
    // },
  },
  {
    accessorKey: "createdBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created By" />
    ),
  },
  {
    accessorKey: "img",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Img" />
    ),
    // cell: ({ row }) => {
    //   return (
    //     <span className="">{generateExcerpt(row.getValue("img"), 15)}</span>
    //   );
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
              Copy CV ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem> Edit CV</DropdownMenuItem>
            <DropdownMenuItem>Delete CV</DropdownMenuItem>
            <DropdownMenuItem>View CV Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
