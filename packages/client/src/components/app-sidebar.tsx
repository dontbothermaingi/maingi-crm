import {
   Calendar,
   ChevronDown,
   ChevronUp,
   Home,
   Inbox,
   Search,
   Settings,
   User2,
} from 'lucide-react';

import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

// Menu items.
const items = [
   {
      title: 'Home',
      url: '#',
      icon: Home,
   },
   {
      title: 'Inbox',
      url: '#',
      icon: Inbox,
   },
   {
      title: 'Calendar',
      url: '#',
      icon: Calendar,
   },
   {
      title: 'Search',
      url: '#',
      icon: Search,
   },
   {
      title: 'Settings',
      url: '#',
      icon: Settings,
   },
];

export function AppSidebar() {
   return (
      <Sidebar variant="floating">
         <SidebarContent>
            <Collapsible defaultOpen className="group/collapsible">
               <SidebarGroup>
                  <SidebarGroupLabel className="text-md">
                     <CollapsibleTrigger className="flex justify-between w-full">
                        Maingi Books
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                     </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                     <SidebarGroupContent>
                        <SidebarMenu>
                           {items.map((item) => (
                              <SidebarMenuItem key={item.title}>
                                 <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                       <item.icon />
                                       <span>{item.title}</span>
                                    </a>
                                 </SidebarMenuButton>
                              </SidebarMenuItem>
                           ))}
                        </SidebarMenu>
                     </SidebarGroupContent>
                  </CollapsibleContent>
               </SidebarGroup>
            </Collapsible>
         </SidebarContent>
         <SidebarFooter>
            <SidebarMenu className="">
               <SidebarMenuItem>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                           <User2 /> Username
                           <ChevronUp className="ml-auto" />
                        </SidebarMenuButton>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent
                        side="top"
                        className="bg-white w-51 p-2 mb-2 rounded-md shadow-xl border border-gray-800 flex flex-col gap-1"
                     >
                        <DropdownMenuItem>
                           <span className="text-sm">Account</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           <span className="text-sm">Billing</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           <span className="text-sm">Sign out</span>
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarFooter>
      </Sidebar>
   );
}
