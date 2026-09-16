
# MediBook - Medical Booking App

A responsive medical booking web application built with React.js.

## 📌 Project Overview

MediBook allows users to browse doctors, search for doctors, view doctor details, book appointments, and manage their appointments.

The application was developed as a React project with a focus on reusable components, API integration, form validation, state management, and responsive design.

## 🚀 Features

- Responsive medical booking website
- Home page
- Doctors listing
- Doctor search
- Doctor filtering
- Doctor details page
- Appointment booking
- My Appointments page
- Reschedule appointments
- Cancel appointments
- Form validation
- Loading states
- Error states
- Empty states
- Patient profile management
- 404 Not Found page
- Persistent appointment data using Zustand

## 🛠️ Technologies Used

- React.js
- Vite
- React Router DOM
- Axios
- Zustand
- React Hook Form
- Tailwind CSS
- JavaScript
- REST API

## 📂 Project Structure


medical-booking-app/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── doctorApi.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── DoctorCard.jsx
│   │
│   ├── data/
│   │   └── doctors.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Doctors.jsx
│   │   ├── DoctorDetails.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── MyAppointments.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   │
│   ├── store/
│   │   └── appointmentStore.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
API

Doctor data is retrieved using Axios from a REST API.

API endpoint:

https://dummyjson.com/users

The API data is mapped into doctor information used throughout the application.

📅 Appointment Management

Users can:

Select a doctor.
Open the doctor's profile.
Book an appointment.
View booked appointments.
Reschedule an appointment.
Cancel an appointment.

Appointment state is managed using Zustand and persisted in the browser.

📝 Form Validation

Appointment forms are implemented using React Hook Form.

Validation includes:

Required patient name
Required email
Valid email format
Required phone number
Required appointment date
Required appointment time
📱 Responsive Design

The application is responsive and designed to work across:

Desktop
Tablet
Mobile

The navigation menu also includes a mobile-friendly responsive menu.

⚡ Getting Started
1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL
2. Navigate to the project
cd medical-booking-app
3. Install dependencies
npm install
4. Start the development server
npm run dev

Then open the local URL shown in the terminal.

🏗️ Build for Production

To create a production build:

npm run build
👨‍💻 Author

Retaj Magdy

Frontend Developer


🤖 AI Usage

AI tools were used during development as a development assistant for:

Understanding React concepts
Debugging errors
Improving component structure
Generating and reviewing code
Improving UI/UX
Understanding API integration
Form validation
State management

The project was implemented, tested, and modified during development based on the project requirements.

📄 Project Requirements

This project was developed as part of the ITI React Summer Training project.

The application focuses on:

React.js
API integration using Axios
Routing
Search and Filtering
Appointment CRUD operations
React Hook Form
Form Validation
Zustand
Loading, Error, and Empty states
Responsive Design