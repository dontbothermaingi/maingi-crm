import { Button } from '@/components/ui/button';
import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { ChartAreaInteractive } from '@/components/ui/chart-area-interactive';
import { CircularProgress } from '@/components/ui/circularprogress';
import { SectionCards } from '@/components/ui/section-cards';
import { useQuery } from '@tanstack/react-query';

function Dashboard() {
   const access_token = localStorage.getItem('access_token');

   const {
      data: pumps,
      isLoading,
      error,
   } = useQuery({
      queryKey: ['pumps'],
      queryFn: async () => {
         const response = await fetch(
            'https://maingi-server-3.onrender.com/pumpnames',
            {
               credentials: 'include',
               headers: {
                  Authorization: `Bearer ${access_token}`,
               },
               method: 'GET',
            }
         );
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         return response.json();
      },
   });

   if (isLoading) return <p>Loading pumps...</p>;
   if (error) return <p>Error loading pumps</p>;

   return (
      <div className="flex flex-1 flex-col">
         <div className="flex flex-col lg:flex-row gap-4 px-2 lg:px-6 pb-6">
            {pumps?.map((item: any, index: number) => (
               <Card
                  key={index}
                  className="relative lg:w-100 h-fit overflow-hidden shadow-lg"
               >
                  {/* Background image on right half */}
                  <div className="absolute inset-5 bg-[url('/fuel.jpg')] bg-no-repeat bg-contain bg-right opacity-10 h-70 -mr-30" />

                  {/* Card content */}
                  <div className="relative z-10 p-4">
                     <CardHeader>
                        <CardTitle>{item.pump_name}</CardTitle>
                        <CardDescription>{item.fuel_type}</CardDescription>
                        <CardAction>
                           <Button>View</Button>
                        </CardAction>
                     </CardHeader>
                     <CardContent className="flex justify-left py-5">
                        <CircularProgress
                           progress={
                              item.pump_name === 'PUMP B'
                                 ? (item.litres * 100) / 12000
                                 : (item.litres * 100) / 32000
                           }
                        />
                     </CardContent>
                     <CardFooter>
                        <div className="flex flex-col gap-2">
                           <p>
                              Pump Reading:{' '}
                              {new Intl.NumberFormat().format(item.reading)}
                           </p>
                           <hr />
                           <p>
                              Capacity:{' '}
                              {new Intl.NumberFormat().format(item.litres)} /{' '}
                              {item.pump_name === 'PUMP B'
                                 ? new Intl.NumberFormat().format(12000)
                                 : new Intl.NumberFormat().format(32000)}{' '}
                              Litres
                           </p>
                        </div>
                     </CardFooter>
                  </div>
               </Card>
            ))}
         </div>

         <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-2">
               {/* <SectionCards /> */}
               <div className="px-2 lg:px-6">
                  <ChartAreaInteractive />
               </div>
               {/* <DataTable data={data} /> */}
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
