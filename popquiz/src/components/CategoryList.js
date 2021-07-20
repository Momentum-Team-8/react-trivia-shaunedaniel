import React, { useState } from 'react'
import he from 'he'

export const AnswerChoices = ({ answers, commitAnswer, setScore, score }) => {
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [shuffled, setShuffled] = useState([])
  const [choice, setChoice] = useState(null)
  const { correctAnswer, incorrectAnswers } = answers

  const allAnswers = [correctAnswer, ...incorrectAnswers]

  function shuffle (quest) {
    let currentIndex = quest.length; let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;
      [quest[currentIndex], quest[randomIndex]] = [
        quest[randomIndex], quest[currentIndex]]
    }
    return quest
  }

  if (shuffled.length === 0) {
    const shuffledAnswers = shuffle(allAnswers)
    setShuffled(shuffledAnswers)
  }

  const handleClick = (answer) => {
    setAnswered(true)
    setChoice(answer)
    if (correctAnswer === answer) {
      setCorrect(true)
      setScore(score += 1)
    }
    commitAnswer()
  }

  if (answered && correct) {
    return (
      shuffled.map((item) => {
        if (item === choice) {
          return (
            <button
              key={item}
              class='answer-correct'
            >
              {he.decode(item)}
            </button>
          )
        } else {
          return (
            <button
              key={item}
              class='answer'
            >
              {he.decode(item)}
            </button>
          )
        }
      })
    )
  } else if (answered && correct === false) {
    return (
      shuffled.map((item) => {
        if (item === choice) {
          return (
            <button
              key={item}
              class='answer-incorrect'
            >
              {he.decode(item)}
            </button>
          )
        } else if (item === correctAnswer) {
          return (
            <button
              key={item}
              class='answer-correct'
            >
              {he.decode(item)}
            </button>
          )
        } else {
          return (
            <button
              key={item}
              class='answer'
            >
              {he.decode(item)}
            </button>
          )
        }
      })
    )
  } else {
    return shuffled.map((item) => {
      return (
        <button
          key={item}
          class='answer'
          onClick={() => {
            handleClick(he.decode(item))
          }}
        >
          {he.decode(item)}
        </button>
      )
    })
  }
}
