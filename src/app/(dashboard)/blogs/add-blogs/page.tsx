"use client";

import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { useInfos } from "@/stores/newJobForm/infos";
import { ChangeEvent, useState } from "react";
import { Label } from "recharts";

// Types
interface FieldType {
  name: "blogTitle" | "blogContent" | "image" | "author";
  label: string;
  placeholder: string;
}

interface InputParams {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
}

// Components
const Input = ({ value, onChange, name, placeholder }: InputParams) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
      className="transition w-full outline-confirm border border-muted rounded-md px-4 py-3 text-primary caret-primary placeholder:text-muted-dark "
    />
  );
};

// Data
const fields: FieldType[] = [
  {
    name: "blogTitle",
    label: "Blog Title",
    placeholder: "Job Title",
  },
  {
    name: "blogContent",
    label: "Blog Content",
    placeholder: "Job Category",
  },
  {
    name: "image",
    label: "Image",
    placeholder: "blog image",
  },
  {
    name: "author",
    label: "Author",
    placeholder: "blog author",
  },
];

export default function Home() {
  const { fieldsValue, setFieldsValue } = useInfos((state) => ({
    fieldsValue: state.infos,
    setFieldsValue: state.setInfos,
  }));
  return (
    <div className="px-5 lg:px-10 space-y-10 mx-auto py-6">
      <PageTitle
        title="Post a Blog"
        sub="Please fill in the required fields below,"
      />
      <form action="#">
        {fields.map(({ name, label, placeholder }) => (
          <div key={name} className="my-4">
            <label
              htmlFor={name}
              className="block font-medium text-primary mb-1"
            >
              {label}
            </label>
            <Input
              placeholder={placeholder}
              name={name}
              value={fieldsValue[name]}
              onChange={(e) => setFieldsValue(name, e.target.value)}
            />
          </div>
        ))}
        <Button>Create Blog</Button>
      </form>
    </div>
  );
}
