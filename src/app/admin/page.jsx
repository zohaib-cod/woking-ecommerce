// // src/app/admin/page.jsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';

// const AdminPanel = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const router = useRouter();

//   // Check if user is already logged in
//   useEffect(() => {
//     const authStatus = localStorage.getItem('adminAuthenticated');
//     if (authStatus === 'true') {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'ali' && password === 'ali') {
//       setIsAuthenticated(true);
//       localStorage.setItem('adminAuthenticated', 'true');
//       setLoginError('');
//     } else {
//       setLoginError('Invalid username or password');
//     }
//   };

//   const handleLogout = () => {
//     if (showLogoutConfirm) {
//       setIsAuthenticated(false);
//       localStorage.removeItem('adminAuthenticated');
//       setShowLogoutConfirm(false);
//       router.push('/');
//     } else {
//       setShowLogoutConfirm(true);
//     }
//   };

//   const cancelLogout = () => {
//     setShowLogoutConfirm(false);
//   };

//   // Sample data
//   const users = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2023-01-15', status: 'Active' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2023-02-20', status: 'Inactive' },
//     { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joinDate: '2023-03-10', status: 'Active' },
//   ];

//   const products = [
//     { id: 1, name: 'Classic T-Shirt', price: 29.99, stock: 45, category: 'Clothing', status: 'Published' },
//     { id: 2, name: 'Wireless Headphones', price: 129.99, stock: 12, category: 'Electronics', status: 'Published' },
//     { id: 3, name: 'Running Shoes', price: 89.99, stock: 7, category: 'Footwear', status: 'Low Stock' },
//   ];

//   const orders = [
//     { id: 1001, customer: 'John Doe', date: '2023-05-15', amount: 159.98, status: 'Delivered' },
//     { id: 1002, customer: 'Jane Smith', date: '2023-05-16', amount: 89.99, status: 'Processing' },
//     { id: 1003, customer: 'Mike Johnson', date: '2023-05-17', amount: 219.97, status: 'Shipped' },
//   ];

//   // Login form if not authenticated
//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
//         <Head>
//           <title>Admin Login - ZohaibStore</title>
//         </Head>
        
//         <div className="bg-white p-8 rounded-2xl shadow-xl w-96 backdrop-blur-sm bg-opacity-90">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-800">Admin Portal</h1>
//             <p className="text-gray-600 mt-2">Sign in to access the dashboard</p>
//           </div>
          
//           <form onSubmit={handleLogin} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Enter username"
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Enter password"
//                 required
//               />
//             </div>
            
//             {loginError && (
//               <div className="text-red-500 text-sm text-center">{loginError}</div>
//             )}
            
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
//             >
//               Sign In
//             </button>
//           </form>
          
//           <div className="mt-6 text-center text-sm text-gray-500">
//             <p>Demo credentials: username: <strong>ali</strong>, password: <strong>ali</strong></p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Admin dashboard
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>Admin Dashboard - ZohaibStore</title>
//       </Head>

//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="flex justify-between items-center px-6 py-4">
//           <div className="flex items-center space-x-4">
//             <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-600">Welcome, Admin</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main content */}
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white h-screen shadow-md">
//           <nav className="p-4">
//             <ul className="space-y-2">
//               {[
//                 { id: 'dashboard', label: 'Dashboard', icon: '📊' },
//                 { id: 'users', label: 'Users', icon: '👥' },
//                 { id: 'products', label: 'Products', icon: '🛒' },
//                 { id: 'orders', label: 'Orders', icon: '📦' },
//                 { id: 'analytics', label: 'Analytics', icon: '📈' },
//                 { id: 'settings', label: 'Settings', icon: '⚙️' }
//               ].map((item) => (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => setActiveTab(item.id)}
//                     className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
//                       activeTab === item.id
//                         ? 'bg-blue-100 text-blue-700'
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     <span className="text-xl">{item.icon}</span>
//                     <span>{item.label}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* Content area */}
//         <main className="flex-1 p-6">
//           {/* Welcome message */}
//           {activeTab === 'dashboard' && (
//             <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-2xl mb-6">
//               <h2 className="text-2xl font-bold mb-2">Welcome to Admin Authority</h2>
//               <p>Manage your store efficiently with our powerful admin tools.</p>
//             </div>
//           )}

