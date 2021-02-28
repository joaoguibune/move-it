import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export interface currentLevel {
  xpStart: number;
  xpFinish: number;
  currentXp: number;
}

type xpProps = {
  level: currentLevel;
};

export function ExperienceBar({ level }: xpProps) {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>{level.xpStart} xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
