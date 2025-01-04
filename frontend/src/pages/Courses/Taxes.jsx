import React, { useState } from "react";
import styles from "./Taxes.module.css";
import content from "./Taxes.json";
import NavBar from "../../components/NavBar"; // Import NavBar component

const Taxes = () => {
  const mainArticles = content.filter((item) => item.type === "article");
  const flashCards = content.filter((item) => item.type === "flashcard");
  const quizzes = content.filter((item) => item.type === "quiz");

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});

  const handleQuizAnswer = (questionId, selectedAnswer, correctAnswer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));
    setShowFeedback((prev) => ({
      ...prev,
      [questionId]: selectedAnswer === correctAnswer,
    }));
    setTimeout(() => {
      setShowFeedback((prev) => ({
        ...prev,
        [questionId]: false,
      }));
    }, 2000);
  };

  return (
    <div className={styles.module}>
      <NavBar /> {/* Render NavBar */}
      <h1 className={styles.title}>Understanding U.S. Taxes</h1>

      <div id="articles" className={styles.articleSection}>
        {mainArticles.map((article, index) => (
          <div key={index} className={styles.article}>
            <h2>{article.title}</h2>
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>

      <h2 id="quizzes" className={styles.subtitle}>
        Test Your Knowledge
      </h2>
      <div className={styles.quizSection}>
        {quizzes.map((quiz, quizIndex) => (
          <div key={quizIndex} className={styles.quizContainer}>
            <h3>{quiz.title}</h3>
            {quiz.questions.map((question) => (
              <div key={question.id} className={styles.quizCard}>
                <p>{question.question}</p>
                <div className={styles.quizOptions}>
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className={`${styles.quizButton} ${
                        quizAnswers[question.id] === optionIndex
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() =>
                        handleQuizAnswer(
                          question.id,
                          optionIndex,
                          question.correct
                        )
                      }
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {showFeedback[question.id] && (
                  <div className={styles.correctFeedback}>
                    {question.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <h2 id="flashcards" className={styles.subtitle}>
        Key Concepts
      </h2>
      <div className={styles.container}>
        {flashCards.map((section, index) => (
          <FlashCard
            key={index}
            front={section.front}
            back={section.back}
          />
        ))}
      </div>
    </div>
  );
};

const FlashCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.flashCard} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.flashCardInner}>
        <div className={styles.flashCardFront}>
          <h3>{front}</h3>
          <p className={styles.flipHint}>Click to flip</p>
        </div>
        <div className={styles.flashCardBack}>
          <ul>
            {back.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Taxes;
