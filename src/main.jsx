import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './ProviedrsOrContext/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  //  এই authProvider টাকে overall file এ পেতে চাই  তাহলে main.jsx এ provide করতে হবে। অর্থাৎ AuthProvider এর মধ্যে যা আছে (children) সেটা AuthContext এর provider এর ভিতরে থাকবে। অতঃপর authInfo তে যা বসাবো বাকিরা সবাই পেয়ে যাবে।
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
