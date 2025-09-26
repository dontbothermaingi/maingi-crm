import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/app-sidebar';
import { Route, Routes } from 'react-router';
import Dashboard from './panels/dashboard';
import LoginPage from './panels/control/Authorization/page';
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';

type LoginResponse = {
   access_token: string;
   refresh_token?: string;
   expires_in?: number;
};

function App() {
   function handleLogin(data: LoginResponse) {
      const { access_token } = data;
      localStorage.setItem('access_token', access_token);
   }

   return (
      <Routes>
         {/* Full-page routes */}
         <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

         {/* Layouted routes */}
         <Route
            path="/*"
            element={
               <SidebarProvider>
                  <SidebarProvider>
                     <AppSidebar />
                     <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2">
                           <div className="flex items-center gap-2 px-4">
                              <SidebarTrigger className="-ml-1" />
                              <Separator
                                 orientation="vertical"
                                 className="mr-2 data-[orientation=vertical]:h-4"
                              />
                              <Breadcrumb>
                                 <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                       <BreadcrumbLink href="#">
                                          Building Your Application
                                       </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                       <BreadcrumbPage>
                                          Data Fetching
                                       </BreadcrumbPage>
                                    </BreadcrumbItem>
                                 </BreadcrumbList>
                              </Breadcrumb>
                           </div>
                        </header>
                        <main className="flex-1 overflow-y-auto p-4 h-fit">
                           <Routes>
                              <Route path="/" element={<Dashboard />} />
                              {/* add other dashboard pages here */}
                           </Routes>
                        </main>
                     </SidebarInset>
                  </SidebarProvider>
               </SidebarProvider>
            }
         />
      </Routes>
   );
}

export default App;
