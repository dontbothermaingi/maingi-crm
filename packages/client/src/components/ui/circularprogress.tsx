type CircularProgressProps = {
   size?: number; // diameter in px
   strokeWidth?: number;
   progress: number; // 0 to 100
   circleColor?: string;
   progressColor?: string;
};

export function CircularProgress({
   size = 100,
   strokeWidth = 12,
   progress,
}: CircularProgressProps) {
   const radius = (size - strokeWidth) / 2;
   const circumference = 2 * Math.PI * radius;
   const offset = circumference - (progress / 100) * circumference;

   return (
      <div className="flex justify-center items-center">
         <svg width={size} height={size}>
            {/* Background circle */}
            <circle
               stroke="#e5e7eb" // Tailwind gray-200
               fill="transparent"
               strokeWidth={strokeWidth}
               r={radius}
               cx={size / 2}
               cy={size / 2}
            />
            {/* Progress circle */}
            <circle
               stroke="#ff2056" // Tailwind blue-500
               fill="transparent"
               strokeWidth={strokeWidth}
               r={radius}
               cx={size / 2}
               cy={size / 2}
               strokeDasharray={circumference}
               strokeDashoffset={offset}
               strokeLinecap="round"
               transform={`rotate(-90 ${size / 2} ${size / 2})`} // start from top
            />
         </svg>
         <div className="absolute flex flex-col items-center">
            <p className="text-lg">{Math.floor(progress)}%</p>
            <p className="text-sm font-light">Fuel</p>
         </div>
      </div>
   );
}
