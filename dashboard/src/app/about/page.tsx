export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <p>This is a simple Next.js application created to learn about:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Page routing in Next.js</li>
        <li>API routes</li>
        <li>Client and server components</li>
        <li>Data fetching</li>
      </ul>
    </div>
  );
}