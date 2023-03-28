import axios from "axios";
import { FormEvent, useState } from "react";
import { Form } from "react-bootstrap";

export interface SignUpProps{
    setShowLogIn:(showLogIn: boolean) => void;
}


export const signUserUp =async (email:string, password:string):Promise<boolean> => {
    let response = await axios.post('user/',{
        email : email,
        password : password
    })
    return response.data.success
}


export const SignUp: React.FC<SignUpProps> = ({setShowLogIn}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const signMeUp =async (event:FormEvent) => {
        event.preventDefault();
        setShowLogIn(await signUserUp(email, password))
    }

    return(
        <div 
        className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => signMeUp(e)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Email address"
                            value={email}
                            onChange = {(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                            Password
                            </label>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        </div>

                        <div onClick={()=>setShowLogIn(true)} className="text-sm">
                            <a href="#"  className="font-medium text-indigo-600 hover:text-indigo-500">
                                Already have an account? Go and Sign In!
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            </span>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}