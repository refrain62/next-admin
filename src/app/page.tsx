import Image from "next/image";
import styles from "./page.module.css";

import { NextPage } from "next";
import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });

const Home: NextPage = () => <AdminApp />;

export default Home;
