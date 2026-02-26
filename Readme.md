# 📊 Chart Generator

An interactive and responsive **Chart Generator** built with **HTML, CSS, and JavaScript**, powered by **Chart.js**.

This application allows users to dynamically add data and switch between different chart types in real time — all within a modern glassmorphism UI.

---

## 🚀 Features

- 📊 Multiple chart types:
  - Bar Chart
  - Line Chart
  - Pie Chart
  - Radar Chart

- ➕ Add labels and numeric values dynamically
- 🔄 Change chart type without refreshing the page
- 🎨 Modern glassmorphism design
- 📱 Fully responsive layout
- ⚡ Lightweight (Chart.js via CDN)

---

## 🛠 Tech Stack

- HTML5
- CSS3 (Glassmorphism + Responsive Design)
- Vanilla JavaScript
- Chart.js (v4.5.1 via CDN)

---

## 📂 Project Structure

```bash
chart-generator/
│
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive layout
└── script.js       # Chart logic and interactivity
```

---

## ⚙️ How It Works

### 1️⃣ Adding Data

1. Enter a **Label** (e.g., "January Sales")
2. Enter a **Value** (e.g., 50)
3. Click **Add Data**
4. The chart updates automatically

The app stores labels and values in arrays:

```javascript
const chartLabels = [];
const chartData = [];
```

If the chart already exists, it updates. Otherwise, it initializes a new one.

---

### 2️⃣ Changing Chart Type

1. Select a chart type from the dropdown
2. Click **Update Chart Type**

The current chart instance is destroyed and recreated with the new type:

```javascript
myChart.destroy();
initChart();
```

---

## 🎨 UI & Design

- Dark gradient background
- Glassmorphism containers with blur effect
- Smooth hover animations
- Focus effects on inputs
- Responsive controls for mobile devices

---

## 📱 Responsive Behavior

- Controls stack vertically on small screens
- Chart container adapts to viewport height
- Optimized for desktop and mobile

---

## ▶️ Running Locally

1. Clone the repository:

```bash
git clone https://github.com/matifelitti/Chart-Generator.git
```

2. Navigate into the project folder.

3. Open `index.html` in your browser.

No build tools or installation required.
