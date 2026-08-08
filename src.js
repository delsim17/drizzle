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

const so_far_gone_songs = ["LUST FOR LIFE", "HOUSTATLANTAVEGAS", "SUCCESSFUL", "LET'S CALL IT OFF", "NOVEMBER 18TH", "IGNANT SHIT", "A NIGHT OFF", "SAY WHAT'S REAL", "LITTLE BIT", "BEST I EVER HAD", "UNSTOPPABLE", "UPTOWN", "SOONER THAN LATER", "BRIA'S INTERLUDE", "THE CALM", "OUTRO", "BRAND NEW", "CONGRATULATIONS"];
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

const so_far_gone_music = ["music/lfl.mp3","music/hou.mp3","music/suc.mp3","music/let.mp3","music/nov.mp3","music/ign.mp3","music/ani.mp3","music/say.mp3","music/lit.mp3","music/bes.mp3","music/uns.mp3","music/upt.mp3","music/soo.mp3","music/bri.mp3","music/thecalm.mp3","music/out.mp3","music/bra.mp3","music/cong.mp3"];
const thank_me_later_music = ["music/fir.mp3","music/kar.mp3","music/theres.mp3","music/ove.mp3","music/show.mp3","music/upa.mp3","music/fan.mp3","music/shu.mp3","music/unf.mp3","music/lig.mp3","music/mis.mp3","music/cec.mp3","music/fin.mp3","music/tha.mp3"];
const take_care_music = ["music/omd.mp3","music/sho.mp3","music/hea.mp3","music/cre.mp3","music/tak.mp3","music/mar.mp3","music/bur.mp3","music/und.mp3","music/we.mp3","music/mak.mp3","music/lor.mp3","music/cam.mp3","music/doi.mp3","music/rea.mp3","music/lwy.mp3","music/hyf.mp3","music/pra.mp3","music/theride.mp3"];
const nothing_was_the_same_music = ["music/tus.mp3","music/fur.mp3","music/str.mp3","music/wut.mp3","music/own.mp3","music/wrs.mp3","music/frt.mp3","music/how.mp3","music/conne.mp3","music/lan.mp3","music/305.mp3","music/too.mp3","music/pnd.mp3","music/come.mp3","music/all.mp3"];
const if_youre_reading_this_its_too_late_music = ["music/leg.mp3","music/ene.mp3","music/10b.mp3","music/kno.mp3","music/not.mp3","music/mad.mp3","music/6go.mp3","music/sta.mp3","music/pre.mp3","music/wni.mp3","music/ust.mp3","music/6ma.mp3","music/now.mp3","music/com.mp3","music/you.mp3","music/jun.mp3","music/6pm.mp3"];
const what_a_time_to_be_alive_music = ["music/dig.mp3","music/big.mp3","music/liv.mp3","music/dia.mp3","music/sch.mp3","music/pla.mp3","music/i'm.mp3","music/chan.mp3","music/jump.mp3","music/jer.mp3","music/30f.mp3"];
const views_music = ["music/kee.mp3","music/9.mp3","music/ute.mp3","music/fel.mp3","music/hyt.mp3","music/wes.mp3","music/red.mp3","music/wit.mp3","music/fai.mp3","music/sti.mp3","music/cont.mp3","music/oned.mp3","music/gra.mp3","music/chi.mp3","music/pop.mp3","music/toog.mp3","music/sum.mp3","music/fireand.mp3","music/vie.mp3","music/hot.mp3"];
const more_life_music = ["music/fre.mp3","music/nol.mp3","music/pas.mp3","music/jor.mp3","music/get.mp3","music/madi.mp3","music/ble.mp3","music/442.mp3","music/gyc.mp3","music/ske.mp3","music/por.mp3","music/sac.mp3","music/nis.mp3","music/tee.mp3","music/kmt.mp3","music/los.mp3","music/can.mp3","music/glo.mp3","music/sin.mp3","music/fak.mp3","music/ice.mp3","music/don.mp3"];
const scorpion_music = ["music/sur.mp3","music/non.mp3","music/ele.mp3","music/emo.mp3","music/god.mp3","music/ims.mp3","music/8ou.mp3","music/mob.mp3","music/cant.mp3","music/san.mp3","music/tal.mp3","music/isz.mp3","music/pea.mp3","music/sumg.mp3","music/jad.mp3","music/nic.mp3","music/fine.mp3","music/rat.mp3","music/that.mp3","music/blu.mp3","music/inm.mp3","music/dont.mp3","music/aft.mp3","music/finf.mp3","music/marc.mp3"];
const care_package_music = ["music/dmc.mp3","music/mot.mp3","music/hbn.mp3","music/tis.mp3","music/die.mp3","music/dd.mp3","music/4pc.mp3","music/5am.mp3","music/igl.mp3","music/ms.mp3","music/jfm.mp3","music/cp.mp3","music/fs.mp3","music/hom.mp3","music/glb.mp3","music/pmm.mp3","music/ci.mp3"];
const dark_lane_demo_tapes_music = ["music/dee.mp3","music/whe.mp3","music/chic.mp3","music/noty.mp3","music/toos.mp3","music/des.mp3","music/tim.mp3","music/land.mp3","music/d4l.mp3","music/pai.mp3","music/loss.mp3","music/from.mp3","music/dem.mp3","music/war.mp3"];
const certified_lover_boy_music = ["music/cha.mp3","music/pap.mp3","music/gir.mp3","music/int.mp3","music/lov.mp3","music/fair.mp3","music/way.mp3","music/tsu.mp3","music/N2D.mp3","music/pip.mp3","music/yeb.mp3","music/nof.mp3","music/kni.mp3","music/7am.mp3","music/rac.mp3","music/fou.mp3","music/geta.mp3","music/youonly.mp3","music/imy2.mp3","music/fuc.mp3","music/theremo.mp3"];
const honestly_nevermind_music = ["music/intr.mp3","music/fal.mp3","music/tex.mp3","music/cur.mp3","music/ake.mp3","music/call.mp3","music/stic.mp3","music/mas.mp3","music/fli.mp3","music/over.mp3","music/dow.mp3","music/tie.mp3","music/lia.mp3","music/jim.mp3"];
const her_loss_music = ["music/ric.mp3","music/maj.mp3","music/onb.mp3","music/bac.mp3","music/pri.mp3","music/spi.mp3","music/hour.mp3","music/tre.mp3","music/cir.mp3","music/pus.mp3","music/bro.mp3","music/mid.mp3","music/jum.mp3","music/mor.mp3","music/3am.mp3","music/igu.mp3"];
const for_all_the_dogs_music = ["music/vir.mp3","music/ame.mp3","music/cal.mp3","music/fea.mp3","music/day.mp3","music/fps.mp3","music/idg.mp3","music/796.mp3","music/sli.mp3","music/bah.mp3","music/tri.mp3","music/scr.mp3","music/dre.mp3","music/mem.mp3","music/wou.mp3","music/allt.mp3","music/8am.mp3","music/bbl.mp3","music/gen.mp3","music/rich.mp3","music/ano.mp3","music/awa.mp3","music/pol.mp3","music/redb.mp3","music/sam.mp3","music/shoe.mp3","music/wic.mp3","music/evi.mp3","music/youb.mp3"];
const some_sexy_songs_for_you_music = ["music/cnt.mp3","music/moth.mp3","music/som.mp3","music/cry.mp3","music/spid.mp3","music/deep.mp3","music/sma.mp3","music/pim.mp3","music/bria.mp3","music/gim.mp3","music/rai.mp3","music/las.mp3","music/mee.mp3","music/nok.mp3","music/diet.mp3","music/somb.mp3","music/cel.mp3","music/omw.mp3","music/glor.mp3","music/when.mp3","music/gre.mp3"];
const iceman_music = ["music/makecry.mp3","music/dus.mp3","music/whi.mp3","music/jan.mp3","music/ran.mp3","music/sha.mp3","music/makepay.mp3","music/burn.mp3","music/nat.mp3","music/bso.mp3","music/wha.mp3","music/plo.mp3","music/2ha.mp3","music/makeremember.mp3","music/litt.mp3","music/dw.mp3","music/firm.mp3","music/makeknow.mp3"];
const maid_of_honor_music = ["music/hoe.mp3","music/roa.mp3","music/outs.mp3","music/che.mp3","music/whic.mp3","music/ama.mp3","music/bbw.mp3","music/tru.mp3","music/wher.mp3","music/new.mp3","music/q&a.mp3","music/stu.mp3","music/goo.mp3","music/prin.mp3"];
const habibti_music = ["music/rus.mp3","music/wnb.mp3","music/sla.mp3","music/hig.mp3","music/hur.mp3","music/imsp.mp3","music/cla.mp3","music/gen5.mp3","music/whit.mp3","music/for.mp3","music/prio.mp3"];

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

