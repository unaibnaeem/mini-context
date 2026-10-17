import { ThemeProvider } from "./context/ThemeContext";

import ThemeBtn from "./components/Theme/ThemeBtn";
import Card from "./components/Theme/Card";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-wrap items-center">
        <div className="w-full">
          <div className="mx-auto mb-4 flex w-full max-w-sm justify-end">
            <ThemeBtn />
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

// ----------------------------------------

// Components/User

// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import { UserProvider } from "./context/UserContext";

// function App() {
//   return (
//     <UserProvider>
//       <Profile />
//       <Login />
//     </UserProvider>
//   );
// }

// export default App;
