console.log('Hi! Im the Javascript index!')
pageLoader();



function pageLoader(){
    console.log('Loading the page with functionality')

    // Get the nav links and add the changeView event listener
    const player1_but = document.getElementsByClassName('player1');
    for (let player of player1_but){
        player.addEventListener('click', toGame)
    }

    const goHome = document.getElementsByClassName('home');
    for (let home of goHome){
        home.addEventListener('click', (e) => {toHome(e,game)})
    }
    
    const rollIt = document.getElementsByClassName('roll')
    for (let roll of rollIt){
        roll.addEventListener('click', (e) => {rollDice(e,game)})
    }

    const resetGame = document.getElementsByClassName('reset')
    for (let item of resetGame){
        item.addEventListener('click', (e) => {reset(e,game)})
    }
}


function toGame(event){
    // Turn off the element(s) that are visible
    // console.log('change activated')
    const toTurnOff = document.getElementById('home')
    // console.log('Turning off', toTurnOff);
    toTurnOff.classList.replace('is-visible', 'is-invisible')

    // Turn on the element based on the element clicked
    let idToTurnOn = event.target.name
    // console.log(idToTurnOn)
    const toTurnOn = document.getElementById(idToTurnOn)
    toTurnOn.classList.replace('is-invisible', 'is-visible')
}


function toHome(event, game){
    // Turn off the element(s) that are visible
    // console.log('change activated')
    const toTurnOff = document.getElementById('game1')
    // console.log('Turning off', toTurnOff);
    toTurnOff.classList.replace('is-visible', 'is-invisible')

    // Turn on the element based on the element clicked
    let idToTurnOn = event.target.name
    // console.log(idToTurnOn)
    const toTurnOn = document.getElementById(idToTurnOn)
    toTurnOn.classList.replace('is-invisible', 'is-visible')
}


function rollDice(event, game){
    game.roll()
}


// class GameMemeber{
//     constructor(){
//         this.player_total = 0
//     }
// }

class diceGame{
    constructor(){
        this.limit = 10000
        this.roundScore = 0
        this.playerTotal = 0
    }
    
    scoreRound(turn_roll){
        turn_roll.sort()
        this.roundScore = 0
        let similarContainer = []
        if (turn_roll.join(',') === [1,2,3,4,5,6].join(',')){
            this.roundScore += 1500
        } else {
            for (let die of turn_roll){
                if (die < 6){
                    if (similarContainer.length == 0){
                        similarContainer.unshift(die)
                    } else if (similarContainer[0] == die){
                        similarContainer.unshift(die)
                        if (similarContainer.length == 3){
                            if (similarContainer[0] == 1){
                                this.roundScore  += similarContainer[0] * 1000
                            similarContainer = []
                            } else {
                                this.roundScore  += similarContainer[0] * 100
                            similarContainer = []
                            }
                            
                            }
                    } else {
                        if (similarContainer[0] == 5){
                            for (let num of similarContainer){
                                this.roundScore += num*10
                        }
                        } else if (similarContainer[0] == 1){
                            for (let num of similarContainer){
                                this.roundScore += num*100
                        }
                        }
                        similarContainer = []
                        similarContainer.unshift(die)
                    }
                } else {
                    if (similarContainer[0] == 1 || similarContainer[0] == 5){
                        for (let num of similarContainer){
                            this.roundScore += num*10
                    }
                    }
                    similarContainer = []
                }   
            }
            if (similarContainer[0] == 1 || similarContainer[0] == 5){
                for (let num of similarContainer){
                    this.roundScore += num*10
            }
            }
            }
        this.playerTotal += this.roundScore
        this.displayRoll(turn_roll)
        if (this.playerTotal >= this.limit){
            setTimeout(() => {
                alert("YoU'rE a WiNnEr!")
           }, 100);
           this.playerTotal = 0
        }
        } 
        
    chooseImage(num){
        if (num == 1){
            return 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Terning1.svg'
        } else if (num == 2){
            return 'https://upload.wikimedia.org/wikipedia/commons/2/22/Terning2.svg'
        } else if (num == 3){
            return 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Terning3.svg'
        } else if (num == 4){
            return 'https://upload.wikimedia.org/wikipedia/commons/2/23/Terning4.svg'
        } else if (num == 5){
            return 'https://upload.wikimedia.org/wikipedia/commons/2/23/Terning5.svg'
        } else if (num == 6){
            return 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Terning6.svg'
        }
    }
    
    displayRoll(turn_roll){ 
        let d1 = document.getElementById('d1')
        d1.innerHTML = '';
        let d1_img = document.createElement('img');
        d1_img.src = this.chooseImage(turn_roll[0]);
        d1.append(d1_img);

        let d2 = document.getElementById('d2')
        d2.innerHTML = '';
        let d2_img = document.createElement('img');
        d2_img.src = this.chooseImage(turn_roll[1]);
        d2.append(d2_img);

        let d3 = document.getElementById('d3')
        d3.innerHTML = '';
        let d3_img = document.createElement('img');
        d3_img.src = this.chooseImage(turn_roll[2]);
        d3.append(d3_img);

        let d4 = document.getElementById('d4')
        d4.innerHTML = '';
        let d4_img = document.createElement('img');
        d4_img.src = this.chooseImage(turn_roll[3]);
        d4.append(d4_img);

        let d5 = document.getElementById('d5')
        d5.innerHTML = '';
        let d5_img = document.createElement('img');
        d5_img.src = this.chooseImage(turn_roll[4]);
        d5.append(d5_img);

        let d6 = document.getElementById('d6')
        d6.innerHTML = '';
        let d6_img = document.createElement('img');
        d6_img.src = this.chooseImage(turn_roll[5]);
        d6.append(d6_img);

        let rs = document.getElementById('roundScore')
        rs.innerHTML = '';
        let rsScore = document.createElement('h1')
        rsScore.innerHTML = this.roundScore
        rs.append(rsScore)

        let ts = document.getElementById('totalScore')
        ts.innerHTML = '';
        let tsScore = document.createElement('h1')
        tsScore.innerHTML = this.playerTotal
        ts.append(tsScore)
        
    }

    
    roll(){
        let turn_roll = []
        let getRandomNumber = () => Math.floor(Math.random() * 6) + 1;
        for (let i = 0; i < 6; i++){
            turn_roll.unshift(getRandomNumber())
        }
        this.scoreRound(turn_roll)
    }

}

function reset(event, game){
    game.roundScore = 0
    game.playerTotal = 0
    game.displayRoll([1,5,1,5,1,5])
}

let game = new diceGame()
game.displayRoll([1,5,1,5,1,5])