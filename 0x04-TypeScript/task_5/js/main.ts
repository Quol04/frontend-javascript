// Define MajorCredits and MinorCredits interfaces with branding
interface MajorCredits {
  credits: number;
  __brand: "major";
}

interface MinorCredits {
  credits: number;
  __brand: "minor";
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "major",
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "minor",
  };
}

// Example usage:
const major1: MajorCredits = { credits: 3, __brand: "major" };
const major2: MajorCredits = { credits: 4, __brand: "major" };
console.log("Sum of major credits:", sumMajorCredits(major1, major2));

const minor1: MinorCredits = { credits: 2, __brand: "minor" };
const minor2: MinorCredits = { credits: 1, __brand: "minor" };
console.log("Sum of minor credits:", sumMinorCredits(minor1, minor2));
