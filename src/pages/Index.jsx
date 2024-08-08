import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Cat className="h-12 w-12 text-blue-500 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">All About Cats</h1>
        </div>
        
        <img src="/placeholder.svg" alt="Cat" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-md mb-8" />
        
        <p className="text-xl text-gray-700 mb-8">
          Cats are fascinating creatures that have been domesticated for thousands of years. 
          Known for their independence, agility, and affectionate nature, cats have become 
          one of the most popular pets worldwide.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interesting Cat Facts</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Cats spend 70% of their lives sleeping.</li>
          <li>A group of cats is called a "clowder".</li>
          <li>Cats have over 20 vocalizations, including the famous meow.</li>
          <li>A cat's sense of smell is 14 times stronger than a human's.</li>
          <li>Cats can jump up to 6 times their length.</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
