import { populationData } from "./populationData";
import { MedalCount, olympicData } from "./olympicData";

interface CountryRatio {
  country: string;
  ratio: number;
}

function calculateMedalPoints(medals: MedalCount): number {
  return (medals.g || 0) * 3 + (medals.s || 0) * 2 + (medals.b || 0);
}

function getClosestPopulationYear(olympicYear: number): number {
  const populationYears = [2000, 2010, 2023];
  return populationYears.reduce((closest, year) =>
    Math.abs(year - olympicYear) < Math.abs(closest - olympicYear) ? year : closest,
  );
}

function getPopulationForYear(country: string, year: number): number {
  const populationIndex = Math.floor((year - 2000) / 10);
  return populationData[country][populationIndex];
}

function calculatePerformanceRatio(country: string): number {
  let totalMedalPoints = 0;
  let totalPopulation = 0;
  let olympicsCount = 0;

  Object.entries(olympicData).forEach(([year, data]) => {
    const numericYear = parseInt(year);
    if (data[country]) {
      totalMedalPoints += calculateMedalPoints(data[country]);
      const closestYear = getClosestPopulationYear(numericYear);
      totalPopulation += getPopulationForYear(country, closestYear);
      olympicsCount++;
    }
  });

  if (olympicsCount === 0 || !populationData[country]) {
    return 0; // Return 0 if the country didn't participate or we don't have population data
  }

  const averagePopulation = totalPopulation / olympicsCount;
  const averageMedalPoints = totalMedalPoints / olympicsCount;
  return averageMedalPoints / averagePopulation;
}

function rankCountries(): CountryRatio[] {
  const countryRatios: CountryRatio[] = Object.keys(populationData).map(country => ({
    country,
    ratio: calculatePerformanceRatio(country),
  }));

  return countryRatios.sort((a, b) => b.ratio - a.ratio);
}

// Main execution
const rankedCountries = rankCountries();
rankedCountries.filter(country => country.ratio > 0).forEach((country, index) => {
  console.log(`${index + 1}. ${country.country}: ${country.ratio.toFixed(6)}`);
});
