import { useState } from "react";
import { Cat, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const catImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

const catFacts = [
  "Cats spend 70% of their lives sleeping.",
  "A group of cats is called a 'clowder'.",
  "Cats have over 20 vocalizations, including the famous meow.",
  "A cat's sense of smell is 14 times stronger than a human's.",
  "Cats can jump up to 6 times their length.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can't taste sweetness.",
  "A cat's hearing is much more sensitive than humans and dogs.",
];

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentFact, setCurrentFact] = useState(catFacts[0]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const generateNewFact = () => {
    const newFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCurrentFact(newFact);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Cat className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-primary">All About Cats</h1>
          </div>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>

        <Card className="mb-8">
          <CardContent className="p-0">
            <Carousel>
              <CarouselContent>
                {catImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <img src={src} alt={`Cat ${index + 1}`} className="mx-auto object-cover w-full h-[400px] rounded-lg" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">Cat Fact Generator</h2>
            <p className="text-xl text-foreground mb-4">{currentFact}</p>
            <Button onClick={generateNewFact}>Generate New Fact</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">About Cats</h2>
            <p className="text-foreground mb-4">
              Cats are fascinating creatures that have been domesticated for thousands of years. 
              Known for their independence, agility, and affectionate nature, cats have become 
              one of the most popular pets worldwide.
            </p>
            <p className="text-foreground">
              With their playful antics and soothing purrs, cats have a unique way of capturing our 
              hearts and becoming cherished members of our families.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
