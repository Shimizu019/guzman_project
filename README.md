# 🎓 Student Information Portal

> **BSIT Laboratory Activity**
>
> **Benju Guzman** · BSIT 3-6 · Student ID **202400050**

A simple, responsive **Student Information Portal** built with **React**, **React Router**, **Tailwind CSS**, and **Vite**. It lets users browse student profiles, explore a course catalog with real-time search and filtering, and read about the institution behind the portal.

---

## 📖 Overview

This project is a small single-page application (SPA) that demonstrates:

- Client-side routing with **React Router** (no page reloads)
- Reusable **JSX components** shared across multiple pages
- React **hooks** (`useState`) for interactive search and filtering
- Utility-first styling with **Tailwind CSS**
- A clean folder structure separating **components** from **pages**

All data is stored locally in plain JavaScript arrays, so the app runs without a backend or database.

---

## ✨ Features

| Feature | Description |
| --- | --- |
| 🏠 **Home Page** | Two-column hero, live statistics, feature cards, and a searchable student directory |
| 👥 **Student Directory** | Search by name or email, filter by program, with a live results counter |
| 📚 **Course Catalog** | Search by course or instructor, filter by level (100–400) |
| 🎯 **Active Navigation** | The current page is highlighted automatically (`NavLink` + `end`) |
| 🧑‍🎓 **Student Cards** | Initials avatar, student ID, program, year level and an "Active" status badge |
| 📚 **Course Cards** | Blue header band with the course code, plus instructor, schedule and enrollment bar |
| 📊 **Enrollment Bars** | Each course card shows a capacity bar (green / yellow / red) |
| 🚫 **404 Page** | Friendly "Page Not Found" screen with quick links back to valid routes |
| 🎨 **Shared Design System** | One set of colours, cards, buttons and badges used by every page |
| 📱 **Responsive Layout** | Two columns on desktop → tablet → a single column on phones (real CSS media queries) |
| ✨ **Subtle Animations** | Page fade-in plus a small 3px card lift on hover |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| [React](https://react.dev/) | ^19.2.8 | UI library for building components |
| [React Router DOM](https://reactrouter.com/) | ^7.18.4 | Client-side routing (`Routes`, `Route`, `NavLink`, `Link`) |
| [Vite](https://vite.dev/) | ^8.3.0 | Development server and production build tool |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.3.3 | Utility-first CSS framework |
| [ESLint](https://eslint.org/) | ^10.10.0 | Code quality and linting |

> **Note:** The React Compiler Babel preset is enabled in `vite.config.js`.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed (version 20.19+ or 22.12+ is recommended for Vite 8).

```bash
node --version
npm --version
```

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Then open the URL printed in your terminal (usually **http://localhost:5173/**). The page reloads automatically whenever you save a file (Hot Module Replacement).

### 3. Build for production

```bash
npm run build
```

The optimized output is written to the `dist/` folder.

### 4. Preview the production build

```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot reload |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint across the project to catch code issues |

---

## 📁 Project Structure

```
guzman_project/
├── public/
│   ├── favicon.svg            # Browser tab icon
│   └── icons.svg              # Static icon sprite
├── src/
│   ├── components/            # Reusable UI pieces
│   │   ├── Navbar.jsx         # Sticky nav bar with active-link highlighting
│   │   ├── StudentCard.jsx    # One student card (initials avatar + details)
│   │   └── CourseCard.jsx     # One course card (code header + enrollment bar)
│   ├── data/                  # Sample data (single source of truth)
│   │   ├── students.js        # The list of students
│   │   └── courses.js         # The list of courses
│   ├── utils/
│   │   └── getInitials.js     # Helper: "Juan Dela Cruz" -> "JD"
│   ├── pages/                 # One file per route
│   │   ├── Home.jsx           # "/"          Hero + statistics + directory
│   │   ├── Students.jsx       # "/students"  Searchable student directory
│   │   ├── Courses.jsx        # "/courses"   Searchable course catalog
│   │   ├── About.jsx          # "/about"     About the portal
│   │   └── NotFound.jsx       # "*"          404 page
│   ├── assets/                # Images imported by components
│   ├── App.jsx                # Layout + <Routes> definitions
│   ├── App.css                # Shared design system + media queries
│   ├── index.css              # Tailwind import, colours, page animation
│   └── main.jsx               # Entry point, wraps App in <BrowserRouter>
├── index.html                 # HTML shell with <div id="root">
├── package.json               # Dependencies and npm scripts
├── vite.config.js             # Vite + React + Tailwind plugins
└── eslint.config.js           # ESLint rules
```

### Folder conventions

- **`src/components/`** → small, reusable building blocks. Each one receives data through **props** (for example `<StudentCard name="..." studentNumber="..." />`).
- **`src/pages/`** → full screens, one per route.
- **`src/data/`** → the sample lists. `Home`, `Students` and `Courses` all import the same arrays, so the numbers on the home page always match the cards on the other pages.
- **`src/utils/`** → tiny helper functions that more than one file needs.

---

## 🗺️ Routes

| Path | Component | Description |
| --- | --- | --- |
| `/` | `Home` | Hero, stats, feature cards, and a searchable student preview |
| `/students` | `Students` | Full student directory with search + department filter |
| `/courses` | `Courses` | Full course catalog with search + level filter |
| `/about` | `About` | Mission statement, features list, and contact details |
| `*` | `NotFound` | Catch-all 404 page for unknown URLs |

Routing is declared in `src/App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/students" element={<Students />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## 🧩 Components

### `Navbar.jsx`
Sticky navigation bar shown on every page. It maps over a small array, so adding a new page only takes one line:

```jsx
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/students', label: 'Students' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
]
```

`NavLink` gives us the `isActive` flag, which adds the `nav-link-active` class (blue text + light-blue background) to the page we are viewing. The home link also uses `end` so it is only highlighted on `/`.

The circle on the right shows the signed-in student's initials, built from a small constant at the top of the file:

```jsx
const currentStudent = 'Benju Guzman' // shown in the top-right corner

<div className="navbar-profile" title={currentStudent}>
  {getInitials(currentStudent)}
</div>
```

### `StudentCard.jsx`
Shows one student. Every piece of information arrives as a **prop**:

```jsx
<StudentCard
  name="Benju Guzman"
  studentNumber="202400050"
  course="BSIT"
  yearLevel="3-6"
  status="Active"
  email="benju.guzman@student.edu"
  gpa={3.8}
  credits={45}
  phone="(555) 123-0101"
/>
```

The avatar is built from the student's initials using `getInitials()` from `src/utils/getInitials.js`, so **no image file is needed** and the card works even without internet.

### `CourseCard.jsx`
Shows one course, with a light-blue header band that holds the course code.

```jsx
<CourseCard
  code="CS-101"
  name="Introduction to Computer Science"
  instructor="Dr. Emily Chen"
  schedule="Monday & Wednesday • 9:00 AM - 10:30 AM"
  credits={4}
  level={100}
  enrolled={120}
  capacity={150}
  description="Fundamentals of programming, algorithms, and data structures."
/>
```

It calculates how full the class is and colours the bar accordingly:

```jsx
const percentFull = Math.round((enrolled / capacity) * 100)
```

- `>= 90%` → red (almost full)
- `>= 70%` → amber (filling up)
- otherwise → green (space available)

Both cards stay reusable and are never duplicated by hand — the pages render them with `.map()`:

```jsx
{students.map((student) => (
  <StudentCard key={student.studentNumber} {...student} />
))}
```

`{...student}` spreads the object, which passes each field as its own prop.

---

## 🗃️ Data Shapes

All sample data lives in `src/data/`.

### Student object (`src/data/students.js`)

```js
{
  studentNumber: '202400050',  // shown as "Student ID"
  name: 'Benju Guzman',        // the author's own record (first in the list)
  course: 'BSIT',              // shown as "Program"; also the filter value
  yearLevel: '3-6',
  email: 'benju.guzman@student.edu',
  gpa: 3.8,
  credits: 45,
  phone: '(555) 123-0101',
  status: 'Active',            // shown in the green badge
}
```

> The **first** record in `students` is the one displayed as the profile card in the Home page hero, so it belongs to the portal owner.

### Course object (`src/data/courses.js`)

```js
{
  code: 'CS-101',              // shown in the blue header badge
  name: 'Introduction to Computer Science',
  instructor: 'Dr. Emily Chen',
  credits: 4,
  level: 100,                  // used by the level filter
  enrolled: 120,
  capacity: 150,
  schedule: 'Monday & Wednesday • 9:00 AM - 10:30 AM',
  description: 'Fundamentals of programming, algorithms, and data structures.',
}
```

> The statistics on the Home page (`students.length`, `courses.length` and the number of programs) are calculated from these arrays, so the numbers at the top can never disagree with the cards below them.

---

## 🔍 How Search and Filtering Work

Each page keeps two pieces of state:

```jsx
const [searchTerm, setSearchTerm] = useState('')
const [selectedProgram, setSelectedProgram] = useState('All') // or selectedLevel on Courses
```

Two `.filter()` conditions are combined, and the result is rendered:

```jsx
const filteredStudents = students.filter((student) => {
  const matchSearch =
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  const matchProgram =
    selectedProgram === 'All' || student.course === selectedProgram
  return matchSearch && matchProgram
})
```

The filter buttons are built from the data itself, so they always match the list:

```jsx
// "new Set" removes duplicates: Mathematics appears twice in the data
const programs = [...new Set(students.map((student) => student.course))]

{['All', ...programs].map((program) => (
  <button
    key={program}
    onClick={() => setSelectedProgram(program)}
    className={program === selectedProgram ? 'chip chip-active' : 'chip'}
  >
    {program}
  </button>
))}
```

If nothing matches, an empty-state message is shown instead of an empty grid.

---

## 🎨 The Design System

The look of the portal is defined once, in `src/index.css` and `src/App.css`.

**Colours** live in `src/index.css` as CSS variables:

| Token | Value | Used for |
| --- | --- | --- |
| `--color-primary` | `#2563eb` | Blue accent, buttons, stat numbers |
| `--color-dark` | `#0f172a` | Dark navy headings and body text |
| `--color-muted` | `#64748b` | Secondary text and labels |
| `--color-bg` | `#f8fafc` | Page background |
| `--color-card` | `#ffffff` | Card background |
| `--color-border` | `#e2e8f0` | Card and input borders |
| `--color-success` | `#16a34a` | The green "Active" badge |

**Reusable classes** live in `src/App.css`:

| Class | What it does |
| --- | --- |
| `.page` | Centred page container (max-width 1120px + padding) |
| `.card` / `.card-hover` | White rounded card (16px) with a soft shadow and a 3px hover lift |
| `.btn` / `.btn-primary` / `.btn-outline` | Buttons with a smooth hover transition |
| `.badge` / `.badge-status` | Small pills, including the green "Active" badge |
| `.avatar` / `.avatar-lg` | The initials circle |
| `.info-row` / `.info-label` / `.info-value` | "Label … value" lines inside cards |
| `.field` / `.chip` / `.chip-active` | Search box and filter buttons |
| `.stat` / `.stat-number` / `.stat-label` | The statistics boxes |
| `.hero` / `.hero-title` / `.card-grid` | Home page layout and card grids |

**Responsive design** uses two media queries at the bottom of `src/App.css`:

```css
/* Tablets and small laptops */
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }        /* hero stacks vertically   */
  .card-grid { grid-template-columns: repeat(2, 1fr); }  /* 3 cols -> 2 cols */
}

/* Phones */
@media (max-width: 640px) {
  .card-grid { grid-template-columns: 1fr; }   /* cards become 1 column    */
  .navbar-inner { flex-wrap: wrap; }           /* navbar becomes two rows  */
  .hero-actions .btn { width: 100%; }          /* buttons fill the screen  */
}
```

Because the grids switch to a single column and the navbar wraps, there is **no horizontal scrolling** on small screens. Tailwind's own responsive helpers (`sm:`, `md:`) are still used for small spacing tweaks.

---

## ➕ Adding More Data

Add a student by appending an object to the `students` array in `src/data/students.js` — it then appears on the Home page **and** on the Students page:

```js
{
  studentNumber: '202400051',
  name: 'Grace Hopper',
  course: 'BSIT',
  yearLevel: '3-6',
  email: 'grace.h@student.edu',
  gpa: 4.0,
  credits: 72,
  phone: '(555) 123-0107',
  status: 'Active',
}
```

Add a course by appending an object to the `courses` array in `src/data/courses.js`. The level filter buttons are generated from the data, so a new level (for example `500`) appears on its own.

> **Tip:** Because the cards are rendered with `.map()`, React needs a unique `key` prop — that is why students use `studentNumber` and courses use `code`.

---

## 🎨 Customizing the Look

- **Colours** — edit the CSS variables in `src/index.css` (for example change `--color-primary`). Every button, badge and accent updates at once.
- **Card shape** — change `--radius` in `src/index.css` to make the corners rounder or sharper (16px by default).
- **Hover animation** — change the `translateY(-3px)` value on `.card-hover:hover` in `src/App.css`.
- **Page animation** — the `fadeIn` keyframes in `src/index.css` control the fade-in of each page.
- **Spacing** — page padding uses the `.page` class in `src/App.css`.

---

## 🧪 Troubleshooting

| Problem | Likely cause / fix |
| --- | --- |
| The page looks completely unstyled | `tailwindcss()` must be listed in the `plugins` array of `vite.config.js`, and `@import "tailwindcss";` must be at the top of `src/index.css` |
| Styles changed but the browser shows the old ones | Restart `npm run dev` after editing `vite.config.js` (config changes are not hot-reloaded) |
| `Cannot find module 'react-router-dom'` | Run `npm install` again |
| The Home link looks active on every page | The root `NavLink` needs `end` (already handled in `Navbar.jsx`) |
| Refreshing `/students` gives a 404 in production | Your host must rewrite unknown paths to `index.html` (SPA fallback). The Vite dev server and `npm run preview` do this automatically |
| Port 5173 already in use | Stop the other process or run `npm run dev -- --port 3000` |

---

## 👤 Author

| | |
| --- | --- |
| **Name** | Benju Guzman |
| **Program** | BSIT — Bachelor of Science in Information Technology |
| **Year & Section** | 3-6 |
| **Student ID** | 202400050 |

The profile shown on the **Home page hero card** and in the **navigation bar** is the author's own student record. It is always the **first** entry in the `students` array in `src/data/students.js`, so editing that first record updates both places at once.

---

## 📄 License

This project was created for **educational purposes** as part of a course activity. You are free to use, modify, and learn from it.

---

## 🙌 Acknowledgements

- [React](https://react.dev/) and [React Router](https://reactrouter.com/) for the UI and routing
- [Vite](https://vite.dev/) for the fast dev server and build tooling
- [Tailwind CSS](https://tailwindcss.com/) for the styling utilities
- Student avatars are generated in code from each student's initials — no image files or external services are required

---

<p align="center">Made with ❤️ using React + Vite + Tailwind CSS</p>
