import "./Dashboard.css";

// eslint-disable-next-line react/prop-types
function Dashboard({ user }) {
  return (
    <>
      <h1>Dashboard</h1>
      <h4>USer: {JSON.stringify(user)}</h4>
    </>
  );
}

export default Dashboard;
