class Point {
    constructor(x, y) {
        this.x=x;
        this.y=y;
    }
}

class Album {
    constructor(songs, name, link) {
        this.albumSongs = songs;
        this.albumName = name;
        this.albumLink = link;
    }
}

const songs = [
"HOUSTATLANTAVEGAS", "MAKE THEM CRY", "LITTLE BIRDIE", "NICE FOR WHAT", "DREW A PICASSO", "9", "BACKOUTSIDEBOYZ", "IGNANT SHIT", "BIG RINGS", 
"CHICAGO FREESTYLE", "NATIONAL TREASURES", "BURIED ALIVE INTERLUDE", "LIABILITY", "WITH YOU", "TAKE CARE", "OWN IT", "TRUE BESTIE", "WHISPER MY NAME", "FREE SPIRIT", 
"GEN 5", "DREAMS MONEY CAN BUY", "STUCK", "6 MAN", "ENERGY", "PASSIONFRUIT", "RATCHET HAPPY BIRTHDAY", "MOTH BALLS", "BRIAN STEEL", "EVIL WAYS", 
"ONE DANCE", "STORIES ABOUT MY BROTHER", "DEEPER", "USED TO", "POUND CAKE", "STICKY", "STILL HERE", "THE CALM", "MIDDLE OF THE OCEAN", "DEEP POCKETS", 
"GIMME A HUG", "I'M SPENT", "CALLING FOR YOU", "8 OUT OF 10", "DESIRES", "NOKIA", "UNFORGETTABLE", "BRAND NEW", "COME THRU", "MARCH 14", 
"7AM ON BRIDLE PATH", "STAR67", "SLIME YOU OUT", "I'M THE PLUG", "TSU", "KARAOKE", "CAN I", "MAJOR DISTRIBUTION", "CLASSIC", "WAY 2 SEXY", 
"GLOW", "TRUST ISSUES", "MEET YOUR PADRE", "POP STYLE", "THE RIDE", "KMT", "30 FOR 30 FREESTYLE", "VIRGINIA BEACH", "305 TO MY CITY", "WHAT DID I MISS?", 
"RAN TO ATLANTA", "MISS ME", "FREE SMOKE", "7969 SANTA", "NO FRIENDS IN THE INDUSTRY", "SPIN BOUT U", "DUST", "MY SIDE", "LOVE ALL", "WHICH ONE", 
"8AM IN CHARLOTTE", "FIND YOUR LOVE", "ROAD TRIPS", "PAIN 1993", "FAIR TRADE", "SPIDER-MAN SUPERMAN", "JADED", "BLEM", "SOMETHING ABOUT YOU", "PRACTICE", 
"SHOT FOR ME", "6 GOD", "CONNECT", "LORD KNOWS", "WORST BEHAVIOR", "FANCY", "OMW", "REDEMPTION", "HOE PHASE", "UPTOWN", 
"FIRM FRIENDS", "WHEN HE'S GONE", "PORTLAND", "TOOSIE SLIDE", "EMOTIONLESS", "IS THERE MORE", "TUSCAN LEATHER", "GREEDY", "GOOSE AND THE JUICE", "CHAMPAGNE POETRY", 
"THAT'S HOW YOU FEEL", "SLAP THE CITY", "WE'LL BE FINE", "DON'T MATTER TO ME", "HIGH FIVES", "3AM ON GLENWOOD", "MAKE THEM REMEMBER", "WHERE'S YOUR STUFF INTERLUDE", "DOWN HILL", "CELIBACY", 
"AMAZING SHAPE", "HOTLINE BLING", "RICH FLEX", "BBW", "SUMMERS OVER INTERLUDE", "PLOT TWIST", "PAPI'S HOME", "NOTHINGS INTO SOMETHINGS", "YOU ONLY LIVE TWICE", "FROM FLORIDA WITH LOVE", 
"FROM TIME", "DEMONS", "DO NOT DISTURB", "OVER MY DEAD BODY", "GENTLY", "IDGAF", "VIEWS", "BLUE TINT", "PRINCESS", "CHILD'S PLAY", 
"NOVEMBER 18TH", "JUNGLE", "MADONNA", "SHOW ME A GOOD TIME", "D4L", "DON'T WORRY", "CIRCO LOCO", "OUTSIDE TWEAKING", "4422", "SANDRA'S ROSE", 
"CREW LOVE", "WNBA", "HYPE", "4PM IN CALABASAS", "AFTER DARK", "TALK UP", "HOURS IN SILENCE", "GET ALONG BETTER", "JUMPMAN", "SACRIFICES", 
"AWAY FROM HOME", "WESTON ROAD FLOWS", "CURRENTS", "CRYING IN CHANEL", "CHEETAH PRINT", "HEAT OF THE MOMENT", "DIGITAL DASH", "A NIGHT OFF", "SUCCESSFUL", "WHAT WOULD PLUTO DO", 
"MADIBA RIDDIM", "CALLING MY NAME", "10 BANDS", "CHANGE LOCATIONS", "PUSSY & MILLIONS", "SAY WHAT'S REAL", "LOOK WHAT YOU'VE DONE", "SOONER THAN LATER", "BROKE BOYS", "BEST I EVER HAD", 
"NO TELLIN'", "TEENAGE FEVER", "MOB TIES", "PEAK", "GLORIOUS", "IMY2", "ALL THE PARTIES", "CAN'T HAVE EVERYTHING", "TIME FLIES", "NOT YOU TOO", 
"MAKE THEM PAY", "SHUT IT DOWN", "FAKE LOVE", "JORJA INTERLUDE", "HEADLINES", "BBL LOVE INTERLUDE", "DAYLIGHT", "PARIS MORTON MUSIC", "THE RESISTANCE", "BAHAMAS PROMISES", 
"U WITH ME?", "OVERDRIVE", "LITTLE BIT", "FIRE & DESIRE", "PIPE DOWN", "THE LANGUAGE", "INTRO", "FALLING BACK", "TOO MUCH", "SINCE WAY BACK", 
"MAKE THEM KNOW", "LUST FOR LIFE", "CONTROLLA", "DRAFT DAY", "KEEP THE FAMILY CLOSE", "GOD'S PLAN", "SCHOLARSHIPS", "THE REAL HER", "HURRR NOR THURRR", "I GUESS IT'S FUCK ME", 
"WHEN TO SAY WHEN", "COMPANY", "RACE MY MIND", "KNOW YOURSELF", "5AM IN TORONTO", "SUMMER GAMES", "MARVINS ROOM", "MAKE ME PROUD", "SURVIVAL", "UNDER GROUND KINGS", 
"SOMEBODY LOVES ME", "RUSTY INTRO", "JODECI FREESTYLE", "WEDNESDAY NIGHT INTERLUDE", "GIRLS LOVE BEYONCÉ", "ELEVATE", "LIGHT UP", "UP ALL NIGHT", "LET'S CALL IT OFF", "KNIFE TALK", 
"FAITHFUL", "TOO GOOD", "ANOTHER LATE NIGHT", "YEBBA'S HEARTBREAK", "WICK MAN", "PLASTIC BAG", "LEGEND", "JANICE STFU", "FORTWORTH", "FURTHEST THING", 
"DOING IT WRONG", "IN MY FEELINGS", "LASERS", "PRIORITIZING", "Q&A", "ALL ME", "I'M UPSET", "RAINING IN HOUSTON", "WHITE BONE", "MASSIVE", 
"NONSTOP", "FIREWORKS", "FIRST PERSON SHOOTER", "6PM IN NEW YORK", "JUMBOTRON SHIT POPPIN", "NO LONG TALK", "SKEPTA INTERLUDE", "JERSEY", "B'S ON THE TABLE", "N 2 DEEP", 
"OVER", "UNSTOPPABLE", "RED BUTTON", "MORE M'S", "CLUB PARADISE", "RICH BABY DADDY", "ICE MELTS", "DAYS IN THE EAST", "JIMMY COOKS", "FINAL FANTASY", 
"POLAR OPPOSITES", "GRAMMYS", "STARTED FROM THE BOTTOM", "AMEN", "PREACH", "CONGRATULATIONS", "LOSE YOU", "GET IT TOGETHER", "THE REMORSE", "TREACHEROUS TWINS", 
"LIVE FROM THE GUTTER", "GIRLS WANT GIRLS", "YOU BROKE MY HEART", "MEMBERS ONLY", "HYFR", "FEEL NO WAYS", "WU-TANG FOREVER", "THE SHOE FITS", "ON BS", "TEXTS GO GREEN", 
"TIE THAT BINDS", "CECE'S INTERLUDE", "YOU & THE 6", "DIE TRYING", "HOLD ON, WE'RE GOING HOME", "BURNING BRIDGES", "THANK ME NOW", "A KEEPER", "FEAR OF HEIGHTS", "HOW BOUT NOW", 
"CN TOWER", "WAR", "TRIED OUR BEST", "CAMERAS", "2 HARD 4 THE RADIO", "F*****G FANS", "NEW BESTIE", "LOSSES", "GYALCHESTER", "THE MOTION", 
"CAN'T TAKE A JOKE", "PRIVILEGED RAPPERS", "SHABANG", "NOW & FOREVER", "IN THE BIBLE", "DIAMONDS DANCING", "FINESSE", "FOUNTAINS", "I GET LONELY", "LANDED", 
"SMALL TOWN FAME", "SCREW THE WORLD", "PIMMIE'S DILEMMA", "BRIA'S INTERLUDE", "FLIGHT'S BOOKED"
]; 

