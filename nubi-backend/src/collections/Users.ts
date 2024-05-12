import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "User",
    plural: "Users",
  },
  auth: true,
  admin: {
    useAsTitle: "username",
  },
  fields: [
    {
      name: "fullname",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "phone",
      label: "Nomor Telepon/WhatsApp",
      type: "number",
      required: true,
      unique: true,
    },
    {
      name: "dateofbirth",
      label: "Date of Birth",
      type: "date",
      required: true,
    },
    {
      name: "province",
      label: "Provinsi",
      type: "text",
      required: true,
    },
    {
      name: "Regency",
      label: "Kabupaten",
      type: "text",
      required: true,
    },
    {
      name: "startDate",
      label: "Tanggal Mulai Langganan",
      type: "date",
    },
    {
      name: "endDate",
      label: "Tanggal Selesai Langganan",
      type: "date",
    },
    {
      name: "subscription_status",
      label: "Status Langganan",
      type: "select",
      hasMany: false,
      options: [
        {
          label: "Aktif",
          value: "active",
        },
        {
          label: "Tidak Aktif",
          value: "inactive",
        },
      ],
    },
  ],
};

export default Users;
