# Anpago.co.uk - Intelligent Automation Solutions

---

## 👋 Welcome!

This repository hosts the source code for **Anpago.co.uk**, a personal business website dedicated to **Intelligent Automation**. The site showcases solutions for automating mundane tasks to help businesses and individuals reclaim their time.

---

## 🚀 About This Site

* **Purpose:** To showcase automation projects, explain the mission of Anpago, and provide a channel for potential clients to get in touch.
* **Technologies Used:**
    * **HTML5:** For semantic structure (including new `section` elements for Projects).
    * **CSS3:** For the dark-themed, glassmorphism design and responsive grid layouts.
    * **JavaScript:** For the mobile menu toggle and smooth scrolling.
    * **Web3Forms:** For the serverless contact form backend (no server required).
    * **GitHub Pages:** For fast, free hosting.

---

## 🔗 Live Site

You can visit the live website here: **[https://anpago.co.uk](https://anpago.co.uk)**

---

## 🛠️ Development & Configuration

### Local Setup
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/andygowrley/andygowrley.github.io.git
    cd andygowrley.github.io
    ```
2.  **Run locally:**
    You can simply open `index.html` in your browser, or run a simple local server:
    ```bash
    python3 -m http.server
    ```

### Contact Form Configuration
The contact form uses **Web3Forms** to send emails directly to `anpago@pm.me` without requiring a backend.

*   **Access Key:** The form is configured with a specific Access Key in `index.html`.
*   **To Update the Email:** If you need to change the recipient email in the future:
    1.  Go to [Web3Forms](https://web3forms.com/).
    2.  Enter the new email address to generate a new Access Key.
    3.  Update the `value` attribute of the `access_key` input in `index.html`.

---

## 📂 Project Structure

*   `index.html`: Main landing page containing Home, About, Projects, and Contact sections.
*   `style.css`: Contains all styles, including the dark theme variables and responsive media queries.
*   `script.js`: Handles the mobile navigation toggle and scroll animations.
*   `favicon.svg`: Custom site icon.

---

## 🤝 Connect

To prevent spam, direct email addresses and social links are hidden. Please use the **Contact Form** on the website to get in touch regarding collaborations or automation challenges.

---

## © License

This project is open source and available under the [MIT License](LICENSE).