const so_far_gone_songs = ["LUST FOR LIFE", "HOUSTATLANTAVEGAS", "SUCCESSFUL", "LET'S CALL IT OFF", "NOVEMBER 18TH", "IGNANT SHIT", "A NIGHT OFF", "SAY WHAT'S REAL", "LITTLE BIT", "BEST I EVER HAD", "UNSTOPPABLE", "UPTOWN", "SOONER THAN LATER", "BRIA'S INTERLUDE", "THE CALM", "BRAND NEW", "CONGRATULATIONS"];
const thank_me_later_songs = ["FIREWORKS", "KARAOKE", "THE RESISTANCE", "OVER", "SHOW ME A GOOD TIME", "UP ALL NIGHT", "FANCY", "SHUT IT DOWN", "UNFORGETTABLE", "LIGHT UP", "MISS ME", "CECE'S INTERLUDE", "FIND YOUR LOVE", "THANK ME NOW"];
const take_care_songs = ["OVER MY DEAD BODY", "SHOT FOR ME", "HEADLINES", "CREW LOVE", "TAKE CARE", "MARVINS ROOM", "BURIED ALIVE INTERLUDE", "UNDER GROUND KINGS", "WE'LL BE FINE", "MAKE ME PROUD", "LORD KNOWS", "CAMERAS", "DOING IT WRONG", "THE REAL HER", "LOOK WHAT YOU'VE DONE", "HYFR", "PRACTICE", "THE RIDE"];
const nothing_was_the_same_songs = ["TUSCAN LEATHER", "FURTHEST THING", "STARTED FROM THE BOTTOM", "WU-TANG FOREVER", "OWN IT", "WORST BEHAVIOR", "FROM TIME", "HOLD ON, WE'RE GOING HOME", "CONNECT", "THE LANGUAGE", "305 TO MY CITY", "TOO MUCH", "POUND CAKE", "COME THRU", "ALL ME"];
const if_youre_reading_this_its_too_late_songs = ["LEGEND", "ENERGY", "10 BANDS", "KNOW YOURSELF", "NO TELLIN'", "MADONNA", "6 GOD", "STAR67", "PREACH", "WEDNESDAY NIGHT INTERLUDE", "USED TO", "6 MAN", "NOW & FOREVER", "COMPANY", "YOU & THE 6", "JUNGLE", "6PM IN NEW YORK"];
const what_a_time_to_be_alive_songs = ["DIGITAL DASH", "BIG RINGS", "LIVE FROM THE GUTTER", "DIAMONDS DANCING", "SCHOLARSHIPS", "PLASTIC BAG", "I'M THE PLUG", "CHANGE LOCATIONS", "JUMPMAN", "JERSEY", "30 FOR 30 FREESTYLE"];
const views_songs = ["KEEP THE FAMILY CLOSE", "9", "U WITH ME?", "FEEL NO WAYS", "HYPE", "WESTON ROAD FLOWS", "REDEMPTION", "WITH YOU", "FAITHFUL", "STILL HERE", "CONTROLLA", "ONE DANCE", "GRAMMYS", "CHILD'S PLAY", "POP STYLE", "TOO GOOD", "SUMMERS OVER INTERLUDE", "FIRE & DESIRE", "VIEWS", "HOTLINE BLING"];
const more_life_songs = ["FREE SMOKE", "NO LONG TALK", "PASSIONFRUIT", "JORJA INTERLUDE", "GET IT TOGETHER", "MADIBA RIDDIM", "BLEM", "4422", "GYALCHESTER", "SKEPTA INTERLUDE", "PORTLAND", "SACRIFICES", "NOTHINGS INTO SOMETHINGS", "TEENAGE FEVER", "KMT", "LOSE YOU", "CAN'T HAVE EVERYTHING", "GLOW", "SINCE WAY BACK", "FAKE LOVE", "ICE MELTS", "DO NOT DISTURB"];
const scorpion_songs = ["SURVIVAL", "NONSTOP", "ELEVATE", "EMOTIONLESS", "GOD'S PLAN", "I'M UPSET", "8 OUT OF 10", "MOB TIES", "CAN'T TAKE A JOKE", "SANDRA'S ROSE", "TALK UP", "IS THERE MORE", "PEAK", "SUMMER GAMES", "JADED", "NICE FOR WHAT", "FINESSE", "RATCHET HAPPY BIRTHDAY", "THAT'S HOW YOU FEEL", "BLUE TINT", "IN MY FEELINGS", "DON'T MATTER TO ME", "AFTER DARK", "FINAL FANTASY", "MARCH 14"];
const care_package_songs = ["DREAMS MONEY CAN BUY", "THE MOTION", "HOW BOUT NOW", "TRUST ISSUES", "DAYS IN THE EAST", "DRAFT DAY", "4PM IN CALABASAS", "5AM IN TORONTO", "I GET LONELY", "MY SIDE", "JODECI FREESTYLE", "CLUB PARADISE", "FREE SPIRIT", "HEAT OF THE MOMENT", "GIRLS LOVE BEYONCÉ", "PARIS MORTON MUSIC", "CAN I"];
const dark_lane_demo_tapes_songs = ["DEEP POCKETS", "WHEN TO SAY WHEN", "CHICAGO FREESTYLE", "NOT YOU TOO", "TOOSIE SLIDE", "DESIRES", "TIME FLIES", "LANDED", "D4L", "PAIN 1993", "LOSSES", "FROM FLORIDA WITH LOVE", "DEMONS", "WAR"];
const certified_lover_boy_songs = ["CHAMPAGNE POETRY", "PAPI'S HOME", "GIRLS WANT GIRLS", "IN THE BIBLE", "LOVE ALL", "FAIR TRADE", "WAY 2 SEXY", "TSU", "N 2 DEEP", "PIPE DOWN", "YEBBA'S HEARTBREAK", "NO FRIENDS IN THE INDUSTRY", "KNIFE TALK", "7AM ON BRIDLE PATH", "RACE MY MIND", "FOUNTAINS", "GET ALONG BETTER", "YOU ONLY LIVE TWICE", "IMY2", "F*****G FANS", "THE REMORSE"];
const honestly_nevermind_songs = ["INTRO", "FALLING BACK", "TEXTS GO GREEN", "CURRENTS", "A KEEPER", "CALLING MY NAME", "STICKY", "MASSIVE", "FLIGHT'S BOOKED", "OVERDRIVE", "DOWN HILL", "TIE THAT BINDS", "LIABILITY", "JIMMY COOKS"];
const her_loss_songs = ["RICH FLEX", "MAJOR DISTRIBUTION", "ON BS", "BACKOUTSIDEBOYZ", "PRIVILEGED RAPPERS", "SPIN BOUT U", "HOURS IN SILENCE", "TREACHEROUS TWINS", "CIRCO LOCO", "PUSSY & MILLIONS", "BROKE BOYS", "MIDDLE OF THE OCEAN", "JUMBOTRON SHIT POPPIN", "MORE M'S", "3AM ON GLENWOOD", "I GUESS IT'S FUCK ME"];
const for_all_the_dogs_songs = ["VIRGINIA BEACH", "AMEN", "CALLING FOR YOU", "FEAR OF HEIGHTS", "DAYLIGHT", "FIRST PERSON SHOOTER", "IDGAF", "7969 SANTA", "SLIME YOU OUT", "BAHAMAS PROMISES", "TRIED OUR BEST", "SCREW THE WORLD", "DREW A PICASSO", "MEMBERS ONLY", "WHAT WOULD PLUTO DO", "ALL THE PARTIES", "8AM IN CHARLOTTE", "BBL LOVE INTERLUDE", "GENTLY", "RICH BABY DADDY", "ANOTHER LATE NIGHT", "AWAY FROM HOME", "POLAR OPPOSITES", "RED BUTTON", "STORIES ABOUT MY BROTHER", "THE SHOE FITS", "WICK MAN", "EVIL WAYS", "YOU BROKE MY HEART"];
const some_sexy_songs_for_you_songs = ["CN TOWER", "MOTH BALLS", "SOMETHING ABOUT YOU", "CRYING IN CHANEL", "SPIDER-MAN SUPERMAN", "DEEPER", "SMALL TOWN FAME", "PIMMIE'S DILEMMA", "BRIAN STEEL", "GIMME A HUG", "RAINING IN HOUSTON", "LASERS", "MEET YOUR PADRE", "NOKIA", "DIE TRYING", "SOMEBODY LOVES ME", "CELIBACY", "OMW", "GLORIOUS", "WHEN HE'S GONE", "GREEDY"];
const iceman_songs = ["MAKE THEM CRY", "DUST", "WHISPER MY NAME", "JANICE STFU", "RAN TO ATLANTA", "SHABANG", "MAKE THEM PAY", "BURNING BRIDGES", "NATIONAL TREASURES", "B'S ON THE TABLE", "WHAT DID I MISS?", "PLOT TWIST", "2 HARD 4 THE RADIO", "MAKE THEM REMEMBER", "LITTLE BIRDIE", "DON'T WORRY", "FIRM FRIENDS", "MAKE THEM KNOW"];
const maid_of_honor_songs = ["HOE PHASE", "ROAD TRIPS", "OUTSIDE TWEAKING", "CHEETAH PRINT", "WHICH ONE", "AMAZING SHAPE", "BBW", "TRUE BESTIE", "WHERE'S YOUR STUFF INTERLUDE", "NEW BESTIE", "Q&A", "STUCK", "GOOSE AND THE JUICE", "PRINCESS"];
const habibti_songs = ["RUSTY INTRO", "WNBA", "SLAP THE CITY", "HIGH FIVES", "HURRR NOR THURRR", "I'M SPENT", "CLASSIC", "GEN 5", "WHITE BONE", "FORTWORTH", "PRIORITIZING"];

