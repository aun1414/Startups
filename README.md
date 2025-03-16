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

![Logout](https://github.com/user-attachments/assets/e78f2306-51da-441a-8eb8-62be2325a438)


✅ **GitHub Authentication** – Sign in with your **GitHub** account for seamless access.  

![Logout](https://github.com/user-attachments/assets/4a882830-600d-42ab-85af-e2dce8b24b5d)


✅ **Submit a Pitch** – Share your startup idea by adding a title, description, category, and multimedia (images/videos).  

![Create](https://github.com/user-attachments/assets/8c265669-8643-482f-80d5-a7a8e8096fc7)


✅ **Explore Startup Pitches** – Browse submitted ideas.  

![Search](https://github.com/user-attachments/assets/7203d47b-1f80-4463-86ec-b3b14ba5c605)


✅ **Detailed Pitch View** – Click on any pitch to see its full details, complete with multimedia and descriptions.  

![Details](https://github.com/user-attachments/assets/c55a295b-1b7c-4178-a8ae-1ab2ced9f5cc)


✅ **Personalized Profile Page** – View and manage the pitches you’ve submitted in one place.  

![Profile](https://github.com/user-attachments/assets/1de1441e-9436-4bb1-bd0a-ecbfd19e7791)

✅ **Sentry Bug reports** – Can report a bug within the app
  
![Bug](https://github.com/user-attachments/assets/0c13f202-8948-4739-9fa7-e4c9d134e1d0)

![Bug2](https://github.com/user-attachments/assets/f3d8e1b4-0871-4b4b-9a88-083842ed7c1f)


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



