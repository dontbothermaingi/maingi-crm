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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff } from 'lucide-react'; // for visibility toggle

type LoginProps = {
   onLogin: (data: any) => void; // replace `any` with the proper type if you know the API response
};

export function Login({ onLogin }: LoginProps) {
   const [formData, setFormData] = useState({
      username: '',
      password: '',
   });
   const [error, setError] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
         const response = await fetch(
            'https://maingi-server-3.onrender.com/userLogin',
            {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               credentials: 'include',
               body: JSON.stringify(formData),
            }
         );

         if (!response.ok) {
            throw new Error('Network response was not ok');
         }

         const data = await response.json();
         onLogin(data);
         navigate('/');
      } catch (err) {
         if (err instanceof Error) {
            setError(err.message);
         } else {
            setError('An unexpected error occurred');
         }
      }
   };

   const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
   };

   return (
      <Card className="w-full max-w-sm">
         <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
               Enter your email below to login to your account
            </CardDescription>
            <CardAction>
               <Button variant="link">Sign Up</Button>
            </CardAction>
         </CardHeader>

         <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
               <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                     id="username"
                     name="username"
                     type="text"
                     value={formData.username}
                     onChange={handleChange}
                     placeholder="m@example.com"
                     required
                  />
               </div>

               <div className="grid gap-2">
                  <div className="flex items-center">
                     <Label htmlFor="password">Password</Label>
                     <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                     >
                        Forgot your password?
                     </a>
                  </div>
                  <div className="relative">
                     <Input
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        required
                     />
                     <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-2 text-gray-500"
                     >
                        {showPassword ? (
                           <EyeOff size={18} />
                        ) : (
                           <Eye size={18} />
                        )}
                     </button>
                  </div>
               </div>

               {error && <p className="text-red-500 text-sm">{error}</p>}

               <Button type="submit" className="w-full">
                  Login
               </Button>
            </form>
         </CardContent>

         <CardFooter className="flex-col gap-2">
            <Button variant="outline" className="w-full">
               Login with Google
            </Button>
         </CardFooter>
      </Card>
   );
}
