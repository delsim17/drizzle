import java.util.Random;
import java.awt.Point;
import java.util.Scanner;

public class draft {

    static class Album {
        String albumSongs[];
        String albumName;
        String albumLink;
        Album(String[] songs, String name, String link) {
            this.albumSongs = songs;
            this.albumName = name;
            this.albumLink = link;
        }
    }

    static String songs[] = {

    "Lust For Life", "Houstatlantavegas", "Successful", "Let's Call It Off", "November 18th", "Ignant Shit", "A Night Off", "Say What's Real", "Little Bit", "Best I Ever Had", "Unstoppable", "Uptown", "Sooner Than Later", "Bria's Interlude", "The Calm", "Brand New", "Congratulations", 

    "Fireworks", "Karaoke", "The Resistance", "Over", "Show Me a Good Time", "Up All Night", "Fancy", "Shut It Down", "Unforgettable", "Light Up", "Miss Me", "Cece's Interlude", "Find Your Love", "Thank Me Now", 

    "Over My Dead Body", "Shot for Me", "Headlines", "Crew Love", "Take Care", "Marvins Room", "Buried Alive Interlude", "Under Ground Kings", "We'll Be Fine", "Make Me Proud", "Lord Knows", "Cameras", "Doing It Wrong", "The Real Her", "Look What You've Done", "HYFR", "Practice", "The Ride", 

    "Tuscan Leather", "Furthest Thing", "Started From the Bottom", "Wu-Tang Forever", "Own It", "Worst Behavior", "From Time", "Hold On, We're Going Home", "Connect", "The Language", "305 To My City", "Too Much", "Pound Cake", "Come Thru", "All Me", 

    "Legend", "Energy", "10 Bands", "Know Yourself", "No Tellin'", "Madonna", "6 God", "Star67", "Preach", "Wednesday Night Interlude", "Used To", "6 Man", "Now & Forever", "Company", "You & The 6", "Jungle", "6pm in New York", 

    "Digital Dash", "Big Rings", "Live From The Gutter", "Diamonds Dancing", "Scholarships", "Plastic Bag", "I'm The Plug", "Change Locations", "Jumpman", "Jersey", "30 for 30 Freestyle", 

    "Keep the Family Close", "9", "U With Me?", "Feel No Ways", "Hype", "Weston Road Flows", "Redemption", "With You", "Faithful", "Still Here", "Controlla", "One Dance", "Grammys", "Child's Play", "Pop Style", "Too Good", "Summers Over Interlude", "Fire & Desire", "Views", "Hotline Bling", 

    "Free Smoke", "No Long Talk", "Passionfruit", "Jorja Interlude", "Get It Together", "Madiba Riddim", "Blem", "4422", "Gyalchester", "Skepta Interlude", "Portland", "Sacrifices", "Nothings Into Somethings", "Teenage Fever", "KMT", "Lose You", "Can't Have Everything", "Glow", "Since Way Back", "Fake Love", "Ice Melts", "Do Not Disturb", 

    "Survival", "Nonstop", "Elevate", "Emotionless", "God's Plan", "I'm Upset", "8 Out of 10", "Mob Ties", "Can't Take a Joke", "Sandra's Rose", "Talk Up", "Is There More", "Peak", "Summer Games", "Jaded", "Nice For What", "Finesse", "Ratchet Happy Birthday", "That's How You Feel", "Blue Tint", "In My Feelings", "Don't Matter To Me", "After Dark", "Final Fantasy", "March 14", 

    "Dreams Money Can Buy", "The Motion", "How Bout Now", "Trust Issues", "Days in the East", "Draft Day", "4PM in Calabasas", "5AM in Toronto", "I Get Lonely", "My Side", "Jodeci Freestyle", "Club Paradise", "Free Spirit", "Heat of the Moment", "Girls Love Beyoncé", "Paris Morton Music", "Can I", 

    "Deep Pockets", "When To Say When", "Chicago Freestyle", "Not You Too", "Toosie Slide", "Desires", "Time Flies", "Landed", "D4L", "Pain 1993", "Losses", "From Florida With Love", "Demons", "War", 

    "Champagne Poetry", "Papi's Home", "Girls Want Girls", "In The Bible", "Love All", "Fair Trade", "Way 2 Sexy", "TSU", "N 2 Deep", "Pipe Down", "Yebba's Heartbreak", "No Friends In The Industry", "Knife Talk", "7am on Bridle Path", "Race My Mind", "Fountains", "Get Along Better", "You Only Live Twice", "IMY2", "F*****g Fans", "The Remorse", 

    "Intro", "Falling Back", "Texts Go Green", "Currents", "A Keeper", "Calling My Name", "Sticky", "Massive", "Flight's Booked", "Overdrive", "Down Hill", "Tie That Binds", "Liability", "Jimmy Cooks", 

    "Rich Flex", "Major Distribution", "On BS", "BackOutsideBoyz", "Privileged Rappers", "Spin Bout U", "Hours In Silence", "Treacherous Twins", "Circo Loco", "Pussy & Millions", "Broke Boys", "Middle of the Ocean", "Jumbotron Shit Poppin", "More M's", "3AM on Glenwood", "I Guess It's Fuck Me", 

    "Virginia Beach", "Amen", "Calling For You", "Fear of Heights", "Daylight", "First Person Shooter", "IDGAF", "7969 Santa", "Slime You Out", "Bahamas Promises", "Tried Our Best", "Screw the World", "Drew a Picasso", "Members Only", "What Would Pluto Do", "All the Parties", "8AM in Charlotte", "BBL Love Interlude", "Gently", "Rich Baby Daddy", "Another Late Night", "Away From Home", "Polar Opposites", "Red Button", "Stories About My Brother", "The Shoe Fits", "Wick Man", "Evil Ways", "You Broke My Heart", 

    "CN Tower", "Moth Balls", "Something About You", "Crying in Chanel", "Spider-Man Superman", "Deeper", "Small Town Fame", "Pimmie's Dilemma", "Brian Steel", "Gimme a Hug", "Raining in Houston", "Lasers", "Meet Your Padre", "Nokia", "Die Trying", "Somebody Loves Me", "Celibacy", "OMW", "Glorious", "When He's Gone", "Greedy", 

    "Make Them Cry", "Dust", "Whisper My Name", "Janice STFU", "Ran To Atlanta", "Shabang", "Make Them Pay", "Burning Bridges", "National Treasures", "B's On The Table", "What Did I Miss?", "Plot Twist", "2 Hard 4 The Radio", "Make Them Remember", "Little Birdie", "Don't Worry", "Firm Friends", "Make Them Know", 

    "Hoe Phase", "Road Trips", "Outside Tweaking", "Cheetah Print", "Which One", "Amazing Shape", "BBW", "True Bestie", "Where's Your Stuff Interlude", "New Bestie", "Q&A", "Stuck", "Goose and The Juice", "Princess", 

    "Rusty Intro", "WNBA", "Slap The City", "High Fives", "Hurrr Nor Thurrr", "I'm Spent", "Classic", "Gen 5", "White Bone", "Fortworth", "Prioritizing"

    };   

