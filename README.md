# Purushottam Creation - Temple Smart Ordering App

## 🚩 Overview

Purushottam Creation is a mobile-first smart ordering application designed for **Jam Sawali Hanuman Mandir**. It enables devotees to order customized temple merchandise (T-shirts, apparel) with real-time production tracking and QR-based pickup system.

## ✨ Features

### 1. **Authentication System**
- OTP-based mobile verification
- Google Workspace integration
- Secure session management

### 2. **Product Catalog**
- **Blank T-Shirt** - ₹99 (2 mins)
- **Temple Design (Single Side)** - ₹149 (5 mins)
- **Temple Design (Front + Back)** - ₹199 (5 mins)
- **Custom Design (Single Side)** - ₹199 (10 mins)

### 3. **Smart Configurator**
- Color selection (Saffron, White, Red)
- Size options (M, L, XL)
- Custom photo/text upload
- GPS-based distance validation (0-80 KM service radius)

### 4. **Delivery Options**
- Same-day express delivery (0-4 KM)
- Local delivery hub (4-40 KM)
- Counter pickup (40-80 KM)

### 5. **Live Tracking**
- Real-time token display
- Queue position monitoring
- Estimated wait time calculation
- QR code for pickup verification

### 6. **Admin Dashboard**
- Real-time revenue tracking
- Active orders count
- Production queue management
- Order status updates

## 🏗️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: LocalStorage (client-side persistence)
- **Mobile-First**: Responsive design optimized for mobile devices
- **Max Width**: 450px (mobile viewport simulation)

## 📁 File Structure

```
Purushottam-/
├── index.html          # Main application UI
├── app.js              # Application logic
└── README.md           # Documentation
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/purushottamsonone2002-create/Purushottam-.git
cd Purushottam-
```

### 2. Run Locally
Open `index.html` in a modern web browser:
```bash
open index.html
# or
firefox index.html
# or use a local server
python -m http.server 8000
```

### 3. Access the App
- Open http://localhost:8000 in your browser
- Login with any phone number (OTP: 1234)
- Browse products and place orders

## 🔄 User Flow

1. **Authentication** → OTP verification or Google sign-in
2. **Product Selection** → Choose from 4 product types
3. **Customization** → Select color, size, and custom options
4. **Distance Validation** → GPS check for service availability
5. **Delivery Selection** → Choose shipping/payment method
6. **Order Placement** → Receive token number
7. **Live Tracking** → Monitor order status in real-time

## 💾 Data Storage

All orders are stored in browser's LocalStorage:
- Key: `db_orders_mvp`
- Format: JSON array of order objects
- Persists across page reloads

### Order Object Structure
```javascript
{
  order_id: "HM1043",
  name: "Pilgrim",
  product: "Temple Design (Single Side)",
  color: "Saffron",
  size: "L",
  order_status: "Waiting in Queue",
  price: 149,
  duration: 5,
  timestamp: 1234567890
}
```

## 🎨 Color Scheme

- **Saffron**: #FF6B00 (Primary brand color)
- **Red**: #D32F2F (Secondary action)
- **Green**: #057857 (Success state)
- **Black**: #111111 (Text/buttons)
- **Gray**: #6B7280 (Muted text)

## 📱 Responsive Design

- Mobile-first approach
- Max-width: 450px container
- Touch-friendly buttons (min 44px)
- Scrollable views with bottom navigation

## 🔧 Key Functions

| Function | Purpose |
|----------|----------|
| `routeTo()` | Navigate between views |
| `authenticateUserSession()` | Handle user login |
| `loadProductConfigurator()` | Initialize product selection |
| `calculateGpsDistance()` | Validate service radius |
| `commitOrderToQueue()` | Submit order |
| `renderAdminConsole()` | Update admin dashboard |
| `initializeProcessingLoop()` | Simulate order processing |

## 🔐 Security Notes

- OTP validation is mocked (use: 1234)
- GPS data is simulated (random 0-45 KM)
- No backend API calls currently
- All data stored locally (no server sync)

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] Real GPS geolocation
- [ ] Payment gateway integration
- [ ] Email/SMS notifications
- [ ] Order history export
- [ ] Multi-language support (Hindi)
- [ ] Push notifications
- [ ] Receipt generation/printing

## 📞 Support

For issues or feature requests, please open a GitHub issue.

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ for Jam Sawali Hanuman Mandir**