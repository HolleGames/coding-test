/**
 * Outage Util
 *
 * Create a utility program using Node.js (ts-node) which sends a GET request to the
 * health endpoint of three games on two different environments and logs to a text file
 * the duration of any outages. Use async/await where possible.
 *
 * If the the game is down, the health GET request will time out.
 *
 * See log.txt for example output.
 */

// Interval in MS to check health
const interval = 5000;

// Games to check health for
const games = ['fruits', 'wild-bells', 'holla'];

// Health endpoints
const endpoints = [
  ['staging', 'https://api.staging.hoellespiele.com/gameapi/game-{gamecode}/health'],
  ['europe-1', 'https://api.europe-1.hoelle.games/gameapi/game-{gamecode}/health'],
];
