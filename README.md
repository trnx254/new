# Deal Checker

Deal Checker is an innovative web application designed to simplify the online shopping experience for users in India. By aggregating product information from multiple e-commerce platforms, Deal Checker empowers users to compare prices, delivery options, and product details in real-time, all in one convenient location.

## Features

-   **Real-Time Data**: Get up-to-date product information from various online retailers.
-   **Dynamic Search**: Easily search for products and receive comprehensive results from across the web.
-   **Price Comparison**: Compare prices and delivery details from different retailers to make informed purchasing decisions.
-   **Personalization**: Create accounts, save favorite products, and receive personalized recommendations.
-   **Seamless Integration**: Effortlessly integrate with popular e-commerce websites for a hassle-free shopping experience.

## Installation

To run Deal Checker locally, follow these steps:

1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/chandanPradhan09/College-Project-Minor.git
    ```
2. Navigate to the project directory.
    ```bash
    cd College-Project-Minor
    ```
3. Install dependencies.
    ```bash
    npm install
    ```
4. Create a .env.local file in the root directory and add the following environment variables:

    ```plaintext
    TOKEN_SECRET=your_jwt_secret
    MONGO_URI=your_mongo_atlas_url
    EMAIL_USER=your_email_id
    EMAIL_PASS=your_email_password
    DOMAIN=your_app_link_after_deployment

    REDIS_URI=your_redis_url
    NAME=your_name
    DESCRIPTION=your_description
    ```

    - Replace the placeholder values with your actual credentials.
    - Replace the image file `img.jpg` in the `public` directory with your desired image.

5. Run the development server.
    ```bash
    npm run dev
    ```
    - Open your browser and navigate to http://localhost:3000 to access Deal Checker.

## About




Deal Checker was created by Chandan Pradhan, a passionate developer dedicated to simplifying the online shopping experience. With a focus on user-centric design and seamless integration, Deal Checker aims to revolutionize the way users shop online in India.

For more information, visit [Deal Checker Live Deployment.](https://deal-checker.vercel.app)

---

**Disclaimer:** Deal Checker is not affiliated with any of the e-commerce platforms mentioned. All product information provided is sourced from publicly available data on the internet.
