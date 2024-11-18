import React from 'react';

// Define the props type for the Card component
interface CardProps {
  image: string; // Use `string` instead of `String`
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-56 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

// Define the props type for the CardBox component
interface CardBoxProps {
  cardData: {
    image: string; // Use `string` instead of `String`
    title: string;
    description: string;
  }[];
}

const CardBox: React.FC<CardBoxProps> = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardBox;
