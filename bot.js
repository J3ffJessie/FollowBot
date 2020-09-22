const config = require('./config');
const twit = require('twit');
const T = new twit(config);

function follow(){
const params = {
    q: '#JavaScript',
    count: 15,
    result_type: 'recent',
    lang: 'en'
};

T.get('search/tweets', params, function(error, data, response){
    if(!error) {
        for (let i = 0; i < data.statuses.length; i++) {
            let screen_name = data.statuses[i].user.screen_name;
            T.post('friendships/create', {screen_name}, function(error, reponse){
                if(error) {
                    console.log(error);
                } else {
                    console.log(screen_name, ': **Followed**');
                }
            });
        }
    } else {
        console.log(error);
    }
})
}

setInterval(follow, 20000);