# Express.js Route Handler Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.  Specifically, the provided code lacks proper handling for cases where the user ID is not a valid number.  This can lead to unexpected behavior, crashes, or security vulnerabilities.

## Bug

The `bug.js` file contains the flawed code. The route handler attempts to parse the `userId` as an integer using `parseInt()`, but doesn't handle potential errors if the input is not a valid integer.  This can result in exceptions or unexpected results.

## Solution

The `bugSolution.js` file provides a corrected version of the code with error handling. It uses a `try...catch` block to gracefully handle the potential `NaN` (Not a Number) error resulting from `parseInt()` if a non-numeric ID is provided.  It also includes a more comprehensive error response to the client.

## How to Run

1. Clone this repository.
2. Run `npm install express` to install the required dependency.
3. Run `node bug.js` (to see the buggy behavior) and `node bugSolution.js` (to see the corrected behavior).