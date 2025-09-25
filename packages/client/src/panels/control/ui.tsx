import { SidebarProvider } from '@/components/ui/sidebar';
import Topbar from './topbar';
import { AppSidebar } from '@/components/app-sidebar';

function Ui() {
   return (
      <SidebarProvider>
         <div className="flex h-screen w-full">
            {/* Sidebar area */}
            <AppSidebar />

            {/* Main content area */}
            <div className="flex flex-col flex-1">
               <Topbar />
               <main className="flex-1 overflow-y-auto p-4">
                  {/* Your page content goes here */}
               </main>
            </div>
         </div>
      </SidebarProvider>
   );
}

export default Ui;
