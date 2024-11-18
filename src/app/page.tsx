'use client'
import { useState } from 'react';
import Image from 'next/image';
import image from "../../public/people2.gif";
import image2 from "../../public/people3.gif";
import Header from '@/components/Header';

export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
   <><Header/>
   <main className="container mx-auto px-6 py-60 text-center">
     <h3 className="text-6xl font-extrabold mb-10">GENDER BIAS</h3>
     <div className="flex justify-center items-center gap-4">
       <button
         onClick={handlePopupToggle}
         className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-500 font-bold"
       >
         Тоглоомын тухай
       </button>
    <a href='/game'>   <button  className="px-8 py-3 border-2 border-blue-600 rounded-full hover:bg-blue-500">
         ▶
       </button></a>
     </div>
   </main>

   <section className="flex justify-center py-20">
     <Image
       src={image}
       alt="Earth"
       width={800}
       height={500}
       className="hadow-lg"
     />
   </section>
   <section className="flex justify-center py-20">
     <Image
       src={image2}
       alt="Earth"
       width={800}
       height={500}
       className="hadow-lg"
     />
   </section>

   {isPopupVisible && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
 <div className="bg-white rounded-2xl shadow-lg p-8 w-4/5 max-w-sm relative">
   {/* Close Button */}
   <button
     onClick={handlePopupToggle}
     className="absolute top-4 right-4 text-gray-400 hover:text-red-500 font-bold text-2xl"
   >
     &times;
   </button>

   {/* Popup Content */}
   <h2 className="text-2xl font-bold text-blue-600 mb-4">Дэлгэрэнгүй</h2>
   <p className="text-gray-600 mb-6 text-center">
   Empathia” нь виртуал орчноор дамжуулан жендерийн тухай мэдлэг олгох, жендертэй холбоотой илэрдэг танин мэдэхүйн алдааг бууруулах зорилготой бөгөөд ингэхдээ жендерийн асуудлуудыг кейс болон туршлагаар үзүүлэх замаар жендерийн тэгш байдлыг дэмжих, тоглогчдын эмпатийг хөгжүүлэхэд чиглэнэ.
   </p>

   {/* Action Buttons */}
   <div className="flex justify-center gap-4">
     <a href='/game' className="px-6 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600">
       Тоглох
     </a>
     <button
       onClick={handlePopupToggle}
       className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full font-bold hover:bg-blue-50"
     >
       Болсон
     </button>
   </div>
 </div>
</div>
)}

 ;</>
  )
}