    static String so_far_gone_songs[] = {"Lust For Life", "Houstatlantavegas", "Successful", "Let's Call It Off", "November 18th", "Ignant Shit", "A Night Off", "Say What's Real", "Little Bit", "Best I Ever Had", "Unstoppable", "Uptown", "Sooner Than Later", "Bria's Interlude", "The Calm", "Brand New", "Congratulations"};
    static String thank_me_later_songs[] = {"Fireworks", "Karaoke", "The Resistance", "Over", "Show Me a Good Time", "Up All Night", "Fancy", "Shut It Down", "Unforgettable", "Light Up", "Miss Me", "Cece's Interlude", "Find Your Love", "Thank Me Now"};
    static String take_care_songs[] = {"Over My Dead Body", "Shot for Me", "Headlines", "Crew Love", "Take Care", "Marvins Room", "Buried Alive Interlude", "Under Ground Kings", "We'll Be Fine", "Make Me Proud", "Lord Knows", "Cameras", "Doing It Wrong", "The Real Her", "Look What You've Done", "HYFR", "Practice", "The Ride"};
    static String nothing_was_the_same_songs[] = {"Tuscan Leather", "Furthest Thing", "Started From the Bottom", "Wu-Tang Forever", "Own It", "Worst Behavior", "From Time", "Hold On, We're Going Home", "Connect", "The Language", "305 To My City", "Too Much", "Pound Cake", "Come Thru", "All Me"};
    static String if_youre_reading_this_its_too_late_songs[] = {"Legend", "Energy", "10 Bands", "Know Yourself", "No Tellin'", "Madonna", "6 God", "Star67", "Preach", "Wednesday Night Interlude", "Used To", "6 Man", "Now & Forever", "Company", "You & The 6", "Jungle", "6pm in New York"};
    static String what_a_time_to_be_alive_songs[] = {"Digital Dash", "Big Rings", "Live From The Gutter", "Diamonds Dancing", "Scholarships", "Plastic Bag", "I'm The Plug", "Change Locations", "Jumpman", "Jersey", "30 for 30 Freestyle"};
    static String views_songs[] = {"Keep the Family Close", "9", "U With Me?", "Feel No Ways", "Hype", "Weston Road Flows", "Redemption", "With You", "Faithful", "Still Here", "Controlla", "One Dance", "Grammys", "Child's Play", "Pop Style", "Too Good", "Summers Over Interlude", "Fire & Desire", "Views", "Hotline Bling"};
    static String more_life_songs[] = {"Free Smoke", "No Long Talk", "Passionfruit", "Jorja Interlude", "Get It Together", "Madiba Riddim", "Blem", "4422", "Gyalchester", "Skepta Interlude", "Portland", "Sacrifices", "Nothings Into Somethings", "Teenage Fever", "KMT", "Lose You", "Can't Have Everything", "Glow", "Since Way Back", "Fake Love", "Ice Melts", "Do Not Disturb"};
    static String scorpion_songs[] = {"Survival", "Nonstop", "Elevate", "Emotionless", "God's Plan", "I'm Upset", "8 Out of 10", "Mob Ties", "Can't Take a Joke", "Sandra's Rose", "Talk Up", "Is There More", "Peak", "Summer Games", "Jaded", "Nice For What", "Finesse", "Ratchet Happy Birthday", "That's How You Feel", "Blue Tint", "In My Feelings", "Don't Matter To Me", "After Dark", "Final Fantasy", "March 14"};
    static String care_package_songs[] = {"Dreams Money Can Buy", "The Motion", "How Bout Now", "Trust Issues", "Days in the East", "Draft Day", "4PM in Calabasas", "5AM in Toronto", "I Get Lonely", "My Side", "Jodeci Freestyle", "Club Paradise", "Free Spirit", "Heat of the Moment", "Girls Love Beyoncé", "Paris Morton Music", "Can I"};
    static String dark_lane_demo_tapes_songs[] = {"Deep Pockets", "When To Say When", "Chicago Freestyle", "Not You Too", "Toosie Slide", "Desires", "Time Flies", "Landed", "D4L", "Pain 1993", "Losses", "From Florida With Love", "Demons", "War"};
    static String certified_lover_boy_songs[] = {"Champagne Poetry", "Papi's Home", "Girls Want Girls", "In The Bible", "Love All", "Fair Trade", "Way 2 Sexy", "TSU", "N 2 Deep", "Pipe Down", "Yebba's Heartbreak", "No Friends In The Industry", "Knife Talk", "7am on Bridle Path", "Race My Mind", "Fountains", "Get Along Better", "You Only Live Twice", "IMY2", "F*****g Fans", "The Remorse"};
    static String honestly_nevermind_songs[] = {"Intro", "Falling Back", "Texts Go Green", "Currents", "A Keeper", "Calling My Name", "Sticky", "Massive", "Flight's Booked", "Overdrive", "Down Hill", "Tie That Binds", "Liability", "Jimmy Cooks"};
    static String her_loss_songs[] = {"Rich Flex", "Major Distribution", "On BS", "BackOutsideBoyz", "Privileged Rappers", "Spin Bout U", "Hours In Silence", "Treacherous Twins", "Circo Loco", "Pussy & Millions", "Broke Boys", "Middle of the Ocean", "Jumbotron Shit Poppin", "More M's", "3AM on Glenwood", "I Guess It's Fuck Me"};
    static String for_all_the_dogs_songs[] = {"Virginia Beach", "Amen", "Calling For You", "Fear of Heights", "Daylight", "First Person Shooter", "IDGAF", "7969 Santa", "Slime You Out", "Bahamas Promises", "Tried Our Best", "Screw the World", "Drew a Picasso", "Members Only", "What Would Pluto Do", "All the Parties", "8AM in Charlotte", "BBL Love Interlude", "Gently", "Rich Baby Daddy", "Another Late Night", "Away From Home", "Polar Opposites", "Red Button", "Stories About My Brother", "The Shoe Fits", "Wick Man", "Evil Ways", "You Broke My Heart"};
    static String some_sexy_songs_for_you_songs[] = {"CN Tower", "Moth Balls", "Something About You", "Crying in Chanel", "Spider-Man Superman", "Deeper", "Small Town Fame", "Pimmie's Dilemma", "Brian Steel", "Gimme a Hug", "Raining in Houston", "Lasers", "Meet Your Padre", "Nokia", "Die Trying", "Somebody Loves Me", "Celibacy", "OMW", "Glorious", "When He's Gone", "Greedy"};
    static String iceman_songs[] = {"Make Them Cry", "Dust", "Whisper My Name", "Janice STFU", "Ran To Atlanta", "Shabang", "Make Them Pay", "Burning Bridges", "National Treasures", "B's On The Table", "What Did I Miss?", "Plot Twist", "2 Hard 4 The Radio", "Make Them Remember", "Little Birdie", "Don't Worry", "Firm Friends", "Make Them Know"};
    static String maid_of_honor_songs[] = {"Hoe Phase", "Road Trips", "Outside Tweaking", "Cheetah Print", "Which One", "Amazing Shape", "BBW", "True Bestie", "Where's Your Stuff Interlude", "New Bestie", "Q&A", "Stuck", "Goose and The Juice", "Princess"};
    static String habibti_songs[] = {"Rusty Intro", "WNBA", "Slap The City", "High Fives", "Hurrr Nor Thurrr", "I'm Spent", "Classic", "Gen 5", "White Bone", "Fortworth", "Prioritizing"};

