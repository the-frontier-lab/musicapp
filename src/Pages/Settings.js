import React from "react";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <p>This is the Settings Page</p>

      <input type="file" />

      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Username
          <input type="text" name="username" />
        </label>
        <label>
          Password
          <input type="text" name="password" />
        </label>
        <label for="instruments">Instruments</label>
        <select name="instruments" id="instruments">
          <option value="piano">Piano</option>
          <option value="violin">Violin</option>
          <option value="clarinet">Clarinet</option>
          <option value="flute">Flute</option>
          <option value="saxophone">Saxophone</option>
        </select>
      </form>
    </div>
  );
}

export default Settings;
