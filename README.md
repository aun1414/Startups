# 🚀 Pitchify: Your Startup Idea Platform  

### A Next.js 15-powered hub for entrepreneurs to showcase their startup ideas, participate in virtual pitch competitions, and gain visibility in a dynamic and engaging community. Browse, submit, and explore innovative ideas—all within a sleek, minimalistic interface designed for an effortless user experience.  

---

## ⚙️ Tech Stack  
- **React 19**  
- **Next.js 15**  
- **Sanity** (for content management)  
- **TailwindCSS** (for styling)  
- **ShadCN** (for UI components)  
- **TypeScript**  

---

## 🔥 Key Features  

✅ **Real-Time Content Updates** – Startup pitches appear dynamically on the homepage, thanks to **Sanity's Content API**.  

✅ **GitHub Authentication** – Sign in with your **GitHub** account for seamless access.  

✅ **Submit a Pitch** – Share your startup idea by adding a title, description, category, and multimedia (images/videos).  

✅ **Explore Startup Pitches** – Browse submitted ideas and filter them by category.  

✅ **Detailed Pitch View** – Click on any pitch to see its full details, complete with multimedia and descriptions.  

✅ **Personalized Profile Page** – View and manage the pitches you’ve submitted in one place.  

✅ **View Counter** – Tracks pitch views instead of an upvote system, giving a transparent look at engagement.  


Plus, we leverage the latest features of **React 19, Next.js 15, and Sanity** to ensure modern development practices, scalability, and reusability in our code.  

---

## ⚡ Quick Setup Guide  

Follow these steps to get **Pitchify** up and running on your local machine.  

### Prerequisites  
Ensure you have the following installed before proceeding:  
✔ **Git**  
✔ **Node.js**  
✔ **npm** (Node Package Manager)  

### Clone the Repository  
Run the following command in your terminal to clone the project:  
```sh
git clone https://github.com/JavaScript-Mastery-Pro/pitchify.git
cd pitchify

### Install Dependencies
npm install

###Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the Sanity website.

###Running the project

npm run dev



