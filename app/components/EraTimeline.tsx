"use client";

import { Timeline} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import DinoButton from "@/app/components/DinoButton";

export function EraTimeline() {
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>145 million years ago - 66 million years ago</Timeline.Time>
                    <Timeline.Title>Cretaceous Period</Timeline.Title>
                    <Timeline.Body>
                        The Cretaceous saw continents drift further. Flowering plants flourished, while massive herbivores like Argentinosaurus roamed. The reign ended with a bang – a giant asteroid impact that wiped out the dinosaurs.
                    </Timeline.Body>
                    <DinoButton name={"Tyrannosaurus Rex"}
                                avatar={'/images/dinos/tyrannosaurus-rex-avatar.png'}
                                description={"The ground trembles with every thunderous step I take. From my tiny nostrils, I catch the scent of prey on the wind. My powerful jaws gnash with anticipation, a row of serrated daggers ready to tear flesh.  With a deafening roar that shakes the very trees, I charge forward, a whirlwind of teeth and fury.  Nothing escapes the terror that is Tyrannosaurus Rex!"}

                    />
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>200 million years ago - 145 million years ago</Timeline.Time>
                    <Timeline.Title>Jurassic Period</Timeline.Title>
                    <Timeline.Body>
                        This was a golden age for dinosaurs. Lush forests thrived under warm, humid skies as Pangaea continued to break apart. Giants like Brachiosaurus emerged, making it a time of impressive diversity and colossal creatures.
                    </Timeline.Body>
                    <DinoButton name={"Stegosaurus"}
                                avatar={'/images/dinos/stegosaurus-avatar.png'}
                                description={"The ferns are high, perfect for munching! My bony plates catch the warm sunlight as I lumber through the forest. Watch out little ferns, here I come! But if any hungry meat-eater gets too close, my spiked tail swings with a mighty WHACK!  These plates may look heavy, but they're my best defense. There's no stopping a Stegosaurus on a mission for tasty plants!"}
                    />
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>250 million years ago - 200 million years ago</Timeline.Time>
                    <Timeline.Title>Triassic Period</Timeline.Title>
                    <Timeline.Body>
                        In the shadow of super continent Pangaea, the Triassic witnessed the rise of the first small dinosaurs amidst a hot, dry landscape.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    );
}
