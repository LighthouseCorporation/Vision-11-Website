import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 4,
    title: "",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "Home",
        path: "/",
        newTab: false,
      },
      {
        id: 2,
        title: "Case Studies",
        path: "/case-studies",
        newTab: false,
      },
      {
        id: 3,
        title: "Articles",
        path: "/articles",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Us",
        path: "/contact",
        newTab: false,
      }
    ],
  },
];
export default menuData;
