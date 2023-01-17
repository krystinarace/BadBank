function Spa(){
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{currentUser:0, users:[{name:'Sample',email:'user@sample.com',password:'password',balance: 100}]}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/deposit/" exact component={Deposit} />
            <Route path="/withdraw/" exact component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
            </UserContext.Provider>
        </HashRouter>   
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)