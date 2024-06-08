import "./Dashboard.css";

// eslint-disable-next-line react/prop-types
function Dashboard({ loggedInStatus, user }) {
  return (
    <>
      <h1>Dashboard</h1>
      <h3>Status: {loggedInStatus}</h3>
      <h4>USer: {JSON.stringify(user)}</h4>
    </>
  );
}

export default Dashboard;
