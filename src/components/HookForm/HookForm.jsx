import useInputState from "../../Hooks/useInputSate";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('MS Rahman')
    const emailState = useInputState('msahman048@gmail.com')


    const handleSubmit = e =>{
        e.preventDefault();
        console.log('Form Data', emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* <input
                value={name}
                onChange={handleNameChange}
                type="text" name="name" /> <br /> */}
                <input
                {...emailState}
                type="email" name="email" /> <br />
                <input
                type="password" name="password" required/> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;