const so_far_gone = new Album(so_far_gone_songs, "So Far Gone", "images/sfg.png");
const thank_me_later = new Album(thank_me_later_songs, "Thank Me Later", "images/tml.png");
const take_care = new Album(take_care_songs, "Take Care", "images/tc.png");
const nothing_was_the_same = new Album(nothing_was_the_same_songs, "Nothing Was the Same", "images/nwts.png");
const if_youre_reading_this_its_too_late = new Album(if_youre_reading_this_its_too_late_songs, "If You're Reading This It's Too Late", "images/iyrtitl.png");
const what_a_time_to_be_alive = new Album(what_a_time_to_be_alive_songs, "What a Time to Be Alive", "images/wattba.png");
const views = new Album(views_songs, "Views", "images/v.png");
const more_life = new Album(more_life_songs, "More Life", "images/ml.png");
const scorpion = new Album(scorpion_songs, "Scorpion", "images/s.png");
const care_package = new Album(care_package_songs, "Care Package", "images/cp.png");
const dark_lane_demo_tapes = new Album(dark_lane_demo_tapes_songs, "Dark Lane Demo Tapes", "images/dldt.png");
const certified_lover_boy = new Album(certified_lover_boy_songs, "Certified Lover Boy", "images/clb.png");
const honestly_nevermind = new Album(honestly_nevermind_songs, "Honestly, Nevermind", "images/hm.png");
const her_loss = new Album(her_loss_songs, "Her Loss", "images/hl.png");
const for_all_the_dogs = new Album(for_all_the_dogs_songs, "For All the Dogs", "images/fatd.png");
const some_sexy_songs_for_you = new Album(some_sexy_songs_for_you_songs, "Some Sexy Songs 4 U", "images/sss.png");
const iceman = new Album(iceman_songs, "Iceman", "images/i.png");
const maid_of_honor = new Album(maid_of_honor_songs, "Maid of Honor", "images/moh.png");
const habibti = new Album(habibti_songs, "Habibti", "images/h.png");