const musicAlbums = [so_far_gone_music, thank_me_later_music, take_care_music, nothing_was_the_same_music, if_youre_reading_this_its_too_late_music, what_a_time_to_be_alive_music, views_music, more_life_music, scorpion_music, care_package_music, dark_lane_demo_tapes_music, certified_lover_boy_music, honestly_nevermind_music, her_loss_music, for_all_the_dogs_music, some_sexy_songs_for_you_music, iceman_music, maid_of_honor_music, habibti_music];

const guesses = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10"];

const rounds = ["roundOne", "roundTwo", "roundThree", "roundFour", "roundFive"];

const durations = [500, 1000, 3000, 5000, 10000];

const userGuesses = [];

const stats = {
    classicDailyGuesses: [],
    audioDailyGuesses: [], 
    classicDistribution: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    audioDistribution: [0, 0, 0, 0, 0], 
    savedDiff: 0,
    audioPlayedToday: false,
    classicPlayedToday: false,
    audioWonToday: false,
    classicWonToday: false,
    audioWins: 0, 
    audioPlays: 0, 
    classicWins: 0,
    classicPlays: 0
};

const savedStats = localStorage.getItem("stats");

if (savedStats) {
    Object.assign(stats, JSON.parse(savedStats));
}

function ss() {
    localStorage.setItem("stats", JSON.stringify(stats));
}

