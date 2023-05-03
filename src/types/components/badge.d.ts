/** A minified color palette for badge */
interface BadgeColor {
  /** Background color of the badge */
  background: string;
  /** Color of the text in the badge */
  text: string;
}

/** Badges used everywhere in the project */
interface BadgeProps {
  /** Label of the badge */
  label: string;
  /** Color value in HEX model */
  color: BadgeColor;
}
