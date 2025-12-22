

// const API_URL = 'http://127.0.0.1:9000/api/v1';

// const myAPI = axios.create({
//   baseURL: API_URL,
// });

// myAPI.get('/articles')
//   .then(function(response) {
//     // Handle successful response
//     console.log('Success!', response.data);
//     console.log('Status:', response.status);
//   })
//   .catch(function (error) {
//     console.log('=== ERROR DETAILS ===');
    
//     if (error.response) {
//       // Server responded with error status (4xx, 5xx)
//       console.log('Response Error:');
//       console.log('Status:', error.response.status);
//       console.log('Data:', error.response.data);
//       console.log('Headers:', error.response.headers);
//     } else if (error.request) {
//       // Request made but no response received (network issue)
//       console.log('Network Error - No response received:');
//       console.log('Request details:', error.request);
//       console.log('Status:', error.request.status); // This will be 0 for network errors
//     } else {
//       // Error in request setup
//       console.log('Request Setup Error:', error.message);
//     }
    
//     console.log('Config:', error.config);
//     console.log('Error Code:', error.code);
//   });


// Create a powerful pre-configured instance
// const secureApi = axios.create({
//   baseURL: 'https://api.mybank.com/v1',
//   timeout: 10000, // All requests with this instance will timeout after 10 seconds
//   headers: {
//     'Content-Type': 'application/json', // Set a default header
//     // Pre-set an authorization header with a token from local storage
//     'Authorization': `Bearer ${localStorage.getItem('userToken')}`
//   }
// });

// // Now every request made with `secureApi` is automatically:
// // - Sent to https://api.mybank.com/v1/...
// // - Has the correct Content-Type header
// // - Has the user's authentication token attached
// // - Will timeout after 10 seconds

// secureApi.get('/account'); // Easy and secure!

// Create a blob and object URL
const blob = new Blob(['test data'], { type: 'text/plain' });
const objectUrl = URL.createObjectURL(blob);

// Create FormData and append the blob
const formData = new FormData();
// formData.append('file', blob);
formData.append('file', objectUrl);
console.log(formData.get('file'));

// Now revoke the object URL
URL.revokeObjectURL(objectUrl);

// Check if the blob in FormData is still usable
console.log(formData.get('file')); // What happens?