import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

function Sidebar() {
   return (
      <div>
         <SidebarProvider>
            <AppSidebar />
         </SidebarProvider>
      </div>
   );
}

export default Sidebar;
