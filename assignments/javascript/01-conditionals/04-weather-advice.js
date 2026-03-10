/**
 * 🌤️ TrailBuddy - The Hiking Weather App
 *
 * You're building a weather advisory feature for TrailBuddy, a popular
 * hiking app used by thousands of outdoor enthusiasts. Based on the
 * temperature (in Celsius) and whether it's raining, the app should
 * display helpful advice to hikers.
 *
 * Advisory Rules (check in this exact order):
 *   - temp >= 35              → "Too hot for hiking - stay indoors and hydrate"
 *   - temp >= 25 and no rain  → "Great weather for hiking - don't forget sunscreen"
 *   - temp >= 25 and raining  → "Warm but rainy - consider indoor activities"
 *   - temp >= 15 and no rain  → "Perfect hiking weather - enjoy the trails"
 *   - temp >= 15 and raining  → "Cool and rainy - bring waterproof gear if hiking"
 *   - temp >= 5 and no rain   → "Chilly - wear layers for your hike"
 *   - temp >= 5 and raining   → "Cold and wet - best to stay indoors"
 *   - temp < 5                → "Too cold - stay warm indoors"
 *
 * @param {number} temperature - Temperature in Celsius
 * @param {boolean} isRaining - Whether it's currently raining
 * @returns {string} The weather advisory message
 */
export function getWeatherAdvice(temperature, isRaining) {
  const temp = temperature;

  if (temp >= 35) {
    return "Too hot for hiking - stay indoors and hydrate";
  }

  if (temp >= 25 && !isRaining) {
    return "Great weather for hiking - don't forget sunscreen";
  }

  if (temp >= 25 && isRaining) {
    return "Warm but rainy - consider indoor activities";
  }

  if (temp >= 15 && !isRaining) {
    return "Perfect hiking weather - enjoy the trails";
  }

  if (temp >= 15 && isRaining) {
    return "Cool and rainy - bring waterproof gear if hiking";
  }

  if (temp >= 5 && !isRaining) {
    return "Chilly - wear layers for your hike";
  }

  if (temp >= 5 && isRaining) {
    return "Cold and wet - best to stay indoors";
  }

  return "Too cold - stay warm indoors";
}

