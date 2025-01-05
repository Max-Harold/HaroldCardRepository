import React, { Component } from "react";
import Card from "./Card";
import {motion} from 'framer-motion'

interface CardSwitcherProps {
    currentIndex: number;
    nextIndex: number;
    isAnimating: boolean;
    onAnimationFinished: () => void;
}

class CardSwitcher extends Component<CardSwitcherProps>{

    render = () => {
        const cardNames = ["Edy", "Johnny", "Libby", "Lucy", "Max", "Monica", "Phil", "Rachel", "Sasha"]
        const animationTime = .5
        const {currentIndex, nextIndex, isAnimating, onAnimationFinished} = this.props

        const gap = 200

        var nextCardStart = gap
        var currentCardEnd = -gap
        if ((currentIndex > nextIndex || (nextIndex == 8 && currentIndex == 0)) && !(nextIndex == 0 && currentIndex == 8)) {
            nextCardStart *= -1
            currentCardEnd *= -1
        }

        return (
            <div className='relative flex justify-center items-center w-screen h-screen'>
                {/* Current Card (going out) */}
                {isAnimating 
                    ? (
                        <motion.div 
                            className="absolute z-9 justify-center align-middle h-screen" 
                            transition={{duration: animationTime}}
                            initial={{x: 0, opacity: 1, filter: 'blur(0px)'}}
                            animate={{x: currentCardEnd, opacity: 0, filter: 'blur(5px)'} }
                            onAnimationComplete={onAnimationFinished}
                            >
                            <Card name={cardNames[currentIndex % 9]} />
                        </motion.div>
                    )
                    : (
                        <div 
                        className="absolute z-9 justify-center align-middle h-screen" 
                        >
                            <Card name={cardNames[currentIndex % 9]} />
                        </div>
                    )
                }   
                {/* Next Card (coming in)*/}
                {isAnimating ? 
                    (<motion.div className="absolute z-10 justify-center align-middle h-screen" 
                            initial={{x: nextCardStart, opacity: 0, filter: 'blur(5px)'}}
                            transition={{duration: animationTime}}
                            animate={{x:0, opacity: 1, filter: 'blur(0px)'}}
                            >
                            <Card name={cardNames[nextIndex % 9]}/>
                        </motion.div>
                    )
                    : (
                        <></>
                    )
                }
            </div>
        )
    }
}

export default CardSwitcher