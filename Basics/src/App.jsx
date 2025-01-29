import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeAlphabets, setIncludeAlphabets] = useState(false);
  const [length, setLength] = useState(8);

  // Password Generator function
  const passwordGenerator = useCallback(() => {
    let charset = "";
    if (includeNumbers) charset += "0123456789";
    if (includeAlphabets) charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!includeNumbers && !includeAlphabets) charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(generatedPassword);
  }, [includeNumbers, includeAlphabets, length]);

  // Auto-generate password when options change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // Function to copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg w-80">
        {/* Password Display & Copy Button */}
        <div className="flex items-center border rounded-lg p-2 w-full">
          <input type="text" className="flex-grow p-1 outline-none" value={password} readOnly />
          <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded" onClick={copyToClipboard}>
            Copy
          </button>
        </div>

        {/* Checkboxes for Options */}
        <div className="flex flex-col space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers((prev) => !prev)} />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={includeAlphabets} onChange={() => setIncludeAlphabets((prev) => !prev)} />
            <span>Include Alphabets</span>
          </label>

          {/* Password Length Input */}
          <label className="flex items-center space-x-1">
            <span>Password Length</span>
            <input
              type="number"
              className="outline-none"
              value={length}
              onChange={(e) => setLength(Math.max(8, Number(e.target.value)))}
              min="8"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
