function ModeToggler() {
    let darkModeON = false;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleClick() {
        darkModeON = !darkModeON;
        if (darkModeON === true) {
            console.log('Dark Mode is On');
        } else {
            console.log('Light Mode is On');
        }
    }

    return (
        <div>
            {darkModeON ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}

export default ModeToggler