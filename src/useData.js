// useData.js
import { ref } from 'vue';
import axios from 'axios';

const outputData = ref('');

const postData = async (url, article) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/analyze', {
      url: url,
      article: article
    });
    outputData.value = response.data; // Update outputData with response data
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // Propagate the error to the caller
  }
};

export { outputData, postData };