    static Album so_far_gone = new Album(so_far_gone_songs, "So Far Gone", "SFG.png");
    static Album thank_me_later = new Album(thank_me_later_songs, "Thank Me Later", "TML.png");
    static Album take_care = new Album(take_care_songs, "Take Care", "TC.png");
    static Album nothing_was_the_same = new Album(nothing_was_the_same_songs, "Nothing Was the Same", "NWTS.png");
    static Album if_youre_reading_this_its_too_late = new Album(if_youre_reading_this_its_too_late_songs, "If You're Reading This It's Too Late", "IYRTITL.png");
    static Album what_a_time_to_be_alive = new Album(what_a_time_to_be_alive_songs, "What a Time to Be Alive", "WATTBA.png");
    static Album views = new Album(views_songs, "Views", "V.png");
    static Album more_life = new Album(more_life_songs, "More Life", "ML.png");
    static Album scorpion = new Album(scorpion_songs, "Scorpion", "S.png");
    static Album care_package = new Album(care_package_songs, "Care Package", "CP.png");
    static Album dark_lane_demo_tapes = new Album(dark_lane_demo_tapes_songs, "Dark Lane Demo Tapes", "DLDT.png");
    static Album certified_lover_boy = new Album(certified_lover_boy_songs, "Certified Lover Boy", "CLB.png");
    static Album honestly_nevermind = new Album(honestly_nevermind_songs, "Honestly, Nevermind", "HNVM.png");
    static Album her_loss = new Album(her_loss_songs, "Her Loss", "HL.png");
    static Album for_all_the_dogs = new Album(for_all_the_dogs_songs, "For All the Dogs", "FATD.png");
    static Album some_sexy_songs_for_you = new Album(some_sexy_songs_for_you_songs, "Some Sexy Songs 4 U", "SSS4U.png");
    static Album iceman = new Album(iceman_songs, "Iceman", "ICEMAN.png");
    static Album maid_of_honor = new Album(maid_of_honor_songs, "Maid of Honor", "MOH.png");
    static Album habibti = new Album(habibti_songs, "Habibti", "HABIBTI.png");