const albums = [so_far_gone, thank_me_later, take_care, nothing_was_the_same, if_youre_reading_this_its_too_late, what_a_time_to_be_alive, views, more_life, scorpion, care_package, dark_lane_demo_tapes, certified_lover_boy, honestly_nevermind, her_loss, for_all_the_dogs, some_sexy_songs_for_you, iceman, maid_of_honor, habibti];

const guesses = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10"];

const userGuesses = [];

let counter = 0;

let randSong = null;
let songInfo = null;
let albumNumber = null;
let trackNumber = null;
let daily = false;
let startDate = new Date("2026-08-04");
startDate.setHours(0, 0, 0, 0);

function startDaily() {
    daily = true;
    start();
}

function startUnlimited() {
    start();
}

function startAgain() {
    for (let i=0;i<10;i++) {
        document.getElementById(guesses[i]).style.display="none";
    }
    counter = 0;
    userGuesses.length = 0;
    document.getElementById("startAgain").style.display="none";
    document.getElementById("result").style.display="none";
    startUnlimited();
}


function start() {
    if (daily) {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let diff = Math.floor((today-startDate)/1000/60/60/24);
        randSong = songs[diff%songs.length];
        songInfo = found(randSong);
    }

    else {
        randSong = songs[Math.floor(Math.random()*songs.length)];
        songInfo = found(randSong);
    }
    document.getElementById("divTwo").style.visibility="visible";
    document.getElementById("startDiv").style.display="none";
    document.getElementById("label").style.display="block";
    document.getElementById("button").onclick = read;
}

