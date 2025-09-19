# Elisha Global Services - Comprehensive Logistics Web Application

A modern, responsive web application for comprehensive logistics and travel services connecting Nigeria and Portugal. Built with Next.js, TypeScript, and featuring a sleek UI inspired by modern design principles.

## 🚀 Features

### **Modern UI/UX**
- **Hyperspeed Background**: Animated background using custom Three.js implementation
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Best-in-Class Dark/Light Mode**: Smooth transitions with system preference detection
- **Framer Motion Animations**: Smooth transitions and micro-interactions
- **Color Scheme**: Primary Yellow (#FFC107), Secondary Red (#FF0000), with adaptive dark mode

### **Comprehensive Services**
- Airport Drop and Pickup
- Flight Tickets
- Broker Services
- Forex Services
- Documents Processing
- Offshore Payment Assistant
- Vacation Packages
- Delivery Service to Portugal and Other EU Countries
- Hotel Reservations
- Estate Agent Services
- Logistics Services
- Passport Application
- Police Character Processing
- Study Abroad Assistant
- Visa Application

### **Authentication & Security**
- MERN-style JWT authentication with Argon2 password hashing
- Role-based access control (User/Admin)
- Secure session management
- Protected routes and API endpoints

### **Dashboard Features**
- **User Dashboard**: Order overview, shipment tracking, profile management
- **Admin Dashboard**: User management, order management, analytics, reports
- **Rich Visualizations**: Chart.js integration for data visualization
- **Real-time Updates**: Live order status tracking

### **Advanced Features**
- **Image Uploads**: Cloudinary integration for package documentation
- **PDF Generation**: Professional order receipts and reports
- **Email Notifications**: Nodemailer integration for order confirmations
- **Multi-location Support**: Lagos, Abuja (Nigeria) and Lisbon (Portugal)
- **Carrier Schedule**: Monday and Wednesday pickups, 9AM-6PM working hours

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Chart.js with React Chart.js 2
- **3D Effects**: Three.js with postprocessing
- **Background**: Custom Hyperspeed background implementation

### **Backend**
- **API**: Next.js API Routes with Express-style handling
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with Argon2 password hashing
- **File Upload**: Multer with Cloudinary storage
- **Email**: Nodemailer for notifications
- **Validation**: TypeScript strict mode with runtime validation

### **Dependencies**
\`\`\`json
{
  "dependencies": {
    "@react-bits/hyperspeed-background": "^1.0.0",
    "argon2": "^0.31.2",
    "axios": "^1.6.2",
    "chart.js": "^4.4.0",
    "cloudinary": "^1.41.0",
    "framer-motion": "^10.16.16",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.3",
    "multer": "^1.4.5-lts.1",
    "next": "14.0.4",
    "nodemailer": "^6.9.7",
    "postprocessing": "^6.34.2",
    "react-chartjs-2": "^5.2.0",
    "three": "^0.158.0"
  }
}
\`\`\`

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd elisha-dropshipping-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   # MongoDB
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/elisha-global

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Email (Nodemailer)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password

   # JWT
   JWT_SECRET=your_super_secret_jwt_key_here

   # Next.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌍 Service Locations

- **Lagos, Nigeria** 🇳🇬
- **Abuja, Nigeria** 🇳🇬  
- **Lisbon, Portugal** 🇵🇹

## 📅 Working Schedule

- **Office Hours**: Monday-Friday, 9AM-6PM WAT
- **Pickup Schedule**: Mondays and Wednesdays from all locations
- **Airport Transfers**: Available 24/7

## 💰 Pricing

- **Food Items**: €10/kg
- **Other Items**: €15/kg
- **All locations supported with competitive rates**

## 🎨 Design System

### **Color Palette**
- **Primary**: #FFC107 (Bright Yellow) → #FFD54F (Dark Mode)
- **Secondary**: #FF0000 (Red) → #FF5252 (Dark Mode)
- **Contrast**: #000000 (Black) / #FFFFFF (White)
- **Background**: Adaptive with smooth transitions

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive scaling**: Mobile-first approach

### **Components**
- **Cards**: Rounded corners with hover effects
- **Buttons**: Primary (Yellow), Secondary (Red) with animations
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with smooth scrolling

## 📱 Pages & Features

### **Homepage**
- Hero section with Hyperspeed background
- Comprehensive services showcase
- Shipment creation form
- Customer testimonials
- FAQ section
- Contact information

### **User Dashboard**
- **Overview**: Order statistics with charts
- **Orders**: Active shipments with tracking
- **Settings**: Profile management and preferences
- **Support**: Help center and contact options

### **Admin Dashboard**
- **Overview**: Business analytics and KPIs
- **Orders**: Complete order management system
- **Users**: User management and role assignment
- **Analytics**: Revenue and performance charts
- **Reports**: Exportable business reports

### **Authentication**
- Clean sign-in/sign-up pages
- Password strength validation
- Remember me functionality
- Forgot password flow

## 🔧 Development

### **Project Structure**
\`\`\`
elisha-dropshipping-app/
├── app/
│   ├── (main)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   └── orders/
│   │       └── route.ts
│   ├── auth/
│   │   ├── signin/
│   │   └── signup/
│   ├── dashboard/
│   │   ├── admin/
│   │   ├── user/
│   │   └── layout.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HyperspeedBackground.tsx
│   ├── ShipmentForm.tsx
│   └── theme-provider.tsx
├── hooks/
│   └── useAuth.ts
├── lib/
│   └── auth.ts
└── public/
\`\`\`

### **Key Components**

- **HyperspeedBackground**: Custom Three.js animated background
- **Header**: Responsive navigation with theme toggle
- **Footer**: Contact information and links
- **ShipmentForm**: Order creation with image upload
- **AuthProvider**: JWT-based authentication system

### **API Routes**

- `POST /api/orders` - Create new order
- `GET /api/orders` - Fetch orders (user/admin)
- `PUT /api/orders` - Update order status (admin)
- `POST /api/auth/signin` - User authentication
- `POST /api/auth/signup` - User registration

## 🚀 Deployment

### **Build the application**
\`\`\`bash
npm run build
\`\`\`

### **Deploy to Vercel**
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### **Environment Variables**
Set all environment variables in your deployment platform:
- MongoDB connection string
- Cloudinary credentials
- Email service configuration
- JWT secret key

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and inquiries:
- **Email**: info@elishaglobal.com
- **Phone**: +234 (0) 123 456 7890
- **Hours**: Monday-Friday, 9AM-6PM WAT

## 🔮 Future Enhancements

- **Real-time Chat**: Customer support integration
- **Mobile App**: React Native companion app
- **Payment Gateway**: Stripe/PayPal integration
- **Multi-language**: Portuguese and French support
- **Advanced Analytics**: Business intelligence dashboard
- **API Integration**: Third-party logistics providers

---

**Elisha Global Services** - Connecting continents, delivering excellence. 🌍✈️📦
\`\`\`

```plaintext file=".env.local.example"
# MongoDB Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/elisha-global

# Cloudinary Image Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Service (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@elishaglobal.com

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Development
NODE_ENV=development