//           {/* Stats overview */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <div className="bg-white p-6 rounded-2xl shadow-sm border">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600">Total Users</p>
//                   <p className="text-3xl font-bold text-gray-800">1,248</p>
//                 </div>
//                 <div className="text-3xl text-blue-500">👥</div>
//               </div>
//               <p className="text-sm text-green-500 mt-2">↑ 12% from last month</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl shadow-sm border">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600">Total Products</p>
//                   <p className="text-3xl font-bold text-gray-800">356</p>
//                 </div>
//                 <div className="text-3xl text-green-500">🛒</div>
//               </div>
//               <p className="text-sm text-green-500 mt-2">↑ 8% from last month</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl shadow-sm border">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600">Total Orders</p>
//                   <p className="text-3xl font-bold text-gray-800">892</p>
//                 </div>
//                 <div className="text-3xl text-yellow-500">📦</div>
//               </div>
//               <p className="text-sm text-green-500 mt-2">↑ 23% from last month</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl shadow-sm border">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600">Revenue</p>
//                   <p className="text-3xl font-bold text-gray-800">$24,568</p>
//                 </div>
//                 <div className="text-3xl text-purple-500">💰</div>
//               </div>
//               <p className="text-sm text-green-500 mt-2">↑ 18% from last month</p>
//             </div>
//           </div>

//           {/* Tab content */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm border">
//             {activeTab === 'users' && (
//               <div>
//                 <h2 className="text-xl font-bold mb-6">User Management</h2>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {users.map((user) => (
//                         <tr key={user.id}>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
//                                 {user.name.charAt(0)}
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joinDate}</td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                               user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                             }`}>
//                               {user.status}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                             <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
//                             <button className="text-red-600 hover:text-red-900">Delete</button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'products' && (
//               <div>
//                 <h2 className="text-xl font-bold mb-6">Product Management</h2>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {products.map((product) => (
//                         <tr key={product.id}>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm font-medium text-gray-900">{product.name}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                               product.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                             }`}>
//                               {product.status}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                             <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
//                             <button className="text-red-600 hover:text-red-900">Delete</button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'orders' && (
//               <div>
//                 <h2 className="text-xl font-bold mb-6">Order Management</h2>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {orders.map((order) => (
//                         <tr key={order.id}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.amount}</td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                               order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
//                               order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
//                             }`}>
//                               {order.status}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                             <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
//                             <button className="text-red-600 hover:text-red-900">Cancel</button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'analytics' && (
//               <div>
//                 <h2 className="text-xl font-bold mb-6">Analytics Dashboard</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
//                     <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
//                     <div className="h-64 flex items-center justify-center">
//                       <p className="text-gray-500">Sales chart would be displayed here</p>
//                     </div>
//                   </div>
//                   <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
//                     <h3 className="text-lg font-semibold mb-4">User Growth</h3>
//                     <div className="h-64 flex items-center justify-center">
//                       <p className="text-gray-500">User growth chart would be displayed here</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'settings' && (
//               <div>
//                 <h2 className="text-xl font-bold mb-6">System Settings</h2>
//                 <div className="space-y-6">
//                   <div className="bg-gray-50 p-6 rounded-2xl">
//                     <h3 className="text-lg font-semibold mb-4">General Settings</h3>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
//                         <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue="ZohaibStore" />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Store Email</label>
//                         <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue="admin@zohaibstore.com" />
//                       </div>
//                       <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save Changes</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'dashboard' && (
//               <div>
//                 <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
//                 <div className="space-y-4">
//                   <div className="flex items-center p-4 bg-blue-50 rounded-2xl">
//                     <div className="bg-blue-100 p-3 rounded-full mr-4">🛒</div>
//                     <div>
//                       <p className="font-medium">New order received</p>
//                       <p className="text-sm text-gray-600">Order #1025 for $125.99</p>
//                     </div>
//                     <div className="ml-auto text-sm text-gray-500">2 hours ago</div>
//                   </div>
//                   <div className="flex items-center p-4 bg-green-50 rounded-2xl">
//                     <div className="bg-green-100 p-3 rounded-full mr-4">👥</div>
//                     <div>
//                       <p className="font-medium">New user registered</p>
//                       <p className="text-sm text-gray-600">Sarah Johnson joined the store</p>
//                     </div>
//                     <div className="ml-auto text-sm text-gray-500">5 hours ago</div>
//                   </div>
//                   <div className="flex items-center p-4 bg-yellow-50 rounded-2xl">
//                     <div className="bg-yellow-100 p-3 rounded-full mr-4">📦</div>
//                     <div>
//                       <p className="font-medium">Low stock alert</p>
//                       <p className="text-sm text-gray-600">Running Shoes is running low on stock</p>
//                     </div>
//                     <div className="ml-auto text-sm text-gray-500">1 day ago</div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>

