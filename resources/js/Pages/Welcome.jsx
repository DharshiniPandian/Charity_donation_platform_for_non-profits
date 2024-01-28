import { Link, Head } from '@inertiajs/react';
import "./Welcome.css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div >
                <div >
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}

                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}

                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}

                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

            </div>


        </>
    );
}