let counter = 0;

let randSong = null;
let songInfo = null;
let albumNumber = null;
let trackNumber = null;
let daily = false;
let startDate = new Date("2026-08-04");
startDate.setHours(0, 0, 0, 0);
let heardle=false;
let mp3Song = new Audio();

let today = new Date();
today.setHours(0, 0, 0, 0);
let diff = Math.floor((today-startDate)/1000/60/60/24);

if (diff > stats.savedDiff) {
    newDay();
}

function newDay() {
    stats.classicPlayedToday = false;
    stats.audioPlayedToday = false;
    stats.classicWonToday = false;
    stats.audioWonToday = false;
    stats.classicDailyGuesses = [];
    stats.audioDailyGuesses = [];
    stats.savedDiff = diff;
    ss();
}

function info() {
    document.getElementById("info").style.display="inline-block";
    document.getElementById("xButton").style.display="inline-block";
    document.getElementById("infoButton").style.display="none";
}
function x() {
    document.getElementById("info").style.display="none";
    document.getElementById("xButton").style.display="none";
    document.getElementById("infoButton").style.display="inline-block";
}

function startClassic() {
    gameMode();
}

function startHeardle() {
    heardle=true;
    gameMode();
}

function gameMode() {
    document.getElementById("classicButton").innerHTML="Daily";
    document.getElementById("classicButton").onclick=startDaily;
    document.getElementById("heardleButton").innerHTML="Unlimited";
    document.getElementById("heardleButton").onclick=startUnlimited;
    document.getElementById("backButton").style.display="inline-block";
    document.getElementById("backButton").onclick=fullBack;
}


function startDaily() {
    daily = true;
    start();
}

function startUnlimited() {
    start();
}


function reset() {
    for (let i=0;i<10;i++) {
        document.getElementById(guesses[i]).style.display="none";
    }
    counter = 0;
    userGuesses.length = 0;
    document.getElementById("startAgain").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById("search").value="";
    document.getElementById("button").onclick=read;
    document.getElementById("error").style.visibility="hidden";
    mp3Song.pause();
    mp3Song.currentTime=0;
}

function startAgain() {
    reset();
    startUnlimited();
}

function back() {
    reset();
    document.getElementById("divTwo").style.visibility="hidden";
    document.getElementById("startDiv").style.display="block";
    if (heardle) {
        document.getElementById("playButton").style.display="none";
        document.getElementById("heardleLabel").style.display="none";
        document.getElementById("rounds").style.display="none";
        document.getElementById("divTwo").style.padding="0px";
    }
    else {
        document.getElementById("label").style.display="none";
    }
    document.getElementById("backButton").onclick=fullBack;
    daily = false;
}

function fullBack() {
    document.getElementById("classicButton").innerHTML="Classic";
    document.getElementById("classicButton").onclick=startClassic;
    document.getElementById("heardleButton").innerHTML="Audio";
    document.getElementById("heardleButton").onclick=startHeardle;
    document.getElementById("backButton").style.display="none";
    document.getElementById("backButton").onclick=null;
    heardle = false;
}


function start() {
    if (daily) {
        if (!heardle) {
            if (!stats.classicPlayedToday) {
                stats.classicPlays++;
            }
            stats.classicPlayedToday = true;
            randSong = songs[diff%songs.length];
            songInfo = found(randSong);
            if (stats.classicDailyGuesses.length != 0) {
                for (let i=0;i<stats.classicDailyGuesses.length;i++) {
                    validSong(stats.classicDailyGuesses[i], randSong, true)
                }
            }
        }

        else {
            if (!stats.audioPlayedToday) {
                stats.audioPlays++;
            }
            stats.audioPlayedToday = true;
            randSong = songs[Math.floor(songs.length/2) + (diff % Math.ceil(songs.length/2))];
            songInfo = found(randSong);

            if (stats.audioDailyGuesses.length != 0) {
                for (let i=0;i<stats.audioDailyGuesses.length;i++) {
                    validSong(stats.audioDailyGuesses[i], randSong, true)
                }
            }
        }
        ss();
    }

    else {
        randSong = songs[Math.floor(Math.random()*songs.length)];
        songInfo = found(randSong);
    }
    document.getElementById("divTwo").style.visibility="visible";
    document.getElementById("startDiv").style.display="none";
    document.getElementById("backButton").onclick=back;
    if (!heardle) {
        document.getElementById("search").placeholder = "Enter a Drake Song (" + (counter+1) + "/10)";
        document.getElementById("label").style.display="block";
    }

    else {
        document.getElementById("search").placeholder = "Enter a Drake Song (" + (counter+1) + "/5)";
        document.getElementById("playButton").style.display="inline-block";
        document.getElementById("heardleLabel").style.display="block";
        document.getElementById("rounds").style.display="block";
        document.getElementById("divTwo").style.padding="5px";
        document.getElementById("playButton").onclick=playSong;
        illuminate(counter);
        mp3Song.src=musicAlbums[songInfo.x-1][songInfo.y-1];
    }
    document.getElementById("button").onclick = read;
}

