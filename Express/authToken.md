# Authentication Tokens in API Requests

An authentication token, also known as a bearer token or access token, is a piece of data used to authenticate and authorize requests to an API (Application Programming Interface). It serves as a credential that proves the identity of the requesting client.

## Overview

Authentication tokens are issued by an authentication server or identity provider after successful user authentication. The token is then included in subsequent API requests to authenticate the client.

Here's a general flow of how authentication tokens are used in API requests:

1. User Authentication: The client sends a request to the authentication server with valid credentials.
2. Token Issuance: If the credentials are valid, the authentication server generates an authentication token (e.g., JWT).
3. Token Storage: The client securely stores the authentication token.
4. API Requests: The client includes the authentication token in the request header.
5. Token Verification: The API server verifies the authenticity, integrity, and expiration of the token.
6. Access Authorization: If the token is valid, the API server identifies the user and determines access permissions.

By using authentication tokens, API requests can be securely authenticated without sending sensitive credentials with each request.

## Example Usage

```javascript
// Example API endpoint
const API_URL = 'https://api.example.com';

// Function to make an authenticated API request
async function makeAuthenticatedRequest(endpoint, token) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      // Process the response data
      console.log('Response:', data);
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example usage
const authenticationToken = 'abcde12345'; // Replace with a valid authentication token
const apiEndpoint = 'users/123'; // Example API endpoint

makeAuthenticatedRequest(apiEndpoint, authenticationToken);
