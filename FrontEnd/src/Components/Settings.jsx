const SettingsContent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="notifications" className="flex items-center">
            <input type="checkbox" id="notifications" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2 text-gray-700">Enable notifications</span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="theme" className="block text-gray-700 mb-2">Theme</label>
          <select id="theme" className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        <div>
          <label htmlFor="language" className="block text-gray-700 mb-2">Language</label>
          <select id="language" className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  );
  
export default SettingsContent;