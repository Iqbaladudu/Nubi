import { CollectionConfig } from "payload/types";

const Course: CollectionConfig = {
  slug: "course",
  labels: {
    plural: "Kursus",
    singular: "Kursus",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Nama Kursus",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Deskripsi",
      type: "richText",
      required: true,
    },
    {
      name: "category",
      label: "Kategori",
      type: "relationship",
      relationTo: ["category"],
      required: true,
    },
    {
      name: "duration",
      label: "Durasi",
      type: "number",
      required: true,
    },
    {
      name: "Contents",
      label: "Materi Kursus",
      labels: {
        singular: "Modul",
        plural: "Modul",
      },
      type: "array",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "title",
          label: "Judul Materi",
          type: "text",
          required: true,
        },
        {
          name: "content",
          label: "Konten",
          type: "richText",
          required: true,
        },
        {
          name: "attachment",
          label: "Lampiran",
          type: "upload",
          relationTo: "upload-document",
        },
      ],
    },
  ],
};

export default Course;