//       {/* Logout Confirmation Modal */}
//       {showLogoutConfirm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl w-96">
//             <h3 className="text-xl font-bold mb-4">Confirm Logout</h3>
//             <p className="text-gray-600 mb-6">Are you sure you want to logout from admin panel?</p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={cancelLogout}
//                 className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//               >
//                 Sure, Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;



// src/app/admin/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { 
  Users, 
  ShoppingBag, 
  Package, 
  BarChart3, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye,
  Undo,
  Search,
  Filter,
  Download,
  Upload,
  X,
  Database,
  RefreshCw
} from 'lucide-react';

// Database simulation (in real app, this would be API calls)
const simulateDatabase = {
  users: [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', joinDate: '2023-01-15', status: 'Active', orders: 12, spent: 458.50 },
    { id: 2, name: 'Michael Chen', email: 'michael@example.com', joinDate: '2023-02-20', status: 'Active', orders: 8, spent: 289.99 },
  ],
  products: [
    { id: 1, name: 'Classic Cotton T-Shirt', price: 29.99, stock: 45, category: 'Clothing', status: 'Published', sales: 124 },
    { id: 2, name: 'Wireless Headphones', price: 129.99, stock: 12, category: 'Electronics', status: 'Published', sales: 89 },
  ],
  orders: [
    { id: 1001, customer: 'Sarah Johnson', date: '2023-05-15', amount: 159.98, status: 'Delivered', items: 3 },
    { id: 1002, customer: 'Michael Chen', date: '2023-05-16', amount: 89.99, status: 'Processing', items: 1 },
  ],
  deletedItems: []
};

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    users: [],
    products: [],
    orders: [],
    deletedItems: []
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    image: ''
  });
  const router = useRouter();

  // Load data from localStorage or initialize
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const savedData = localStorage.getItem('adminData');
      if (savedData) {
        setData(JSON.parse(savedData));
      } else {
        // Initialize with sample data
        setData(simulateDatabase);
        localStorage.setItem('adminData', JSON.stringify(simulateDatabase));
      }
      setIsLoading(false);
    }, 500);
  };

  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem('adminData', JSON.stringify(newData));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'ali' && password === 'ali') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      setLoginError('');
      loadData();
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    router.push('/');
  };

  // CRUD Operations
  const addProduct = (e) => {
    e.preventDefault();
    const newProductData = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
      category: newProduct.category,
      status: 'Published',
      sales: 0,
      image: newProduct.image || '/api/placeholder/300/300'
    };

    const updatedData = {
      ...data,
      products: [...data.products, newProductData]
    };

    saveData(updatedData);
    setShowAddProduct(false);
    setNewProduct({ name: '', price: '', stock: '', category: '', image: '' });
  };

  const deleteItem = (type, id) => {
    const item = data[type].find(item => item.id === id);
    const updatedData = {
      ...data,
      [type]: data[type].filter(item => item.id !== id),
      deletedItems: [...data.deletedItems, { ...item, type, deletedAt: new Date().toISOString() }]
    };

    saveData(updatedData);
  };

  const restoreItem = (index) => {
    const itemToRestore = data.deletedItems[index];
    const updatedData = {
      ...data,
      [itemToRestore.type]: [...data[itemToRestore.type], itemToRestore],
      deletedItems: data.deletedItems.filter((_, i) => i !== index)
    };

    saveData(updatedData);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedData = {
      ...data,
      orders: data.orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    };

    saveData(updatedData);
  };

  // Filter data based on search query
  const filteredData = {
    users: data.users.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    products: data.products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    orders: data.orders.filter(order => 
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    deletedItems: data.deletedItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  };

  // Login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm">
        <Head>
          <title>Admin Login - ZohaibStore</title>
        </Head>
        
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96 border border-white/30">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Portal
            </h1>
            <p className="text-gray-600 mt-2">Sign in to access the dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent bg-white/50 backdrop-blur-sm"
                placeholder="Enter username"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent bg-white/50 backdrop-blur-sm"
                placeholder="Enter password"
                required
              />
            </div>
            
            {loginError && (
              <div className="text-red-500 text-sm text-center bg-red-50/50 p-2 rounded-lg">{loginError}</div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500 bg-gray-50/50 p-3 rounded-lg">
            <p>Demo credentials:</p>
            <p>username: <strong>ali</strong></p>
            <p>password: <strong>ali</strong></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-sm">
      <Head>
        <title>Admin Dashboard - ZohaibStore</title>
      </Head>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <button 
              onClick={loadData}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw size={18} />
              <span className="text-sm">Refresh</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 hidden md:block">Welcome, Admin</span>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-xl hover:from-red-600 hover:to-orange-600 transition-all flex items-center space-x-2"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white/80 backdrop-blur-md h-screen shadow-sm border-r border-gray-200/50 sticky top-16">
          <nav className="p-4">
            <ul className="space-y-1">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={20} /> },
                { id: 'users', label: 'Users', icon: <Users size={20} /> },
                { id: 'products', label: 'Products', icon: <ShoppingBag size={20} /> },
                { id: 'orders', label: 'Orders', icon: <Package size={20} /> },
                { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
                { id: 'recycle', label: 'Recycle Bin', icon: <Trash2 size={20} /> },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-3 transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-100/50 text-blue-700 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100/50'
                    }`}
                  >
                    <span className="text-blue-500">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content area */}
        <main className="flex-1 p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {/* Stats overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { number: data.users.length, label: "Total Users", icon: <Users size={24} /> },
                  { number: data.products.length, label: "Total Products", icon: <ShoppingBag size={24} /> },
                  { number: data.orders.length, label: "Total Orders", icon: <Package size={24} /> },
                  { number: `$${data.orders.reduce((total, order) => total + order.amount, 0).toFixed(2)}`, label: "Total Revenue", icon: <BarChart3 size={24} /> },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1">{stat.number}</p>
                      </div>
                      <div className="text-blue-500 bg-blue-100/50 p-3 rounded-xl">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Search and filter bar */}
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/30 mb-6 flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent bg-white/50"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="bg-white border border-gray-200/50 px-4 py-2 rounded-xl flex items-center space-x-2 text-gray-700 hover:bg-gray-50/50">
                    <Filter size={18} />
                    <span>Filters</span>
                  </button>
                </div>
              </div>

              {/* Tab content */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white/30 overflow-hidden">
                {activeTab === 'products' && (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-gray-800">Product Management</h2>
                      <button 
                        onClick={() => setShowAddProduct(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors flex items-center space-x-2"
                      >
                        <Plus size={18} />
                        <span>Add Product</span>
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200/50">
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Product</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Price</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Stock</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Category</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-200/30 hover:bg-gray-50/50">
                              <td className="py-4 px-4">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <ShoppingBag size={16} className="text-gray-500" />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                    <div className="text-sm text-gray-500">{product.sales} sold</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-sm text-gray-700">${product.price}</td>
                              <td className="py-4 px-4 text-sm text-gray-700">{product.stock}</td>
                              <td className="py-4 px-4 text-sm text-gray-700">{product.category}</td>
                              <td className="py-4 px-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  product.status === 'Published' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {product.status}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex space-x-2">
                                  <button className="text-blue-600 hover:text-blue-800 p-1">
                                    <Edit3 size={16} />
                                  </button>
                                  <button 
                                    onClick={() => deleteItem('products', product.id)}
                                    className="text-red-600 hover:text-red-800 p-1"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Order Management</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200/50">
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Order ID</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Customer</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Amount</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.orders.map((order) => (
                            <tr key={order.id} className="border-b border-gray-200/30 hover:bg-gray-50/50">
                              <td className="py-4 px-4 text-sm font-medium text-gray-900">#{order.id}</td>
                              <td className="py-4 px-4 text-sm text-gray-700">{order.customer}</td>
                              <td className="py-4 px-4 text-sm text-gray-700">{order.date}</td>
                              <td className="py-4 px-4 text-sm text-gray-700">${order.amount}</td>
                              <td className="py-4 px-4">
                                <select
                                  value={order.status}
                                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                  className={`px-3 py-1 rounded-full text-xs font-medium border-0 focus:ring-2 focus:ring-blue-500/50 ${
                                    order.status === 'Delivered' 
                                      ? 'bg-green-100 text-green-800' 
                                      : order.status === 'Shipped' 
                                      ? 'bg-blue-100 text-blue-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}
                                >
                                  <option value="Processing">Processing</option>
                                  <option value="Shipped">Shipped</option>
                                  <option value="Delivered">Delivered</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex space-x-2">
                                  <button className="text-blue-600 hover:text-blue-800 p-1">
                                    <Eye size={16} />
                                  </button>
                                  <button 
                                    onClick={() => deleteItem('orders', order.id)}
                                    className="text-red-600 hover:text-red-800 p-1"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'recycle' && (
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Recycle Bin</h2>
                    {filteredData.deletedItems.length === 0 ? (
                      <div className="text-center py-12 text-gray-500">
                        <Trash2 size={48} className="mx-auto mb-4 text-gray-300" />
                        <p>No items in recycle bin</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200/50">
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Item</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Type</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Deleted At</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredData.deletedItems.map((item, index) => (
                              <tr key={index} className="border-b border-gray-200/30 hover:bg-gray-50/50">
                                <td className="py-4 px-4">
                                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                  <div className="text-sm text-gray-500">{item.type}</div>
                                </td>
                                <td className="py-4 px-4 text-sm text-gray-700 capitalize">{item.type}</td>
                                <td className="py-4 px-4 text-sm text-gray-700">
                                  {new Date(item.deletedAt).toLocaleDateString()}
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex space-x-2">
                                    <button 
                                      onClick={() => restoreItem(index)}
                                      className="text-green-600 hover:text-green-800 p-1 flex items-center space-x-1"
                                    >
                                      <Undo size={16} />
                                      <span className="text-sm">Restore</span>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'dashboard' && (
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                      {data.orders.slice(0, 5).map((order) => (
                        <div key={order.id} className="flex items-center p-4 bg-blue-50/50 rounded-2xl border border-blue-100/30">
                          <div className="bg-blue-100/50 p-3 rounded-xl mr-4 text-blue-600">
                            <Package size={20} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">New order from {order.customer}</p>
                            <p className="text-sm text-gray-600">Order #{order.id} for ${order.amount}</p>
                          </div>
                          <div className="text-sm text-gray-500">{order.date}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-md w-full shadow-xl border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Add New Product</h3>
              <button 
                onClick={() => setShowAddProduct(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={addProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                <input
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="url"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowAddProduct(false)}
                  className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;