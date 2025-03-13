async function getUsers() {
  // In a real app, this would be an external API call
  // Here we're using the internal API route we'll create next
  const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return res.json();
}

export default async function Users() {
  const users = await getUsers();
  
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Users</h1>
      <p>This page demonstrates fetching data from an API route.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user: any) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}