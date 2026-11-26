import React from "react";

interface BurakLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "cream" | "burgundy";
  subtitle?: string;
}

/** Burak wordmark: Art Nouveau style capitals with a thin ornamental rule */
export default function BurakLogo(props: BurakLogoProps) {
  const { size = "md", tone = "cream", subtitle } = props;

  return (
    <span className={`burak-logo burak-logo--${size} burak-logo--${tone}`}>
      <span className="burak-logo__word">BURAK</span>
      {subtitle ? (
        <span className="burak-logo__sub">
          <i className="burak-logo__rule" />
          {subtitle}
          <i className="burak-logo__rule" />
        </span>
      ) : null}
    </span>
  );
}
