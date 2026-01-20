import Image from "next/image";
import Navbar from "./pages/navbar";
import Header from "./pages/Home/Header";
import Course from "./pages/courses/Course";
import Footer from "./pages/Home/Footer";
import Practices from "./pages/courses/Practices";
import HappiestClients from "./pages/courses/HappiestClients";
import ContactPage from "./pages/Home/Contact";






export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <Course/>
      <Practices/>
      <HappiestClients/>
      <ContactPage/>
       <Footer/>
       
  
      
    </>
  );
}
