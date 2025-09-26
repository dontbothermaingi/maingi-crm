import {
   Bolt,
   Calendar,
   ChevronDown,
   ChevronUp,
   Disc,
   Fuel,
   Home,
   Inbox,
   LayoutDashboard,
   PiggyBank,
   Receipt,
   Search,
   Settings,
   ShoppingCart,
   Store,
   Truck,
   User2,
   Wallet,
   Wrench,
} from 'lucide-react';

import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSub,
   SidebarMenuSubItem,
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
         {/* Sidebar header */}
         <SidebarHeader className="text-2xl border-b">
            Maingi Books
         </SidebarHeader>

         {/* Sidebar content */}
         <SidebarContent>
            <SidebarMenu>
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <LayoutDashboard /> Dashboard
                  </SidebarMenuButton>
               </SidebarMenuItem>

               {/* Vehicles */}
               <Collapsible>
                  <SidebarMenuItem>
                     <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                           <Truck /> Vehicles
                           <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                        <SidebarMenuSub>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>
                                 View Vehicles
                              </SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>
                                 Vehicle Fuel Report
                              </SidebarMenuButton>
                           </SidebarMenuSubItem>
                        </SidebarMenuSub>
                     </CollapsibleContent>
                  </SidebarMenuItem>
               </Collapsible>

               {/* Sales */}
               <Collapsible>
                  <SidebarMenuItem>
                     <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                           <Receipt /> Sales
                           <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                        <SidebarMenuSub>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>Customers</SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>Invoices</SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>Credit Note</SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>Quote</SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>
                                 Delivery Note
                              </SidebarMenuButton>
                           </SidebarMenuSubItem>
                        </SidebarMenuSub>
                     </CollapsibleContent>
                  </SidebarMenuItem>
               </Collapsible>

               {/* Purchases */}
               <Collapsible>
                  <SidebarMenuItem>
                     <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                           <ShoppingCart /> Purchases
                           <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                        <SidebarMenuSub>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>Vendors</SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>Bills</SidebarMenuButton>
                           </SidebarMenuSubItem>
                        </SidebarMenuSub>
                     </CollapsibleContent>
                  </SidebarMenuItem>
               </Collapsible>

               {/* Vehicles */}
               <Collapsible>
                  <SidebarMenuItem>
                     <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                           <Wallet /> Banking
                           <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                        <SidebarMenuSub>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>
                                 Payments Received
                              </SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>
                                 Payments Made
                              </SidebarMenuButton>
                           </SidebarMenuSubItem>
                        </SidebarMenuSub>
                     </CollapsibleContent>
                  </SidebarMenuItem>
               </Collapsible>

               {/* Fuel Manager */}
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <Fuel /> Fuel Manager
                  </SidebarMenuButton>
               </SidebarMenuItem>

               {/* Fuel Manager */}
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <Bolt /> Spares
                  </SidebarMenuButton>
               </SidebarMenuItem>

               {/* Vehicle Repair */}
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <Wrench /> Vehicle repair
                  </SidebarMenuButton>
               </SidebarMenuItem>

               {/* Stores */}
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <Store /> Stores
                  </SidebarMenuButton>
               </SidebarMenuItem>

               {/* Tyres */}
               <Collapsible>
                  <SidebarMenuItem>
                     <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                           <Disc /> Tyres
                           <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                        <SidebarMenuSub>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>New Tyres</SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>Used Tyres</SidebarMenuButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuButton>
                                 Retread Tyres
                              </SidebarMenuButton>
                           </SidebarMenuSubItem>
                        </SidebarMenuSub>
                     </CollapsibleContent>
                  </SidebarMenuItem>
               </Collapsible>
            </SidebarMenu>
         </SidebarContent>

         {/* Sidebar Footer */}
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
