# FoodHive Full-Stack Next.js, Tailwindcss, Farmer-motion, Redux, PostgreSQL, Prisma ORM, Strapi.

## Project Overview

This is a food delivery web application built using Next.js. The app provides users with an intuitive interface for ordering food from a variety of restaurants. It incorporates TailwindCSS for styling, Framer Motion for animations, Redux for state management, Prisma for database ORM, and Stripe for payment processing.

## Key Features

1. **User Authentication**

   - Sign up and log in functionality using JWT.
   - Securely manage user sessions.

2. **Restaurant Listings**

   - Display a list of restaurants.
   - Filter and search functionality for cuisines, price ranges, and ratings.

3. **Menu and Ordering System**

   - Users can browse restaurant menus.
   - Add items to a dynamic shopping cart managed by Redux.

4. **Payment Integration**

   - Checkout process integrates with Stripe for secure payments.

5. **Order Tracking**

   - Users can view order history and track active orders in real time.

6. **Admin Panel**
   - Manage restaurants, menus, and orders.
   - Role-based access for admins.

## Tech Stack

- **Frontend:** Next.js, TailwindCSS, Framer Motion
- **State Management:** Redux Toolkit
- **Backend:** Next.js API Routes, Prisma (PostgreSQL database)
- **Payment Processing:** Stripe

### Desgin
## System Architecture
![system arch drawio](https://github.com/user-attachments/assets/a28ef6e6-f12c-475b-82cb-b475e01636cb)
## use case Digram
![usecase digram drawio](https://github.com/user-attachments/assets/5de4965b-41a4-4ee7-b0e0-a86077426517)
## Sequence Diagram 
![sqance digram drawio](https://github.com/user-attachments/assets/988bc34b-4219-4702-a4d0-6d3915969ebb)
## class Diagram
![class digram drawio](https://github.com/user-attachments/assets/e0a414ee-a856-426e-af6e-770e051a633c)
 

### Impelementation
## Project Structure

```plaintext
/components
/features
/pages
  /api
/styles
/utils
prisma/schema.prisma
```

## Example Schema (Prisma)

```javascript
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.restaurant.create({
    data: {
      name: "Example Restaurant",
      description: "Best sushi in town",
      cuisine: "Japanese",
      location: "New York, NY",
      menuItems: {
        create: [
          {
            name: "California Roll",
            price: 12.99,
            description: "Crab, avocado, and cucumber",
          },
          {
            name: "Spicy Tuna Roll",
            price: 14.99,
            description: "Tuna, spicy mayo, and cucumber",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
```

## Key Pages

1. **Homepage**: Highlights restaurants and popular dishes.
2. **Restaurant Details**: Lists menu items and provides ordering functionality.
3. **Cart**: Displays selected items with real-time price updates.
4. **Checkout**: Secure Stripe payment integration.
5. **Order History**: User-specific order history and tracking.
6. **Admin Dashboard**: Role-based restaurant and menu management.

## Key Animations (Framer Motion)

- Smooth page transitions.
- Animated modals for cart and order confirmation.
- Button hover and click effects.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables for Stripe and database connections.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Access the app at http://localhost:3000.

## Future Enhancements

- AI-based personalized recommendations.
- Real-time delivery tracking.
- Multi-language and multi-currency support.

## Contribution Guidelines

1. Fork the repository and create a feature branch.
2. Follow the existing code style and add comments.
3. Submit a pull request for review.

## License

Ahmed Sami License
