// Test file for the Palindrome Checker
// This file demonstrates the core palindrome checking functionality

// Import the palindrome functions (if running in Node.js environment)
let isPalindrome, isPalindromeAlternative;

if (typeof require !== 'undefined') {
    const palindromeModule = require('./palindrome.js');
    isPalindrome = palindromeModule.isPalindrome;
    isPalindromeAlternative = palindromeModule.isPalindromeAlternative;
} else {
    // If running in browser, functions are already available globally
    isPalindrome = window.isPalindrome;
    isPalindromeAlternative = window.isPalindromeAlternative;
}

/**
 * Test function to demonstrate palindrome checking
 */
function runTests() {
    console.log('🔤 Palindrome Checker Tests\n');
    
    // Test cases
    const testCases = [
        // Simple palindromes
        'racecar',
        'level',
        'radar',
        'deed',
        'noon',
        
        // Single characters and empty strings
        'a',
        'A',
        '',
        
        // Phrases with spaces and punctuation
        'A man a plan a canal Panama',
        'Was it a car or a cat I saw?',
        'Never odd or even',
        'Madam, I\'m Adam',
        'Do geese see God?',
        'Able was I ere I saw Elba',
        
        // Numbers
        '12321',
        '1234321',
        
        // Non-palindromes
        'hello',
        'world',
        'JavaScript',
        'Palindrome',
        'This is not a palindrome',
        '12345'
    ];
    
    console.log('Testing palindrome function...\n');
    
    testCases.forEach((testCase, index) => {
        const result = isPalindrome(testCase);
        const status = result ? '✅' : '❌';
        const type = result ? 'PALINDROME' : 'NOT A PALINDROME';
        
        console.log(`${index + 1}. ${status} "${testCase}" → ${type}`);
        
        // Show the cleaned version for palindromes
        if (result) {
            const cleaned = testCase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            console.log(`   Cleaned: "${cleaned}"`);
        }
    });
    
    console.log('\n' + '='.repeat(50));
    console.log('Alternative method comparison:\n');
    
    // Compare both methods
    const comparisonTests = [
        'racecar',
        'A man a plan a canal Panama',
        'hello'
    ];
    
    comparisonTests.forEach(test => {
        const result1 = isPalindrome(test);
        const result2 = isPalindromeAlternative(test);
        const match = result1 === result2 ? '✅' : '❌';
        
        console.log(`${match} "${test}"`);
        console.log(`   Method 1: ${result1}`);
        console.log(`   Method 2: ${result2}\n`);
    });
}

/**
 * Performance test to compare both methods
 */
function performanceTest() {
    console.log('🚀 Performance Test\n');
    
    const testString = 'A man a plan a canal Panama'.repeat(1000); // Make it longer for testing
    
    // Test method 1
    const start1 = performance.now();
    for (let i = 0; i < 1000; i++) {
        isPalindrome(testString);
    }
    const end1 = performance.now();
    const time1 = end1 - start1;
    
    // Test method 2
    const start2 = performance.now();
    for (let i = 0; i < 1000; i++) {
        isPalindromeAlternative(testString);
    }
    const end2 = performance.now();
    const time2 = end2 - start2;
    
    console.log(`Method 1 (Character comparison): ${time1.toFixed(2)}ms`);
    console.log(`Method 2 (Built-in methods): ${time2.toFixed(2)}ms`);
    console.log(`Difference: ${Math.abs(time1 - time2).toFixed(2)}ms`);
    console.log(`Winner: ${time1 < time2 ? 'Method 1' : 'Method 2'}`);
}

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
    // Node.js environment
    console.log('Running in Node.js environment...\n');
    runTests();
    performanceTest();
} else {
    // Browser environment
    console.log('Palindrome Checker loaded in browser!');
    console.log('Open the console and run: runTests() or performanceTest()');
    
    // Make functions available globally for testing
    window.runTests = runTests;
    window.performanceTest = performanceTest;
}
