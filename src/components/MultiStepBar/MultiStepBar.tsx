"use client";
import styles from "./MultiStepBar.module.scss";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import icon_check from "../../assets/icons/icon_check.svg";
import icon_step_back from "../../assets/icons/icon_step_back.svg";
import Image from "next/image";

const TOTAL_STEPS = 20;

export const MultiStepBar = () => {
  const [progress, setProgress] = useState(0);
  const params = useSearchParams();
  const stepNumber = params.get("q") || "";
  const router = useRouter();

  useEffect(() => {
    if (stepNumber) {
      setProgress((100 / TOTAL_STEPS) * parseInt(stepNumber) || TOTAL_STEPS);
    }
  }, [stepNumber]);

  const goBack = useCallback((step: string) => {
    router.push(`/quiz?q=${parseInt(step) - 1}`);
  }, []);

  const isFirstStep = () => stepNumber === "2";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {!isFirstStep() && (
        <Image
          className={styles.btn_back}
          src={icon_step_back}
          alt=""
          onClick={() => goBack(stepNumber)}
        />
      )}
      <div style={{ width: "100%", margin: "50px 0", position: "relative" }}>
        <div
          style={{
            transition: "all 0.5s ease-in-out",
            position: "absolute",
            width: `${progress}%`,
            background: "#5072F1",
            height: "3px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            transform: " translateY(-50%)",
          }}
        >
          <div className={[styles.circle, styles.circle_filled].join(" ")}>
            <Image src={icon_check} alt="" />
          </div>
          <div
            className={
              progress < 32
                ? styles.circle
                : [styles.circle, styles.circle_filled].join(" ")
            }
          >
            {progress > 32 && <Image src={icon_check} alt="" />}
          </div>
          <div
            className={
              progress < 63
                ? styles.circle
                : [styles.circle, styles.circle_filled].join(" ")
            }
          >
            {progress > 63 && <Image src={icon_check} alt="" />}
          </div>
          <div
            className={
              progress < 94
                ? styles.circle
                : [styles.circle, styles.circle_filled].join(" ")
            }
          >
            {progress > 94 && <Image src={icon_check} alt="" />}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            background: "#E4E9F9",
            height: "3px",
          }}
        ></div>
      </div>
    </div>
  );
};