<h1 align="center">🛍 E-Commerce Admin Dashboard</h1>
<p align="center">
  A Full-Stack E-Commerce Management System  
  <br/>
  Built with <strong>Laravel</strong>, <strong>React</strong>, and <strong>TypeScript</strong>
</p>

---

## 🧠 About The Project

*E-Commerce Admin Dashboard* is a comprehensive platform designed to manage products, orders, customers, and analytics for an online store.  
This full-stack application combines the robustness of Laravel for the backend with the flexibility of React and TypeScript for the frontend, providing a seamless and efficient user experience.

---

## 🚀 Features

- 🛒 *Product Management*: Add, edit, delete, and categorize products with images and descriptions.
- 📦 *Order Management*: View, process, and update order statuses.
- 👥 *Customer Management*: Manage customer information and order history.
- 📊 *Analytics Dashboard*: Visualize sales data, revenue, and customer behavior.
- 🔐 *Authentication & Authorization*: Secure login system with role-based access control.
- 🌐 *Responsive Design*: Optimized for desktops, tablets, and mobile devices.
- 🔄 *Real-Time Updates*: Live notifications and updates using WebSockets.
- 🗂 *Inventory Tracking*: Monitor stock levels and receive low-stock alerts.
- 🛠 *Settings Management*: Configure store settings, payment options, and more.

---

## 🛠 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/-Laravel-FF2D20?style=flat&logo=laravel&logoColor=white" />
  <img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/-Vite-646CFF?style=flat&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/-JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white" />
</p>

---

## 🖥 Preview

<!-- Add screenshots when available -->
![Dashboard Screenshot](https://github.com/moien2484/ecommerce-dashboard-laravel-react/blob/main/Apex_1746120346624.png?raw=true)

---

## ⚙ Installation

### Backend (Laravel)

```bash
# 1. Clone the repository
git clone https://github.com/moien2484/ecommerce-dashboard-laravel-react.git

# 2. Navigate into the backend folder
cd ecommerce-dashboard-laravel-react/backend

# 3. Install PHP dependencies
composer install

# 4. Copy .env file and generate app key
cp .env.example .env
php artisan key:generate

# 5. Configure your database in the .env file

# 6. Run migrations and seeders
php artisan migrate --seed

# 7. Start the Laravel development server
php artisan serve
