export interface Dinosaur {
    name: string;
    avatar: string;
    description: string;
    assistantId: string;
}

export interface DinosaurCollection {
    cretaceous: Dinosaur[];
    jurassic: Dinosaur[];
    triassic: Dinosaur[];
}