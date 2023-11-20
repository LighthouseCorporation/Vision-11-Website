import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "What we do",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
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
    id: 4,
    title: "Support",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Chat with GPT",
        path: "/about",
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