function found(song) {
    for (let j=0;j<albums.length;j++) {
        for (let i=0;i<albums[j].albumSongs.length;i++) {
            if (song === albums[j].albumSongs[i]) {
                return new Point (j+1,i+1);
            }
        }
    }
    return null;
}

function compare(songGuessed, correctSong, albumGuessed, correctAlbum) {
        let temp = new Point();
        
        temp.x = correctAlbum-albumGuessed;
        temp.y = correctSong-songGuessed;

        return temp;
    }

function read() { 
    let userSong = document.getElementById("search").value;
    userSong = userSong.toUpperCase();
    let info=found(userSong);

    if (info != null && !userGuesses.includes(userSong)) {
        validSong(userSong, songInfo);
        document.getElementById("search").value="";
    }
    
    else if (info == null) {
        document.getElementById("error").innerHTML="Enter a valid song";
        document.getElementById("error").style.visibility="visible";
    }

    else if (userGuesses.includes(userSong)) {
        document.getElementById("error").innerHTML="Already guessed";
        document.getElementById("error").style.visibility="visible";
        document.getElementById("search").value="";
    }


}

function validSong(userSong, songInfo) {
    document.getElementById("error").style.visibility="hidden";
    userGuesses.push(userSong);
    let info = found(userSong);
    let albumNumberG = info.x;
    let trackNumberG = info.y;
    albumNumber = songInfo.x;
    trackNumber = songInfo.y;

    let comparaison = compare(trackNumberG, trackNumber, albumNumberG, albumNumber);

    let albumHint = "";
    let trackHint = "";
    let albumColour = "";
    let trackColour = "";

    if (comparaison.x > 0) {
        albumHint = "images/fleche2.png";
    }
    else if (comparaison.x == 0) {
        albumHint = "images/check.png";
        albumColour = "rgb(117, 235, 38)";
    }
    else {albumHint = "images/fleche.png";}

    if (comparaison.y > 0) {
        trackHint = "images/fleche2.png";
    }
    else if (comparaison.y == 0) {
        trackHint = "images/check.png";
        trackColour = "rgb(117, 235, 38)";
    }
    else {trackHint = "images/fleche.png";}

    if (Math.abs(comparaison.x) <3 && Math.abs(comparaison.x)>0) {
        albumColour = "rgb(241, 228, 35)";
    }

    if (Math.abs(comparaison.y) <3 && Math.abs(comparaison.y)>0) {
        trackColour = "rgb(241, 228, 35)";
    }

    if (counter<10) {
        document.getElementById(guesses[counter]).innerHTML = "<span class='song'>" + userSong + "</span>" + "<span class='album'><img src='" + albums[albumNumberG-1].albumLink + "'></span>" + "<span class='arrow' id='arrow" + counter + "'><img src='" + albumHint + "'></span>" + "<span class='track'>" + trackNumberG + "</span>" + "<span class='arrow2' id='arrow" + counter + "2'><img src='" + trackHint + "'></span>";
        document.getElementById(guesses[counter]).style.display="block";
        document.querySelector("#arrow" + counter + " img").style.backgroundColor = albumColour;
        document.querySelector("#arrow" + counter + "2 img").style.backgroundColor = trackColour;
        if (userSong === randSong) {
            document.getElementById("result").innerHTML="You Win!";
            document.getElementById("result").style.display="block";
            document.getElementById("button").onclick = null;
            if (!daily) {
                document.getElementById("startAgain").style.display="inline-block";
            }
        }
        else {
            counter++;  
        }
        
        if (counter == 10) {
            document.getElementById("result").innerHTML="Better luck next time. The song was " + randSong;
            document.getElementById("result").style.display="block";
            document.getElementById("button").onclick = null;
        }
    } 
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("button").click();
    }
});