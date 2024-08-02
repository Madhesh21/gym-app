import { createContext, useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Workout from "./components/Workout";
import generateWorkout from "./utils/function";

export const ThemeContext = createContext(null);

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");
  const [darkMode,setDarkMode] = useState(true)

  function toggleTheme() {
    setDarkMode(!darkMode)
  }

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    const newWorkout = generateWorkout({ poison,muscles,goal })
    setWorkout(newWorkout)
    window.location.href = '#workout'
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={`${darkMode && "dark"}`}>
        <main className="min-h-screen flex flex-col bg-neutral-100 text-slate-500 dark:text-white text-sm sm:text-base dark:bg-gradient-to-r from-slate-800 to-slate-950">
          <Navbar />
          <Hero />
          <Generator
            poison={poison}
            setPoison={setPoison}
            muscles={muscles}
            setMuscles={setMuscles}
            goal={goal}
            setGoal={setGoal}
            updateWorkout={updateWorkout}
          />
          {workout && <Workout workout={workout} />}
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