function playSong() {
    mp3Song.currentTime = 0;
    mp3Song.play();
    setTimeout(function() {
        mp3Song.pause();
    }, durations[counter]);
}

function pauseSong() {
    mp3Song.pause();
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

function illuminate(round) {
    for (let i=0;i<5;i++) {
        document.getElementById(rounds[i]).style.color="rgb(100, 100, 100)";
    }
    document.getElementById(rounds[round]).style.color="black";
}

function read() { 
    let userSong = document.getElementById("search").value;
    userSong = userSong.trim().toUpperCase();
    let info=found(userSong);

    if (info != null && !userGuesses.includes(userSong)) {
        if (!heardle) {
            validSong(userSong, songInfo, false);
        }
        else {
            heardleValidSong(userSong, songInfo, false);
        }
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

function heardleValidSong(userSong, songInfo, a) {
    if (!a) {
        stats.audioDailyGuesses.push(userSong);
        ss();
    }
    document.getElementById("error").style.visibility="hidden";
    userGuesses.push(userSong);
    let hint = "";
    if (userSong === randSong) {
        hint = "images/check.png";
    }

    else {
        hint = "images/x.png";
    }

    if (counter<5) {
        document.getElementById(guesses[counter]).innerHTML = "<span class='heardleSong'>" + userSong + "</span> <span id='heardleHint'><img src='" + hint + "'></span>";
        document.getElementById(guesses[counter]).style.display="block";
        if (userSong === randSong) {
            document.getElementById("result").innerHTML="You Win!";
            document.getElementById("result").style.display="block";
            document.getElementById("button").onclick = null;
            document.getElementById("playButton").onclick = null;
            if (!stats.audioWonToday && daily) {
                stats.audioWins++;
                stats.audioWonToday = true;
                stats.audioDistribution[counter]++;
                ss();
            }
            if (!daily) {
                document.getElementById("startAgain").style.display="inline-block";
            }
        }

        else {
            counter++;  
        }
        if (counter != 5) {
            document.getElementById("search").placeholder = "Enter a Drake Song (" + (counter+1) + "/5)";
            illuminate(counter);
        }

        if (counter == 5) {
            document.getElementById("result").innerHTML="Better luck next time. The song was " + randSong;
            document.getElementById("result").style.display="block";
            document.getElementById("button").onclick = null;
            document.getElementById("playButton").onclick = null;
            document.getElementById("startAgain").style.display="inline-block";
        }

        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
        });
    } 
}

function validSong(userSong, songInfo, a) {
    if (!a) {
        stats.classicDailyGuesses.push(userSong);
        ss();
    }
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
        document.querySelector("#arrow" + counter + " img").style.borderRadius = "50%";
        document.querySelector("#arrow" + counter + "2 img").style.backgroundColor = trackColour;
        document.querySelector("#arrow" + counter + "2 img").style.borderRadius = "50%";

        if (userSong === randSong) {
            document.getElementById("result").innerHTML="You Win!";
            document.getElementById("result").style.display="block";
            document.getElementById("button").onclick = null;
            if (!stats.classicWonToday && daily) {
                stats.classicWins++;
                stats.classicWonToday = true;
                stats.classicDistribution[counter]++;
                ss();
            }
            if (!daily) {
                document.getElementById("startAgain").style.display="inline-block";
            }
        }
        else {
            counter++;  
        }

        if (counter != 10) {
            document.getElementById("search").placeholder = "Enter a Drake Song (" + (counter+1) + "/10)";
        }
        
        if (counter == 10) {
            document.getElementById("result").innerHTML="Better luck next time. The song was " + randSong;
            document.getElementById("result").style.display="block";
            document.getElementById("button").onclick = null;
            document.getElementById("startAgain").style.display="inline-block";
        }

        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
        });
    } 
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("button").click();
    }
});

if (window.innerWidth <= 768) {
    document.getElementById("info").src = "images/infoVert.png";
}