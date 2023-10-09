"use client";
import { logIn, logOut } from "@/app/features/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/app/features/hooks";

export interface INavbarProps {
}

export default function Navbar (props: INavbarProps) {
    const dispatch = useAppDispatch()
    const {isLoggedIn, username} = useAppSelector(state => state.auth)
  return (
    <nav className="bg-stone-900 w-full p-3">
        <div className="flex text-white justify-between">
            <h1 className="">Home</h1>
            {isLoggedIn ?
              <div className="flex justify-around">
                  <button className="px-3">{username}</button>
                  <button className="px-3" onClick={() => dispatch(logOut())}>Logout</button>
              </div>
              :
              <div className="flex justify-around">
                <button className="px-3" onClick={() => dispatch(logIn({username: 'Pavithran', id: ''}))}>Login</button>
                <button className="px-3">Sign Up</button>
              </div>
            }
        </div>
    </nav>
  );
}
