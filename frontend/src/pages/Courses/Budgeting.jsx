import React, { useState } from "react";
import styles from "./Budgeting.module.css";
import content from "./budgetingContent.json";
import NavBar from "../../components/NavBar";
import BudgetImage from "../../images/budget.png"
const Budgeting = () => {
    const mainArticles = content.filter((item) => item.type === "article");
    const flashCards = content.filter((item) => item.type === "flashcard");
  
    return (
      <div className={styles.module}>
        <NavBar />
        <h1 className={styles.title}>Understanding the Budgeting</h1>
  
        {/* Article Content */}
        <div className={styles.articleSection}>
          {mainArticles.map((article, index) => (
            <div key={index} className={styles.article}>
              <div className={styles.articleCard}>
                <h2>{article.title}</h2>
                {article.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {/* {index === 0 && (
                  <div className={styles.scoreRanges}>
                    <h3>Categories To Budget:</h3>
                    <ul>
                      <li><span className={styles.scoreBadge}>Income</span>Salaries | Allowances | Freelance Work </li>
                      <li><span className={styles.scoreBadge}>Fair</span> 580-669</li>
                      <li><span className={styles.scoreBadge}>Good</span> 670-739</li>
                      <li><span className={styles.scoreBadge}>Very Good</span> 740-799</li>
                    </ul>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
  
        {/* Flashcard Content */}
        <h2 className={styles.subtitle}>Key Concepts</h2>
        <div className={styles.container}>
          {flashCards.map((section, index) => (
            <FlashCard 
              key={index} 
              front={section.front} 
              back={section.back}
              color={`card${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };
  
  const FlashCard = ({ front, back, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div
        className={`${styles.flashCard} ${isFlipped ? styles.flipped : ""} ${styles[color]}`}
        onClick={handleFlip}
      >
        <div className={styles.flashCardInner}>
          <div className={styles.flashCardFront}>
            <h3>{front}</h3>
            <div className={styles.flipHint}>Click to flip</div>
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
  
  export default Budgeting;
  
  
  
