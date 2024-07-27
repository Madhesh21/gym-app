import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"

function App() {
 

  return (
    <main className="min-h-screen flex flex-col text-white text-sm sm:text-base bg-gradient-to-r from-slate-800 to-slate-950">
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
}

export default App
