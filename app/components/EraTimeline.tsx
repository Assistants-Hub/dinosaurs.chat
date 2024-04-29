"use client";

import { Timeline} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import DinoButton from "@/app/components/DinoButton";
import {DinosaurCollection} from "@/app/dinosaur";

export interface EraTimelineProps {
    collection: DinosaurCollection
}

export function EraTimeline(props: EraTimelineProps) {
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>145 million years ago - 66 million years ago</Timeline.Time>
                    <Timeline.Title>Cretaceous Period</Timeline.Title>
                    <Timeline.Body>
                        The Cretaceous saw continents drift further. Flowering plants flourished, while massive
                        herbivores like Argentinosaurus roamed. The reign ended with a bang – a giant asteroid impact
                        that wiped out the dinosaurs.
                    </Timeline.Body>
                    <div className='stack items-center justify-center'>
                        {
                            props.collection.cretaceous.map((dino) => {
                                return <DinoButton  key={dino.name} name={dino.name}
                                                    avatar={dino.avatar}
                                                    description={dino.description}
                                                    assistantId={dino.assistantId}
                                />
                            })
                        }
                    </div>
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
                    {
                        props.collection.jurassic.map((dino) => {
                            return <DinoButton key={dino.name} name={dino.name}
                                               avatar={dino.avatar}
                                               description={dino.description}
                                               assistantId={dino.assistantId}
                            />
                        })
                    }
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
                    {
                        props.collection.triassic.map((dino) => {
                            return <DinoButton key={dino.name} name={dino.name}
                                               avatar={dino.avatar}
                                               description={dino.description}
                                               assistantId={dino.assistantId}
                            />
                        })
                    }
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    );
}
