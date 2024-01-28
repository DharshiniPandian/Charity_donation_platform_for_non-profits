import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '7xl',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
    };

    const buttonStyle = {
        backgroundColor: 'white',
        color: 'steelblue', 
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };
    

    return (
        <div className='bg-blue-130'>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
               
            </div>
            <h2 className="text-2xl text-center font-extrabold text-black">View NGOs to start donating!</h2>
<br></br>
            <div style={containerStyle}>
                    <Link href="/FundProviderRegistrationForm">
                        <button style={buttonStyle}>Show NGOs</button>
                    </Link>
                </div>
        </AuthenticatedLayout></div>
    );
}
