# 🥗 Oleave - Food Ordering Web App

**Oleave** is a complete end-to-end food ordering platform designed as a college project. It enables customers to place orders, track status in real-time, and allows vendors to manage incoming orders through a dashboard — all using vanilla HTML, CSS, and JavaScript.

---

## 🚀 Features

### 💡 Customer Side
- Fully functional and responsive user interface
- Browse menu items dynamically
- Add to cart and modify quantities
- Place orders with animated confirmation & QR code
- Real-time order status tracking (Confirmed → Preparing → Prepared)
- Time slot selection with auto-blocking logic for high demand

### 🧑‍🍳 Vendor Dashboard
- Dark-themed dashboard with real-time display of placed orders
- Vendor can update order status with one click
- Status changes reflect instantly on customer side
- Dynamic rendering of cart items from JSON using product IDs
- LocalStorage used to sync orders between customer and vendor side

---

## 🛠️ Tech Stack

| Technology | Purpose                      |
|------------|------------------------------|
| **HTML**   | Page structure and layout     |
| **CSS**    | Styling and animations        |
| **JavaScript** | Functionality, DOM updates, localStorage |
| **LocalStorage** | Real-time order sync (no backend) |
| **JSON**   | Dynamic product and menu data |

---

## 📄 Project Highlights

- Fully animated and user-friendly UI
- Clean separation between customer and vendor interfaces
- Real-time status updates using localStorage only
- No backend required — everything runs in the browser
- Uses QR code display (customer side) for visual tracking (optional)
- Optimized for performance with slot blocking logic for crowd control

---

## 📂 Folder Structure

