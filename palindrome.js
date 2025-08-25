// Palindrome Checker Application
// This file contains the core palindrome checking logic and UI interactions

/**
 * Checks if a given text is a palindrome
 * A palindrome reads the same forwards and backwards (ignoring spaces, punctuation, and case)
 * 
 * @param {string} text - The text to check
 * @returns {boolean} - True if the text is a palindrome, false otherwise
 */
function isPalindrome(text) {
    // Step 1: Clean the input text
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Step 2: Check if cleaned text is empty or single character
    if (cleanedText.length <= 1) {
        return true;
    }
    
    // Step 3: Compare characters from start and end moving inward
    const length = cleanedText.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (cleanedText[i] !== cleanedText[length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

/**
 * Alternative palindrome checking method using built-in JavaScript methods
 * This method is more concise but may be less readable for beginners
 * 
 * @param {string} text - The text to check
 * @returns {boolean} - True if the text is a palindrome, false otherwise
 */
function isPalindromeAlternative(text) {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedText === cleanedText.split('').reverse().join('');
}

/**
 * Main function to check palindrome and display results
 * Handles user input, processes the text, and shows the result
 */
function checkPalindrome() {
    // Get the input text
    const inputElement = document.getElementById('textInput');
    const text = inputElement.value.trim();
    
    // Check if input is empty
    if (!text) {
        showError('Please enter some text to check.');
        return;
    }
    
    // Check if it's a palindrome
    const isPal = isPalindrome(text);
    
    // Display the result
    displayResult(text, isPal);
}

/**
 * Displays the palindrome check result with visual feedback
 * 
 * @param {string} originalText - The original text that was checked
 * @param {boolean} isPalindrome - Whether the text is a palindrome
 */
function displayResult(originalText, isPalindrome) {
    const resultSection = document.getElementById('resultSection');
    const resultCard = document.getElementById('resultCard');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');
    const palindromeDisplay = document.getElementById('palindromeDisplay');
    
    // Show the result section
    resultSection.style.display = 'block';
    
    // Set the result content
    if (isPalindrome) {
        resultTitle.textContent = '✅ It\'s a Palindrome!';
        resultText.textContent = `"${originalText}" reads the same forwards and backwards.`;
        resultCard.className = 'result-card palindrome';
        
        // Show the cleaned palindrome text
        const cleanedText = originalText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        palindromeDisplay.textContent = cleanedText;
    } else {
        resultTitle.textContent = '❌ Not a Palindrome';
        resultText.textContent = `"${originalText}" does not read the same forwards and backwards.`;
        resultCard.className = 'result-card not-palindrome';
        
        // Show what it would look like reversed
        const cleanedText = originalText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reversedText = cleanedText.split('').reverse().join('');
        palindromeDisplay.textContent = `Original: ${cleanedText}\nReversed: ${reversedText}`;
    }
    
    // Scroll to the result
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Shows an error message to the user
 * 
 * @param {string} message - The error message to display
 */
function showError(message) {
    // Create a temporary error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background: #f8d7da;
        color: #721c24;
        padding: 10px 15px;
        border-radius: 8px;
        margin-top: 10px;
        border: 1px solid #f5c6cb;
        animation: fadeIn 0.3s ease-out;
    `;
    
    // Insert after the input section
    const inputSection = document.querySelector('.input-section');
    inputSection.appendChild(errorDiv);
    
    // Remove the error message after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

/**
 * Clears the input field and hides any results
 */
function clearInput() {
    const inputElement = document.getElementById('textInput');
    const resultSection = document.getElementById('resultSection');
    
    // Clear the input
    inputElement.value = '';
    
    // Hide the result section
    resultSection.style.display = 'none';
    
    // Focus back to the input
    inputElement.focus();
}

/**
 * Fills the input field with an example text
 * 
 * @param {string} exampleText - The example text to use
 */
function useExample(exampleText) {
    const inputElement = document.getElementById('textInput');
    inputElement.value = exampleText;
    inputElement.focus();
}

/**
 * Handles Enter key press in the input field
 * Triggers palindrome check when Enter is pressed
 */
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add Enter key listener to input field
    const inputElement = document.getElementById('textInput');
    inputElement.addEventListener('keypress', handleEnterKey);
    
    // Focus on input field when page loads
    inputElement.focus();
    
    // Add some fun interactive effects
    addInteractiveEffects();
});

/**
 * Adds interactive effects to make the app more engaging
 */
function addInteractiveEffects() {
    // Add click effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a ripple effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add hover effect to example buttons
    const exampleButtons = document.querySelectorAll('.example-btn');
    exampleButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Export functions for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isPalindrome,
        isPalindromeAlternative
    };
}
