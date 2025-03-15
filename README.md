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

![Loggout](https://github.com/user-attachments/assets/765d7380-7596-4864-b8fb-bc274fc12e55)


✅ **GitHub Authentication** – Sign in with your **GitHub** account for seamless access.  

![Home page](https://github.com/user-attachments/assets/347f2c7f-d142-48de-a5d3-45118ef79540)


✅ **Submit a Pitch** – Share your startup idea by adding a title, description, category, and multimedia (images/videos).  

![Create](https://github.com/user-attachments/assets/c46bba27-c72c-4d99-811b-95864dcda403)


✅ **Explore Startup Pitches** – Browse submitted ideas.  

![Searching startup](https://github.com/user-attachments/assets/1a78049c-2683-413a-8cd1-cb4a34cb0a55)


✅ **Detailed Pitch View** – Click on any pitch to see its full details, complete with multimedia and descriptions.  

![Details](https://github.com/user-attachments/assets/1371f0f3-c783-4ec6-b3ed-eb8c45c70978)


✅ **Personalized Profile Page** – View and manage the pitches you’ve submitted in one place.  

![Profile](https://github.com/user-attachments/assets/adfaca9f-9cf4-4fcb-8729-9fd94bc7a456)


✅ **View Counter** – Tracks pitch views.  

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

git clone https://github.com/aun1414/Startups.git
cd pitchify

### Install Dependencies
npm install

### Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the Sanity website.

### Running the project

npm run dev



