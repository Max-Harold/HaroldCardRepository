import React, { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import CardSwitcher from './components/CardSwitcher'
import {motion} from 'framer-motion'
import ArrowButtons from './components/ArrowButtons'
import AnimatedSquares from './components/AnimatedSquares'
import SwipeableDemo from './components/SomeComponent'
import { SwipeableHandlers, useSwipeable } from 'react-swipeable'
import { Swipeable } from './components/Swipeable'

interface AppState {
  currentIndex: number;
  nextIndex: number;
  isAnimating: boolean;
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

class App extends Component<{}, AppState> {

  state = {currentIndex: 0, nextIndex: 1, isAnimating: false}

  onAnimationFinished = () => {
    if (this.state.isAnimating) {
      this.setState((currentState) => {
        const {nextIndex} = currentState
        return {
          isAnimating: false,
          currentIndex: nextIndex,
          nextIndex: nextIndex
        }
      })  
    }
  }

  onLeft = () => {
    if (!(this.state.isAnimating)) {
      this.setState((currentState) => {
        const {currentIndex} = currentState
        return {
          nextIndex: mod(currentIndex - 1, 9) ,
          isAnimating: true
        }
      })
    }
  }

  onRight = () => {
    if (!(this.state.isAnimating)) {
      this.setState((currentState) => {
        const {currentIndex} = currentState
        return {
          nextIndex: mod(currentIndex + 1, 9),
          isAnimating: true
        }
      })  
    }
  }

  handleSwipe = (direction: string) => {

  }

  render() {
    const {currentIndex, nextIndex, isAnimating} = this.state
    console.log("current index is ",this.state.currentIndex)
    console.log("next index is ",this.state.nextIndex)
    return (
      <Swipeable 
        onLeftSwipe={this.onRight}
        onRightSwipe={this.onLeft}>
        <ArrowButtons onLeft={this.onLeft} onRight={this.onRight} />
        <CardSwitcher currentIndex={currentIndex} nextIndex={nextIndex} isAnimating={isAnimating} onAnimationFinished={this.onAnimationFinished}/>
      </Swipeable>
    )
  }
}

export default App
