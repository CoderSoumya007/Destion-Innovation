const ProfileContent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-2xl font-medium text-gray-600">JD</span>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Bio</h4>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
  
  

  export default ProfileContent;