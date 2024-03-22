
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import StatefulForm from './StatefulForm/StatefulForm'
// import RefForm from "./components/RefForm/RefForm"


function App() {
    const handleSingUpSubmit = data =>{
      console.log('sign up data', data)
  }
  const handleUpdateProfile = data =>{
    console.log('update profile', data);
  }
  return (
    <>
      {/* <h1>Simple Form Submit</h1>
      <StatefulForm/> */}
      {/* <RefForm/> */}
      {/* <HookForm/> */}
      <ReusableForm 
      formTitle={'Sign Up'} 
      handleSubmit={handleSingUpSubmit}>
      <div>
        <h2>Sing Up</h2>
        <p>please sign up right</p>
      </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile}>
      <h2>Update profile</h2>
      <p>Always keep your profile update</p>
      </ReusableForm>
    </>
  )
}

export default App
