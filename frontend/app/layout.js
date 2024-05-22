import '../styles/globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>SiPinter</title>
      </head>
      <body className="bg-gray-100">
        <header className="bg-gray-800 text-white p-4">
          <nav>
            <ul className="flex justify-center space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/services/create" className="hover:underline">Create Service</a></li>
            </ul>
          </nav>
        </header>
        <main className="p-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          <p>&copy; 2024 SiPinter</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
