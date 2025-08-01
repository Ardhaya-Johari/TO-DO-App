# 🚀 Mission: Task Possible – A To-Do List Web App

> _“Behind every successful person is a long list of completed tasks.”_  
> This app is where those tasks begin. ✍️

---

## 🎯 The Idea

Life throws a lot at us. Deadlines, goals, groceries, big dreams.  
This app is your **digital companion** — a place to capture those thoughts, conquer your chaos, and check things off one satisfying ✔️ at a time.

Built with ❤️ using:

- 🧠 Node.js + Express (the brains)
- 🗂 MongoDB + Mongoose (the memory)
- 🖼 EJS Templating (the looks)
- 🎨 CSS (the style)

---

## ✨ What Can It Do?

📌 **Add Tasks** – Because your brain deserves a break  
✅ **Mark Them Done** – Strike through your victories  
🗑️ **Delete with Dignity** – Let go when it’s time  
🔄 **Real-Time Updates** – Powered by MongoDB magic  
💾 **Persistent Storage** – Even after you close the tab

---

## 🌈 A Day in the Life of the App

1. Wake up and brew some coffee ☕
2. Open localhost:3000
3. Add “Finish coding project”
4. Add “Call mom”
5. Click ✔️ when done
6. Feel productive. Smile. Repeat.

---

## 🔍 Behind the Scenes (for curious developers)

The logic is as simple as it is powerful.

- **GET "/"** – Fetches all tasks from MongoDB and renders them in EJS:
  
  app.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.render("index", { tasks });
  });

## 🔧 How to Run It
### Clone it down:
```bash
git clone https://github.com/your-username/To-Do-App.git
cd todo-app
```
### Install Dependencies
```bash
Install the soul:
npm install
```
### Summon MongoDB:
```bash
mongod
```
###Give it life:
```bash
node app.js
```
## 👤 Creator

**Ardhaya Johari**  
🔗 [GitHub](https://github.com/Ardhaya-Johari)  
📧 ardhayasaxena3897@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/ardhaya-johari-819275321/)

Created with ❤️ by Ardhaya

---

## ⭐ Your Next Task
If this made you smile, made you learn, or made your life 1% easier:

# ⭐ Star the repo
# 🍴 Fork it and build your own dream
# 🧪 Hack it, remix it, and let it grow
