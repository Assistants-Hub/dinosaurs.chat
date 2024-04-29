import {Avatar, Modal} from "flowbite-react";
import {Dinosaur} from "@/app/dinosaur";
import {useState} from "react";

export default function DinoButton(props:Dinosaur) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    return (
        <>
            <Avatar img={`${props.avatar}`} size="xl" rounded onClick={() => {
                setIsOpen(true)
            }}/>
            <div className="text-center text-sm font-semibold dark:text-white">{props.name}</div>
            <Modal show={isOpen} onClose={handleClose} popup>
                <Modal.Header title={props.name}/>
                <Modal.Body>
                    <div className="grid grid-cols-12 ">
                        <Avatar img={`${props.avatar}`} size="xl" rounded className="m-4 col-span-5"/>
                        <div className="mb-6 col-span-7 text-sm text-gray-500 dark:text-gray-400">
                            {props.description}
                        </div>
                    </div>
                    <div className="items-center justify-center bg-red-500">
                        <iframe
                            src={`https://www.assistantshub.ai/embed/${props.assistantId}?style=window-frameless`}
                            style={{height: "500px", border: "0 none;", width: "100%"}}
                            allowFullScreen
                            allowTransparency className="self-center bg-green-500"></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
}