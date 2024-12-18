import CardBox from '@/components/CardBox'
import Header from '@/components/Header'
import React from 'react'
import image1 from "../../../public/employee.gif"
import image2 from "../../../public/woman.gif"
import image3 from "../../../public/girl.gif"
import image4 from "../../../public/gitl1.gif"
import image5 from "../../../public/oldwoman.gif"
import image6 from "../../../public/man.gif"
import image7 from "../../../public/girl2.gif"
import image8 from "../../../public/doctor.gif"
interface CardProps {
  image: string; // Use `string` instead of `String`
  title: string;
  description: string;
  href: string;
}
const cardData = [
  {
    image: image2, // You can replace this with different image paths
    title: 'Ажил олгогч',
    description: 'This is the description for the second card.',
    href: '/game/employee/play',
  },

  {
    image: image3, // And here as well
    title: 'Сурагч',
    description: 'This is the description for the third card.',
    href: '/game/class/play',
  },
  {
    image: image1, // Ensure the image path is correct
    title: 'Ажилтан',
    description: 'This is the description for the first card.',
    href: '/game/employee/play',
  },
  {
    image: image4, // And here as well
    title: 'Оюутан',
    description: 'This is the description for the third card.',
    href: '/game/employee/play',
  },
  {
    image: image5, // And here as well
    title: 'Эмээ',
    description: 'This is the description for the third card.',
    href: '/game/employee/play',
  },
  {
    image: image6, // And here as well
    title: 'Ахлах ангийн сурагч',
    description: 'This is the description for the third card.',
    href: '/game/employee/play',
  },
  {
    image: image7, // And here as well
    title: 'Эмэгтэй',
    description: 'This is the description for the third card.',
    href: '/game/employee/play',
  },
  {
    image: image8, // And here as well
    title: 'Эрэгтэй',
    description: 'This is the description for the third card.',
    href: '/game/employee/play',
  },
];
const Card: React.FC<CardProps> = ({ image, title, description, href }) => {
  return (
    <div className="rounded bg-gradient-to-b from-blue-300 to-purple-300 overflow-hidden shadow-lg">
      <img  src={image} alt={title} />
      <div className="px-6 py-2">
        <h2 className="text-xl  font-semibold mb-2">{title}</h2>
      </div>
      <div className="px-6 py-2">
        <a href={href}  className="bg-blue-400 font-bold text-black px-4 py-2 rounded-full hover:bg-blue-700">
          Сонгох
        </a>
      </div>
    </div>
  );
};
export default function page() {
  return (
    <>
        <Header/>
        <p className="py-6 text-center text-3xl font-bold text-indigo-300 hover:text-blue-700 transition duration-300">
  Та эндээс өөрийнхөө дүрийг сонгоно уу!
</p>
        <div className="px-12 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image.src}
          title={card.title}
          description={card.description}
          href={card.href}
        />
      ))}
    </div>
        
    </>
  )
}
