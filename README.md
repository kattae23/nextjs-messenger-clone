# Messenger Clone

This project is a clone of Messenger, a popular messaging application, built from scratch using Next.js. It utilizes the Pusher API for real-time conversation updates and NextAuth for authentication and authorization.

## Live Demo



## Features

- User registration and authentication with NextAuth.
- Real-time conversation updates using Pusher.
- User-to-user messaging functionality.
- Chat history and message synchronization.
- Responsive design for optimal viewing on different devices.

## Technologies Used

- Next.js: A React framework for building server-side rendered and static websites.
- NextAuth: An authentication library for Next.js applications.
- Pusher API: A real-time communication platform for building web and mobile applications.
- React: A JavaScript library for building user interfaces.
- HTML5 and CSS3: Standard web technologies for structuring and styling the application.

## Prerequisites

To run this project locally, you need to have the following installed on your machine:

- Node.js: Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org).
- npm: npm is the package manager for JavaScript. It is typically installed along with Node.js.

## Getting Started

Follow the steps below to get a local copy of the project up and running:

1. Clone the repository:
   - ```bash
     git clone https://github.com/your-username/messenger-clone.git
     ```

2. Navigate to the project directory:
   - ```bash
     cd messenger-clone
     ```

3. Install the dependencies:
   - ```bash
     pnpm install
     ```

4. Configure environment variables:
   - Rename the `.env.example` file to `.env`.
   - Update the necessary configuration variables in the `.env` file. For example, you will need to provide your Pusher API credentials.

5. Run the development server:
   - ```bash
     pnpm run dev
     ```

6. Open your browser and visit `http://localhost:3000` to see the application.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes in your branch.
4. Commit your changes, providing a descriptive commit message.
5. Push your branch to your forked repository.
6. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to modify and distribute the code as per the license terms.

## Acknowledgments

- This project was inspired by the functionalities of Messenger, a messaging application developed by Facebook.
- Thanks to the Next.js, NextAuth, and Pusher teams for providing the tools and APIs necessary for building this application.
