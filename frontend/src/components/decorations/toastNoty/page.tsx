'use client';

import { Toaster } from 'react-hot-toast';

export const ToastNoty = () => {
  return (
    <div style={{ position: "relative" }}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
    </div>
  );
};