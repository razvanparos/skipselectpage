# Skip Selection Page

This is an approach for the skip selection page using **React**, **TypeScript**, and **TailwindCSS**, with a focus on **responsiveness, UI/UX, semantic HTML, and reusable components**.

## Features

### 🚀 Header Component
- Fixed display issues on mobile devices by adding a **sidebar menu** for navigation to previous steps.
- Retained progress steps and introduced a **progress bar** for a better user experience.

### 🎛️ Filter Component
- Added a **filter component** to enhance scalability in case more skip options are added in the future.
- Users can filter by:
  - **Skip size range**
  - **Price range**
  - **Road allowance**
  - **Suitability for heavy waste**

### 🏗️ Skip Selector
- Implemented a **clear 3-column grid** for improved visibility.
- Each skip is displayed as a **card** with corresponding information.
- Users can:
  - **Select a skip card** to proceed to the next step.
  - **Deselect** by clicking again.
- Added **smooth transitions** to enhance UI/UX.

---

## 📌 Tech Stack
- ⚛ **React**
- 🟦 **TypeScript**
- 🎨 **TailwindCSS**

## 📷 Preview
*(Add a screenshot of your UI here if available.)*

## 🛠️ Installation & Usage
```sh
git clone https://github.com/your-repo.git
cd your-repo
npm install
npm start
