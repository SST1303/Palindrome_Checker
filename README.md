# Palindrome_Checker
🔤 Palindrome Checker

A beautiful, interactive web application that checks whether text is a palindrome. Built with HTML, CSS, and JavaScript.

## ✨ Features

- **Interactive UI**: Modern, responsive design with smooth animations
- **Smart Text Processing**: Automatically removes spaces, punctuation, and ignores case
- **Multiple Examples**: Pre-loaded examples to test the functionality
- **Visual Feedback**: Clear results with color-coded success/error states
- **Keyboard Support**: Press Enter to check palindromes
- **Mobile Responsive**: Works perfectly on all device sizes

## 🚀 How to Use

1. **Open the Application**: Simply open `index.html` in your web browser
2. **Enter Text**: Type or paste any text you want to check
3. **Check Palindrome**: Click "Check Palindrome" or press Enter
4. **View Results**: See whether your text is a palindrome or not
5. **Try Examples**: Click on example buttons to test with famous palindromes

## 🎯 What is a Palindrome?

A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

**Examples:**
- `racecar` → reads the same forwards and backwards
- `A man a plan a canal Panama` → famous palindrome sentence
- `Was it a car or a cat I saw?` → another classic example

## 🛠️ Technical Implementation

### Core Algorithm

The palindrome checker uses a simple but efficient approach:

1. **Text Cleaning**: Removes all non-alphanumeric characters and converts to lowercase
2. **Character Comparison**: Compares characters from start and end, moving inward
3. **Result**: Returns true if all characters match, false otherwise

### Code Structure

- **`index.html`**: Main HTML structure with semantic markup
- **`styles.css`**: Modern CSS with animations, gradients, and responsive design
- **`palindrome.js`**: Core logic and interactive functionality

### Functions

- `isPalindrome(text)`: Main palindrome checking function
- `isPalindromeAlternative(text)`: Alternative implementation using built-in methods
- `checkPalindrome()`: Main UI function that handles user input
- `displayResult()`: Shows results with visual feedback
- `useExample()`: Loads example text for testing

## 🎨 Design Features

- **Gradient Background**: Beautiful purple-blue gradient
- **Smooth Animations**: Fade-in effects and hover animations
- **Color-Coded Results**: Green for palindromes, red for non-palindromes
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Responsive Layout**: Adapts to different screen sizes

## 🌟 Example Palindromes to Try

- `racecar`
- `A man a plan a canal Panama`
- `Was it a car or a cat I saw?`
- `Never odd or even`
- `Madam, I'm Adam`
- `Do geese see God?`
- `Able was I ere I saw Elba`

## 🔧 Customization

You can easily customize the application by:

- **Adding More Examples**: Edit the example buttons in `index.html`
- **Changing Colors**: Modify the CSS variables in `styles.css`
- **Adding Features**: Extend the JavaScript functionality in `palindrome.js`

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start checking palindromes!

No build process or dependencies required - it's pure HTML, CSS, and JavaScript.

## 📝 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

Enjoy checking palindromes! 🎉
