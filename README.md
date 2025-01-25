# 🔐 Advanced Password Generator

A secure and user-friendly password generator with multi-language support, designed to create strong and customizable passwords.

## Features
- Generate passwords with adjustable length (1–100 characters)
- Toggle uppercase, lowercase, numbers, and symbols
- Copy passwords to clipboard with one click
- Supports 9 languages: English, French, German, Hindi, Mandarin Chinese, Polish, Russian, Spanish, Ukrainian
- Responsive design for all devices
- Language preference saved via localStorage

## Live Demo
🚀 [Try it on GitHub Pages](https://ddpd.github.io/pass-gen)  
🌐 [Alternate Deployment](https://pass-gen.ddpd.dev)

## Usage
1. Select desired password length.  
2. Choose character types (at least one must be selected).  
3. Click "Generate Password" or adjust settings for automatic updates.  
4. Use "Copy Password" to save the result.  
5. Switch languages via the dropdown menu.  
#
![APS](src/img/icons/fsaAdvanced-Password-Generator.png)

## Installation

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/ddpd/pass-gen.git
   cd pass-gen
   ```

2. **Run a local web server**:  
   ⚠️ Important: The app requires a web server (not file:// protocol) due to browser security restrictions for loading JSON language files.

   Choose one of these methods:

   **Python 3**:  
   ```bash
   python3 -m http.server 8000
   ```
   Open [http://localhost:8000](http://localhost:8000) in your browser.

   **Node.js (http-server)**:  
   ```bash
   npm install -g http-server  # Install globally
   http-server
   ```
   Open the URL shown in the terminal.

   **PHP**:  
   ```bash
   php -S localhost:8000
   ```

3. **Use the app**:  
   The generator will now work correctly with all features.

## Contributing
🔓 Full contribution guidelines can be found in [CONTRIBUTING.md](CONTRIBUTING.md).

## License
Advanced Password Generator © 2023-2025
