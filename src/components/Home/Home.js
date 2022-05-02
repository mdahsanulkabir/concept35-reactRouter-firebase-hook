import useUsers from '../../Hook/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const Home = () => {
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users');

    if(usersData.length){
        usersData.length = 4;
    }

    return (
        <div className='container'>
            <h2>Total users = {usersData.length}</h2>
            <div className='row'>
                {
                    usersData?.map(user => <SingleUser 
                    key={user.id}
                    user={user}
                    ></SingleUser>)
                }
            </div>
        </div>
    );
};

export default Home;