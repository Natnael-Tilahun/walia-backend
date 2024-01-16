"use client";

import { create } from "zustand";

// types
type FieldType = "blogTitle" | "blogContent" | "image" | "author";
interface InfosState {
  blogTitle: string;
  blogContent: string;
  image: string;
  author: string;
}

interface InfosStore {
  infos: InfosState;
  completed: boolean;
  setInfos: (field: FieldType, value: string) => void;
}

// Functions
const validateInfos = (infos: InfosState) => {
  if (
    infos.blogTitle.length === 0 ||
    infos.blogContent.length === 0 ||
    infos.image.length === 0 ||
    infos.author.length === 0
  )
    return false;
  return true;
};

export const useInfos = create<InfosStore>((set, get) => ({
  infos: {
    blogTitle: "",
    blogContent: "",
    image: "",
    author: "",
  },
  completed: false,
  setInfos: (field, value) =>
    set((state) => {
      let newInfos = {
        ...state.infos,
        [field]: value,
      };
      return {
        ...state,
        completed: validateInfos(newInfos),
        infos: newInfos,
      };
    }),
}));
