import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Dashboard1({ auth }) {
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
    backgroundColor: 'black',
    color: 'white',
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
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
            <h2 className="text-2xl font-extrabold text-blue-400 text-center">Create Your Profile And Start Raising Funds</h2><br></br>
            </div>
            <div  style={containerStyle}>
            <Link href="/OrganiserRegistrationForm">
                                    <button style={buttonStyle}>Create Your Profile</button>
                                </Link></div>
           
        </AuthenticatedLayout>
    );
}
