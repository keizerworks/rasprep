import React from 'react'
import { redirect } from 'next/navigation'


export default function page() {
redirect("./dashboard/home")
}


// import Dashboard from "@/components/Dashboard"
// export default function RootLayout({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) {
//     return (
//       <html lang="en">
//         <body>
//             <Dashboard/>
//             </body>
//       </html>
//     );
//   }

//@ts-nocheck
