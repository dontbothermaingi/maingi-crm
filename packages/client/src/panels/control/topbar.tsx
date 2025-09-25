import { SidebarTrigger } from '@/components/ui/sidebar';

function Topbar() {
   return (
      <div className="w-full flex items-center justify-between border-b px-2 py-2 lg:py-1 lg:px-10">
         <h1 className="text-2xl">Maingi Books</h1>

         <SidebarTrigger className="visible lg:hidden" />
      </div>
   );
}

export default Topbar;
