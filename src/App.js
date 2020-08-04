import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.endpoints = [
            "https://propets-searcher.herokuapp.com",

            "https://propets-notification-com.herokuapp.com",

            "https://propets-converter-for-notific.herokuapp.com",

            "https://propets-favourites-activity.herokuapp.com",

            "https://propets-dispatcher.herokuapp.com/",


            "https://propets-app.herokuapp.com/",

            "https://propets-messaging.herokuapp.com/",

            "https://propets-config-server.herokuapp.com/",

            "https://propets-lostfound.herokuapp.com/",

            "https://protest-accounting.herokuapp.com/",

            "https://wake-up-services.herokuapp.com"


        ]
    }
    fetchToHeroku=()=>{

    this.endpoints.forEach(e=>{

            fetch(e).then();
    })
    };

    render() {
        return (

            <button onClick={this.fetchToHeroku}
                    type="button">wake up my services!</button>


        )
    }


}

export default App;
