import { useState, useEffect } from "react";
import { Cat, Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const catBreeds = [
  { name: "Siamese", color: "#E6D3A3" },
  { name: "Persian", color: "#D3D3D3" },
  { name: "Maine Coon", color: "#8B4513" },
  { name: "Bengal", color: "#FFD700" },
  { name: "Sphynx", color: "#FFA07A" },
];

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
  const [selectedBreed, setSelectedBreed] = useState(catBreeds[0]);
  const [backgroundColor, setBackgroundColor] = useState(catBreeds[0].color);

  useEffect(() => {
    setBackgroundColor(selectedBreed.color);
  }, [selectedBreed]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const generateNewFact = () => {
    const newFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCurrentFact(newFact);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`} style={{ backgroundColor }}>
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Cat className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-primary">Fancy Cat World</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Select onValueChange={(value) => setSelectedBreed(catBreeds.find(breed => breed.name === value))}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a breed" />
              </SelectTrigger>
              <SelectContent>
                {catBreeds.map((breed) => (
                  <SelectItem key={breed.name} value={breed.name}>{breed.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </div>

        <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Sparkles className="mr-2" /> Cat Fact Generator
              </h2>
              <p className="text-xl text-foreground mb-4">{currentFact}</p>
              <Button onClick={generateNewFact} className="bg-primary hover:bg-primary-dark text-white">Generate New Fact</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">About {selectedBreed.name} Cats</h2>
              <p className="text-foreground mb-4">
                The {selectedBreed.name} is a beautiful and unique cat breed known for its distinctive features and personality.
                These cats are loved for their {selectedBreed.name === "Sphynx" ? "hairless body and wrinkled skin" : "luxurious coat and expressive eyes"}.
              </p>
              <p className="text-foreground">
                {selectedBreed.name} cats are {selectedBreed.name === "Siamese" ? "vocal and social" : 
                  selectedBreed.name === "Persian" ? "calm and gentle" : 
                  selectedBreed.name === "Maine Coon" ? "large and friendly" : 
                  selectedBreed.name === "Bengal" ? "active and playful" : 
                  "affectionate and unique"}, making them wonderful companions for cat lovers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
