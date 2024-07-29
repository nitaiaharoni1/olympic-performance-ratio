# Olympic Performance Ratio Calculator

This project calculates and ranks the performance ratios of countries in the Olympics relative to their population sizes. The main goal is to highlight countries that perform exceptionally well in the Olympics given their population constraints.

## Introduction

The Olympic Performance Ratio Calculator provides a unique perspective on Olympic achievements by taking into account the population of each country. Smaller nations that perform exceptionally well despite their limited populations are highlighted, demonstrating their efficiency and excellence in sports.

## Data Sources

- **Population Data**: Population data is sourced from Wikipedia for the years 2000, 2010, and 2023.
- **Olympic Data**: Medal counts for various countries across multiple Olympic games.

## Project Structure

```
.
├── populationData.ts
├── olympicData.ts
├── index.ts
├── README.md
```

- `populationData.ts`: Contains the population data for various countries.
- `olympicData.ts`: Contains the medal counts for various countries across different Olympic years.
- `index.ts`: Main execution file that calculates and ranks the performance ratios.

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the necessary dependencies:
   ```sh
   npm install
   ```

## Usage

To calculate and display the Olympic performance ratios:

1. Run the main script:
   ```sh
   npm start
   ```

2. The output will display the ranked list of countries with their performance ratios.

## How It Works

### Medal Points Calculation

Medals are assigned points as follows:
- Gold: 3 points
- Silver: 2 points
- Bronze: 1 point

### Population Year Matching

For each Olympic year, the closest census year from the population data (2000, 2010, 2023) is selected to estimate the population.

### Performance Ratio Calculation

1. **Total Medal Points**: Sum of points from all medals won by a country across different Olympic games.
2. **Total Population**: Sum of populations for each Olympic year a country participated in, using the closest census year.
3. **Average Calculation**: Average population and average medal points are calculated.
4. **Performance Ratio**: Average medal points divided by the average population, giving a normalized score that highlights efficiency and performance relative to size.

### Ranking

Countries are then ranked based on their performance ratios in descending order.

## Example Output

```
1. Grenada: 18.182000
2. Bahamas: 12.919000
3. Jamaica: 7.332000
4. New Zealand: 5.168000
5. Iceland: 4.839000
6. Fiji: 4.023000
7. Slovenia: 3.849000
8. Australia: 3.808000
9. Barbados: 3.704000
10. Hungary: 3.494000
...
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.