    static Album albums[] = {so_far_gone, thank_me_later, take_care, nothing_was_the_same, if_youre_reading_this_its_too_late, what_a_time_to_be_alive, views, more_life, scorpion, care_package, dark_lane_demo_tapes, certified_lover_boy, honestly_nevermind, her_loss, for_all_the_dogs, some_sexy_songs_for_you, iceman, maid_of_honor, habibti};

    static Point found(String song) {
        for (int j=0;j<albums.length;j++) {
            for (int i=0;i<albums[j].albumSongs.length;i++) {
                if (song.equals(albums[j].albumSongs[i])) {
                    return new Point (j+1,i+1);
                }
            }
        }
        return null;
    }

    static Point compare(int songGuessed, int correctSong, int albumGuessed, int correctAlbum) {
        Point temp = new Point();
        if (correctAlbum>albumGuessed) {
            temp.x=0;
        }
        else if (correctAlbum==albumGuessed) {
            temp.x=100;
        }
        else {temp.x=1;}

        if (correctSong>songGuessed) {
            temp.y=0;
        }
        else if (correctSong==songGuessed) {
            temp.y=100;
        }
        else {temp.y=1;}

        return temp;
    }



    public static void main(String[] args) {
        Random random = new Random();
        String song = songs[random.nextInt(songs.length)];
        Point songInfo = found(song);
        int albumNumber = songInfo.x;
        int trackNumber = songInfo.y;

        Scanner input = new Scanner(System.in);
        boolean exists = false;
        String userInput = "";

        boolean won = false;
        
        while (!won) {
            while (!exists) {
                System.out.print("Enter valid guess: "); 
                userInput = input.nextLine();
                if (found(userInput) != null) {
                    exists = true;
                }
            }
            
            exists = false;
            Point songInfoG = found(userInput);
            int albumNumberG = songInfoG.x;
            int trackNumberG = songInfoG.y;

            Point comparaison = compare(trackNumberG, trackNumber, albumNumberG, albumNumber);

            String albumHint;
            String trackHint;
            if (comparaison.x == 0) {
                albumHint = "Higher";
            }
            else if (comparaison.x == 100) {
                albumHint = "Correct";
            }
            else {albumHint = "Lower";}

            if (comparaison.y == 0) {
                trackHint = "Higher";
            }
            else if (comparaison.y == 100) {
                trackHint = "Correct";
            }
            else {trackHint = "Lower";}

            System.out.println("Song Guessed: " + userInput + "\nAlbum: " + albumHint + "\nTrack: " + trackHint);

            if (comparaison.x == 100 && comparaison.y == 100) {
                won = true;
            }
        }
        input.close();
    }
}

