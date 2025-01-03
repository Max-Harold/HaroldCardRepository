import {useState} from "react"
import {motion} from "framer-motion"

import Edy_Back from '../assets/Edy_Back.png'
import Edy_Front from '../assets/Edy_Front.png'
import Johnny_Back from '../assets/Johnny_Back.png'
import Johnny_Front from '../assets/Johnny_Front.png'
import Libby_Back from '../assets/Libby_Back.png'
import Libby_Front from '../assets/Libby_Front.png'
import Lucy_Back from '../assets/Lucy_Back.png'
import Lucy_Front from '../assets/Lucy_Front.png'
import Max_Back from '../assets/Max_Back.png'
import Max_Front from '../assets/Max_Front.png'
import Monica_Back from '../assets/Monica_Back.png'
import Monica_Front from '../assets/Monica_Front.png'
import Phil_Back from '../assets/Phil_Back.png'
import Phil_Front from '../assets/Phil_Front.png'
import Rachel_Back from '../assets/Rachel_Back.png'
import Rachel_Front from '../assets/Rachel_Front.png'
import Sasha_Back from '../assets/Sasha_Back.png'
import Sasha_Front from '../assets/Sasha_Front.png'


type CardImageMap = {
    [key:string]: string;
}

const cardImgs: CardImageMap = {
    'Edy_Back': Edy_Back,
    'Edy_Front': Edy_Front,
    'Johnny_Back': Johnny_Back,
    'Johnny_Front': Johnny_Front,
    'Libby_Back': Libby_Back,
    'Libby_Front': Libby_Front,
    'Lucy_Back': Lucy_Back,
    'Lucy_Front': Lucy_Front,
    'Max_Back': Max_Back,
    'Max_Front': Max_Front,
    'Monica_Back': Monica_Back,
    'Monica_Front': Monica_Front,
    'Phil_Back': Phil_Back,
    'Phil_Front': Phil_Front,
    'Rachel_Back': Rachel_Back,
    'Rachel_Front': Rachel_Front,
    'Sasha_Back': Sasha_Back,
    'Sasha_Front': Sasha_Front,
}

type CardProps = {
    name: string;
    className?: string;
}

const animationDuration: number = .1

function Card(props: CardProps) {
    const name: string = props.name
    const className = props.className ?? "" 
    console.log(className)

    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const backImage = cardImgs[name + "_Back"]
    const frontImage = cardImgs[name+"_Front"]

    const width: string = '75vh'
    const height: string = '100vh'

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }


    return (
        <motion.div className={`absolute items-center justify-center scale-90 w-[75vh] h-screen cursor-pointer` + className}
            >
            <div className={`flip-card h-screen w-[${width}]`} onClick={handleFlip}>
                
                <motion.div
                    className={`flip-card-inner w-[${width}] h-screen`}
                    initial={false}
                    animate={{rotateY: isFlipped ? 180 : 360}}
                    transition={{duration: animationDuration, animationDirection: "normal"}}
                    onAnimationComplete={() => setIsAnimating(false)}>
                    <div 
                        className=
                        {`flip-card-back w-[${width}] h-[${height}] bg-cover bg-center border-[1px] text-white`}
                            style={{backgroundImage: `url(${backImage})`}}>
                
                    </div>
                    <div 
                        className=
                        {`flip-card-front w-[${width}] h-[${height}] bg-cover bg-center border-[1px] text-white`}
                        style={{backgroundImage: `url(${frontImage})`}}>

                    </div>
                    
                </motion.div>

            </div>
        </motion.div>
    )
}

export default Card