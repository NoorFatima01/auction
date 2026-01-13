import Electronics from "../assets/electronics.svg";
import Mobile from "../assets/mobile.svg";
import Property from "../assets/property.svg";
import Chair from "../assets/chair.svg";
import Fashion from "../assets/fashion.svg";
import rect1 from "../assets/rec1.png";
import rect2 from "../assets/rec2.png";
import rect3 from "../assets/rec3.png";
import rect4 from "../assets/rec4.png";
import rect from "../assets/rectangle.png";
import Dashboard from "@/assets/dashboard.svg";
import Users from "@/assets/users.svg";
import Orders from "@/assets/orders.svg";
import Auctions from "@/assets/grey-auction.svg";
import Star from "@/assets/star.svg";
import Settings from "@/assets/settings.svg";
import Payments from "@/assets/payments.svg";
import Reports from "@/assets/reports.svg";
import nike from "../assets/nike.png";
import airpods from "../assets/airpods.png";
import watch from "../assets/watch.png";
import macbook from "../assets/macbook.png";

export const categories = [
  {
    name: "Mobile",
    img: Mobile,
    color: "#D7FFEE",
    textColor: "#55A482",
  },
  {
    name: "Property",
    img: Property,
    color: "#EAFFD5",
    textColor: "#779A53",
  },
  {
    name: "Electronics",
    img: Electronics,
    color: "#FFE9D3",
    textColor: "#AC7B49",
  },
  {
    name: "Furniture",
    img: Chair,
    color: "#FEE2EC",
    textColor: "#99536C",
  },

  {
    name: "Jewellery",
    img: Fashion,
    color: "#E6EBFE",
    textColor: "#813C86",
  },
  {
    name: "Car Renting",
    img: Mobile,
    color: "#D7FFEE",
    textColor: "#55A482",
  },
  {
    name: "No Liability",
    img: Electronics,
    color: "#FFE9D3",
    textColor: "#AC7B49",
  },
  {
    name: "Offline",
    img: Chair,
    color: "#FEE2EC",
    textColor: "#99536C",
  },
];

export const recommendedImages = [rect1, rect2, rect3, rect4, rect];

export const sidebarMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: Dashboard },
  { id: "users", label: "Users", icon: Users },
  { id: "orders", label: "Orders", icon: Orders },
  { id: "auctions", label: "Auctions", icon: Auctions },
  { id: "payments", label: "Payments", icon: Payments },
  { id: "reports", label: "Reports", icon: Reports },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "settings", label: "Settings", icon: Settings },
];

export const personalInfo = [
  { label: "Full Name", value: "Kristian Waston" },
  { label: "Email", value: "kristian@mumtikaty.com" },
  { label: "Phone No", value: "+92 333 66 13900" },
  { label: "Address", value: "Lane 10, Hostel City, Islamabad" },
  { label: "Registration Date", value: "26 June, 2024" },
];

export const bids = [
  {
    product: "Airpods Max",
    image: airpods,
    currentBid: "$450.00",
    status: "Winning",
  },
  {
    product: "Nike New",
    image: nike,
    currentBid: "$230.00",
    status: "Outbid",
  },
  {
    product: "Tissot t43",
    image: watch,
    currentBid: "$103.00",
    status: "Outbid",
  },
];

export const purchases = [
  {
    product: "MacBook Air M3",
    image: macbook,
    price: "$1450.00",
    status: "Delivered",
    date: "26 June, 2024",
  },
];
